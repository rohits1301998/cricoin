import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CurrencyService, ITicker } from '@cricoin/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cricoin-tickers',
  templateUrl: './tickers.component.html',
  styleUrls: ['./tickers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickersComponent implements OnInit {


  topCoins: string[] = [
    'BTC',
    'ETH',
    'BNB',
    'USDT',
    'ADA'
  ];


  exchanges = [
    'yobit',
    'binance',
    'probit'
  ];

  exchangesTickers: Observable<ITicker[]>[] = [of([])];

  constructor(private _currency: CurrencyService) { }

  ngOnInit(): void {
    this._initTickers();
  }

  private _initTickers() {
    this.exchangesTickers = this.exchanges.map((ex) => {
      return forkJoin(
        this.topCoins.map((coin) => this._currency.tickers$(ex, coin, 'INR'))
      )
      .pipe(
        map(
          tickers => tickers.filter(t => t) as ITicker[]
        )
      );
    });
  }

}
