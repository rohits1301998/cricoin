import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CricCoinInterceptor } from '@cricoin/core';
import { NavbarModule } from '@cricoin/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CricCoinInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
