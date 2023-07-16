import { Component,Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart-holder',
  templateUrl: './chart-holder.component.html',
  styleUrls: ['./chart-holder.component.scss']
})
export class ChartHolderComponent  implements OnInit{
  constructor() { }
  @Input() title: any ='';
  @Input() height: string ='';
  @Input() width: string ='';
  @Input() top: string ='';
  @Input() left: string ='';
  @Input() isText: boolean = false;
  @Input() isPie: boolean = false;
  @Input() isLine: boolean = false;
  @Input() data: any;
  highcharts = Highcharts;
  ngOnInit() {

  }

}

