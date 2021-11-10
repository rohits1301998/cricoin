import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsListingRoutingModule } from './coins-listing-routing.module';
import { CoinsListingComponent } from './coins-listing.component';
import { ListingModule } from '@cricoin/common';
import { CurrencyModule } from '@cricoin/core';
import { IconModule, ImgModule } from '@cricoin/bootstrap';
import { TickersComponent } from './tickers/tickers.component';


@NgModule({
  declarations: [CoinsListingComponent, TickersComponent],
  imports: [
    CommonModule,
    CoinsListingRoutingModule,
    ListingModule,
    CurrencyModule,
    ImgModule,
    IconModule
  ]
})
export class CoinsListingModule { }
