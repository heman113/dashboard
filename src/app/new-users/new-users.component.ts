import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {
  data: any;
  newUsers: any[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe((result) => {
      this.data = result;
      this.newUsers = this.data.new_users;
      // console.log(result);
    });
  }
}
