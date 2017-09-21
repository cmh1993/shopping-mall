import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './custom_validation.component';
import { AuthService } from '../../service/auth.service';



@Component({
  templateUrl: './global_login.component.html',
  styleUrls: ['./global_login.component.css'],
})

export class GlobalLoginComponent{
  form: FormGroup;
  model: any = {};


  constructor(private router: Router, private authService: AuthService, fb: FormBuilder)
  {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }

  login() {
    this.authService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
          location.reload();
        },
        error => {
          alert('User does note exist!')
        },
      );
  }


}
