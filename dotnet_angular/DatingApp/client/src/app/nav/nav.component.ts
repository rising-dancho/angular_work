import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent {
  // loggedIn = false;
  model: any = {};


  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() { }

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
      next: () => {
        this.router.navigateByUrl("/members");
        this.toastr.success("Welcome back!","Login Success!");
      },
      error: (error: any) => this.toastr.error(error.error, error.name),
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
    // this.loggedIn = false;
  }
}


