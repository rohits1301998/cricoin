import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { ListingColumnComponent } from './listing-column/listing-column.component';
import { IconModule } from '@cricoin/bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [ListingComponent, ListingColumnComponent],
  imports: [
    CommonModule,
    IconModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    ListingComponent, ListingColumnComponent
  ]
})
export class ListingModule { }
