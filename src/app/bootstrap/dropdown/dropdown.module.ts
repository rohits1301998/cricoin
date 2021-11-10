import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { IconModule } from '../icon/icon.module';


@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    OverlayModule,
    IconModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
