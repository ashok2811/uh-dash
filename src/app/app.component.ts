import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Store } from '@ngrx/store';
import { selectItems, selectLoading, selectError, loadItems } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   items: any;
   error: any;
   loading: boolean = true;
   data: any;
   constructor(private store: Store) {
      this.store.dispatch(loadItems());
   }

items$ = this.store.select(selectItems);
loading$ = this.store.select(selectLoading);
error$ = this.store.select(selectError);

  title = 'uh-dash';
  highcharts = Highcharts;
   textChart :any;
//   textChart =[{
//     title : "Cohert Population",
//     data : {
//       value : "2500",
//       topDate : "",
//       change : "",
//       bottomDate: "Total: 2500",
//       isPositive : false
//     }
//   }, {
//     title : "Total ER",
//     data : {
//       value : "3969",
//       topDate : "April-2023 (Till Today)",
//       change : "11%",
//       bottomDate: "March-2023: 4459",
//       isPositive : true
//     }
//   }, {
//     title : "Total Admissions",
//     data : {
//       value : "4179",
//       topDate : "April-2023 (Till Today)",
//       change : "-7.4%",
//       bottomDate: "March-2023: 4459",
//       isPositive : false
//     }
//   },{
//     title : "Avg Cost",
//     data : {
//       value : "$11.31",
//       topDate : "April-2023 (Till Today)",
//       change : "-1.7%",
//       bottomDate: "March-2023: $12",
//       isPositive : false
//     }
//   },{
//     title : "Total Specialist Visit",
//     data : {
//       value : "5244",
//       topDate : "April-2023 (Till Today)",
//       change : "-9.3%",
//       bottomDate: "March-2023: 4459",
//       isPositive : false
//     }
//   }]
   chartOptionsLine = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Monthly Average Temperature"
      },
      subtitle: {
         text: "Source: WorldClimate.com"
      },
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
         title:{
            text:"Temperature °C"
         } 
      },
      tooltip: {
         valueSuffix:" °C"
      },
      series: [
         {
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
         },
         {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
         },
         {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
         },
         {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
         }
      ]
   };
   pieChart =[ {  
      title: "Population By Age",
      data : {
         chart : {
            plotBorderWidth: null,
            plotShadow: false
         },
         title : {
            text: ''   
         },
         tooltip : {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions : {
            pie: {
               shadow: false,
               center: ['50%', '50%'],
               size:'80%',
               innerSize: '40%',
               showInLegend: true,
               dataLabels: {
                 enabled: true,
                 format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                 connectorColor: 'silver'
             },           
            }
         },
         series : [{
            type: 'pie',
            name: 'Population By Age',
            data: [
               ['20',   11.4],
               ['30',       22.2],
               ['40',  22.5],
               ['50',   26.8],
               ['60',     17.1]
            ]
         }]
      } 
   },
   {  
      title: "Population By Location",
      data : {
         chart : {
            plotBorderWidth: null,
            plotShadow: false
         },
         title : {
            text: ''   
         },
         tooltip : {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions : {
            pie: {
               shadow: false,
               center: ['50%', '50%'],
               size:'80%',
               innerSize: '40%',
               showInLegend: true,
               dataLabels: {
                 enabled: true,
                 format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                 connectorColor: 'silver'
             },           
            }
         },
         series : [{
            type: 'pie',
            name: 'Population By Location',
            data: [
               ['Albama',   15.8],
               ['Florida',      17.7],
               ['Louisiana',  16.2],
               ['Kentucky',   16.7],
               ['Virginia',     16.2],
               ['Geogia',     15.8]
            ]
         }]
      } 
   }
]
 
   ngOnInit() {
      this.items$.subscribe(event => {this.textChart = event;
         // this.data = JSON.stringify(this.textChart);
      });
    

      this.loading$.subscribe(event => this.loading = event);
      this.error$.subscribe(event => this.error = event);
      console.log(this.items)
   }

}
