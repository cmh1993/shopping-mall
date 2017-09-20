import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './custom_validation.component';


@Component({
  templateUrl: './global_login.component.html',
  styleUrls: ['./global_login.component.css'],
})

export class GlobalLoginComponent{
  form: FormGroup;


  constructor(fb: FormBuilder)
  {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }


}
