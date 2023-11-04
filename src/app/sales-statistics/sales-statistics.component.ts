import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-sales-statistics',
  templateUrl: './sales-statistics.component.html',
  styleUrls: ['./sales-statistics.component.scss']
})
export class SalesStatisticsComponent{
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Sales Statistics'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Sales',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  });
}
