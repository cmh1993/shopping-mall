import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'account-app',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})

export class AccountComponent implements OnInit{

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    this.authService.logout()
    location.reload()
  }
}
