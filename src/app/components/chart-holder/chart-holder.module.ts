import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHolderComponent } from './chart-holder.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [ChartHolderComponent],
  imports: [
        HighchartsChartModule,
        CommonModule,
  ],
  exports: [
    ChartHolderComponent
  ]
})
export class ChartHolderModule { }
