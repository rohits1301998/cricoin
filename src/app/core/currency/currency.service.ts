import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { ICoin, ICoinMarket, ICoinsResponse, ITickersResponse } from './currency';
import { IFiat } from './currency';
import { ITicker } from '..';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private _fiatsSubject = new BehaviorSubject<IFiat[]>([]);
  private _fiatsLoaded = false;
  private _fiatsSnapshot: Omit<IFiat, 'imageUrl' | 'rate'>[] = [];

  private _defaultFiat = {
    name: 'INR',
    symbol: '₹'
  };

  private _fiatChangedSubject: BehaviorSubject<Omit<IFiat, 'imageUrl' | 'rate'>>;

  constructor(private _http: HttpClient) {
    this._fiatsSnapshot = [this._defaultFiat];
    this._fiatChangedSubject = new BehaviorSubject(this._defaultFiat);
  }

  coins$(
    skip: number = 0,
    limit: number = 5,
    fiat: string = 'INR'
  ): Observable<ICoin[]> {
    return this._http
      .get<ICoinsResponse>(
        `/coins?skip=${skip}&limit=${limit}&currency=${fiat}`
      )
      .pipe(map((res) => res.coins));
  }

  fiats$(): Observable<IFiat[]> {
    if (!this._fiatsLoaded) {
      this._http
        .get<IFiat[]>('/fiats')
        .pipe(
          finalize(() => {
            this._fiatsLoaded = true;
          })
        )
        .subscribe((fiats) => {
          this._fiatsSnapshot = fiats;
          this._fiatsSubject.next(fiats);
        });
    }
    return this._fiatsSubject.asObservable();
  }

  coinMarkets$(coinId: string): Observable<ICoinMarket[]> {
    return this._http.get<ICoinMarket[]>(`/markets?coinId=${coinId}`);
  }

  tickers$(exchange: string, coin: string, currency: string): Observable<ITicker | null> {
    return this._http.get<ITickersResponse>(`/tickers?exchange=${exchange}&pair=${coin}-${currency}`)
    .pipe(
      switchMap(
        res => {
          if (res.tickers.length > 0) {
            return of(res);
          } else {
            return this._http.get<ITickersResponse>(`/tickers?exchange=${exchange}`)
            .pipe(
              map(
                res => {
                  const fallbackTicker = res.tickers.find(t => t.from === coin);
                  res.tickers = fallbackTicker ? [fallbackTicker] : [];
                  return res;
                }
              )
            );
          }
        }
      ),
      map(
        res => res.tickers.length > 0 ? res.tickers[0] : null
      ),
      catchError(() => of(null))
    );
  } 


  getFiatsSnapshot(): Omit<IFiat, 'imageUrl' | 'rate'>[] {
    return this._fiatsSnapshot;
  }


  changeFiat(fiat: Omit<IFiat, 'imageUrl' | 'rate'>) {
    this._fiatChangedSubject.next(fiat);
  }


  fiatChange$(): Observable<Omit<IFiat, 'imageUrl' | 'rate'>> {
    return this._fiatChangedSubject.asObservable();
  }
}
