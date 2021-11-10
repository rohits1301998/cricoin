import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinsListingComponent } from './coins-listing.component';

const routes: Routes = [{ path: '', component: CoinsListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsListingRoutingModule { }
