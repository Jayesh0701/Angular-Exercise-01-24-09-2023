import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any[];
  admins: any[];

  constructor() {
    this.users = [];
    this.admins = [];
  }
  pushUsers(data: any) {
    this.users.push(data);
  }
  pushAdmins(data: any) {
    this.admins.push(data);
  }
  onRemoveUser(index: number) {
    this.users.splice(index);
  }
  onRemoveAdmin(index: number) {
    this.admins.splice(index);
  }
  ngOnInit() {}
}
