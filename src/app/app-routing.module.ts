import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'coins-listing',
    loadChildren: () =>
      import('./modules/coins-listing/coins-listing.module').then(
        (m) => m.CoinsListingModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/coins-listing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
