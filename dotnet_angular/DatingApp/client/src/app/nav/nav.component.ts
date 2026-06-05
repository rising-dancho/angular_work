import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent {
  loggedIn = false;
  model: any = {};

  constructor(private accountService: AccountService) { }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res: any) => {
        console.log(res);
        this.loggedIn = true;
      },
      error: (error: any) => console.log(error),
    });
  }

  logout() {
    this.loggedIn = false;
  }
}
