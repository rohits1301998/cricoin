import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'cricoinCurrency'
})
export class CurrencyPipe implements PipeTransform {

  private static _decimalPipe = new DecimalPipe('en-US');

  constructor(private _currency: CurrencyService) {}

  transform(val: number, fiat: string = 'INR'): string {
    if (val) {
      return this._getCurrencySymbol(fiat) + this._getAbbreviateNumber(val);
    }
    return '-';
  }


  private _getAbbreviateNumber(num: number): string {
    const numString = String(Math.floor(num));
    if (numString.length >= 13) {
      return CurrencyPipe._decimalPipe.transform(num/Math.pow(10, 12)) + 't';
    } else if (numString.length >= 10) {
      return CurrencyPipe._decimalPipe.transform(num/Math.pow(10, 9)) + 'b';
    } else if (numString.length >= 7) {
      return CurrencyPipe._decimalPipe.transform(num/Math.pow(10, 6)) + 'm';
    }
    return CurrencyPipe._decimalPipe.transform(num) as string;
  }

  private _getCurrencySymbol(currency: string): string {
    if (currency === '-') {
      return '';
    }
    const fiat = this._currency.getFiatsSnapshot().find(f => f.name === currency);
    return fiat ? fiat.symbol : '';
  }

}
