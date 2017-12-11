import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './custom_validation.component';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';



@Component({
  templateUrl: './global_login.component.html',
  styleUrls: ['./global_login.component.css'],
})

export class GlobalLoginComponent{
  form: FormGroup;
  model: any = {};


  constructor(private router: Router, private authService: AuthService, private userService: UserService, fb: FormBuilder)
  {
    // Confirm password
    this.form = fb.group({
      email: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }

  // Create account
  register() {
    this.userService.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          alert('Registration successful. Please login')
          // this.alertService.success('Registration successful', true);
          this.router.navigateByUrl('/home');
        },
        error => {
          alert('Username already exist');
          // this.alertService.error('Username already exist');
        });
  }

  // Sign in
  login() {
    this.authService.login(this.model.log_email, this.model.log_password)
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
          location.reload();
        },
        error => {
          alert('User does not exist!')
        },
      );
  }

}
