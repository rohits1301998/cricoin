import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IOption } from '@cricoin/bootstrap';
import { CurrencyService, IFiat } from '@cricoin/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cricoin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {


  fiats$: Observable<IOption[]> = of([]);

  constructor(private _currency: CurrencyService) { }

  ngOnInit(): void {
    this.fiats$ = this._currency.fiats$()
    .pipe(
      map(fiats => fiats.map(fiat => { return {id: fiat.name, ...fiat} }))
    );
  }

  changeFiat(fiat: IOption) {
    this._currency.changeFiat(fiat as unknown as IFiat);
  }

}
