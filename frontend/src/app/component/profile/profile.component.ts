import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent {
  currentUser: any = { };
  model: any = { };

  constructor(private userService: UserService, private authService: AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  modify() {
    this.model.id = this.currentUser.user.id;
    this.model.email = this.currentUser.user.email;
    this.model.password = this.currentUser.user.password;
    if(this.model.first_name == null) {
      this.model.first_name = this.currentUser.user.first_name
    }
    if(this.model.last_name == null) {
      this.model.last_name = this.currentUser.user.last_name
    }
    if(this.model.city == null) {
      this.model.city = this.currentUser.user.city
    }
    if(this.model.address1 == null) {
      this.model.address1 = this.currentUser.user.address1
    }
    if(this.model.address2 == null) {
      this.model.address2 = this.currentUser.user.address2
    }
    if(this.model.zip_code == null) {
      this.model.zip_code = this.currentUser.user.zip_code
    }
    if(this.model.contact_num == null) {
      this.model.contact_num = this.currentUser.user.contact_num
    }

    this.userService.update(this.model)
      .subscribe(
        data => {
          this.authService.logout();
          alert('Please relogin')
        },
        error => {
          alert("Modify error.")
        }
      )
  }


}
