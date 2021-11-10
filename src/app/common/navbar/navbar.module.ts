import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { DropdownModule, IconModule, ImgModule } from '@cricoin/bootstrap';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    IconModule,
    DropdownModule,
    ImgModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
