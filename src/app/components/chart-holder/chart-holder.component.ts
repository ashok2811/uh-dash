import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chart-holder',
  templateUrl: './chart-holder.component.html',
  styleUrls: ['./chart-holder.component.scss']
})
export class ChartHolderComponent {
  @Input() title: string ='';
  @Input() height: string ='';
  @Input() width: string ='';
  @Input() top: string ='';
  @Input() left: string ='';
}

