import { Component, OnInit } from '@angular/core';
import { CurrencyService, ICoin, ICoinMarket } from '@cricoin/core';
import { IListRow, ISortedColumn } from '@cricoin/common';
import { Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

interface IExtendedCoin extends ICoin {
  isFavorite?: boolean
}

@Component({
  selector: 'cricoin-coins-listing',
  templateUrl: './coins-listing.component.html',
  styleUrls: ['./coins-listing.component.scss']
})
export class CoinsListingComponent implements OnInit {

  coins: ICoin[] = [];

  favoriteCoins: IExtendedCoin[] = [];

  currentCurrency = 'INR';

  coinMarkets$: Observable<IListRow[]> = of([]);

  isCoinsLoading = false;

  isCoinMarketsLoading = false;

  private _sortState?: ISortedColumn;


  get showViewMore(): boolean {
    return !this._allCoinsFetched;
  }

  get currentDate(): number {
    return Date.now();
  }

  private _pageNumber = 1;

  private _limit = 10;

  private _allCoinsFetched = false;

  constructor(private _currency: CurrencyService) { }

  ngOnInit(): void {
    this._currency.fiatChange$()
    .subscribe((fiat) => {
      this.currentCurrency = fiat.name;
      this._initCoinsList();
    })
  }

  sortCoins(sortedColumn: ISortedColumn) {
    this._sortState = sortedColumn;
    this.coins = this._getSortedCoins(this.coins, sortedColumn.direction, sortedColumn.id as keyof ICoin);
  }

  toggleFavorite(ev: Event, coin: IExtendedCoin) {
    ev.stopPropagation();
    coin.isFavorite = !coin.isFavorite;
    if (coin.isFavorite) {
      this.favoriteCoins = [...this.favoriteCoins, coin]
    } else {
      this.favoriteCoins = this.favoriteCoins.filter(c => c.id !== coin.id);
    }
  }

  displayCoinMarkets(coin: IListRow) {
    this.isCoinMarketsLoading = true; 
    this.coinMarkets$ = this._currency.coinMarkets$(coin.id)
    .pipe(
      map(
        markets => markets.map((m, index) => {
          return {
            id: String(index),
            ...m
          };
        })
      ),
      finalize(() => {
        this.isCoinMarketsLoading = false;
      })
    );
  }

  fetchNextCoins() {
    this._pageNumber++;
    const skip = (this._pageNumber - 1) * this._limit;
    this._fetchCoins(skip, this._limit, this.currentCurrency)
    .subscribe(coins => {
      this.coins = [...this.coins, ...coins];
      if (this._sortState) {
        this.sortCoins(this._sortState);
      }
    })
  }

  private _initCoinsList() {
    this.isCoinsLoading = true;
    this._fetchCoins(0, this._limit * this._pageNumber, this.currentCurrency)
    .pipe(
      finalize(() => {
        this.isCoinsLoading = false;
      })
    )
    .subscribe(coins => {
      this.coins = coins;
      if (this._sortState) {
        this.sortCoins(this._sortState);
      }
    })
  }

  private _fetchCoins(skip: number, limit: number, currency: string): Observable<ICoin[]> {
    return this._currency.coins$(skip, limit, currency)
    .pipe(
      map(coins => {
        this._allCoinsFetched = coins.length === 0;
        return coins;
      })
    );
  }

  private _getSortedCoins(coins: ICoin[], direction: 'ASC' | 'DESC', sortField: keyof ICoin): ICoin[] {
    return coins.sort(
      (coin1: ICoin, coin2: ICoin) => {
        if (direction === 'ASC') {
          return (coin1[sortField] as number) - (coin2[sortField] as number);
        } else {
          return (coin2[sortField] as number) - (coin1[sortField] as number);
        }
      }
    )
  }

}
