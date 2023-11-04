import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {
  data: any;
  topCards: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe((result) => {
      this.data = result;
      this.topCards = this.data.top_cards;
      console.log(this.topCards);
      console.log(result);
    });

    // this.topCards = this.data.top_cards;
  }

}
