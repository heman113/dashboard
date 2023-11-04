import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  data: any;
  recentOrders: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe((result) => {
      this.data = result;
      this.recentOrders = this.data.recent_orders;
      // console.log(result);
    });
  }
}
