import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed!"),
    });
  }

  // methods
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')!);
  }

  




}