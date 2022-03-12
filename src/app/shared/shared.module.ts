import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandsPipe } from './pipes/thousands.pipe';

@NgModule({
  declarations: [
    ThousandsPipe
  ],
  exports: [
    ThousandsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
