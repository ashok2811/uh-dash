import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHolderComponent } from './chart-holder.component';



@NgModule({
  declarations: [ChartHolderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChartHolderComponent
  ]
})
export class ChartHolderModule { }
