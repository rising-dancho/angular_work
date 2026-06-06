import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  // properties
  title = 'Dating app';
  users: any;

  // constructor
  constructor(private accountService: AccountService) { }

  // life cycle methods
  ngOnInit(): void {
    this.setCurrentUser();
  }

  // methods
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;

    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }



}