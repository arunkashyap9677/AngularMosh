import { InputFieldValidator } from './../sharedComponents/Validators/inputValidators';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  form:FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required, InputFieldValidator.checkOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {
    validators: InputFieldValidator.passwordsMatch
  });

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

}
