import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent {
  chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Balance Overview'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Balance',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  });
}
