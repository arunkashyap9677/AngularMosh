import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputFieldValidator } from '../sharedComponents/Validators/inputValidators';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), InputFieldValidator.NoSpaceAllowed]),
    comment: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  get name(){
    return this.form.get('name');
  }

  get comment(){
    return this.form.get('comment');
  }

}
