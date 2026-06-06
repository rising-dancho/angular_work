import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent {
  // loggedIn = false;
  model: any = {};


  constructor(public accountService: AccountService) { }

  ngOnInit() {}

  // getCurrentUser() {
  //   var self = this;
  //   this.accountService.currentUser$.subscribe({
  //     next: function (user) {
  //       self.loggedIn = Boolean(user);
  //     },
  //     error: function (error) { console.log(error) }
  //   });
  // } 

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res: any) => {
        console.log(res , this.accountService.currentUser$);
        // this.loggedIn = true;
      },
      error: (error: any) => console.log(error),
    });
  }

  logout() {
    this.accountService.logout();
    // this.loggedIn = false;
  }
}
