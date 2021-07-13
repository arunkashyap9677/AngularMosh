import { Component, OnInit } from '@angular/core';
import { ValidationErrorComponent } from '../sharedComponents/validation-error/validation-error.component';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  values: any[] = [{
    id: 1, city: 'Florida'
  },
  {
    id: 2, city: 'New York'
  },
  {
    id: 3, city: 'London'
  }
];
  constructor() { }

  ngOnInit(): void {
  }
  showNgModelObject(temp: any)
  {
    console.log(temp);
  }

  Submit(form:any)
  {
    console.log(form);
  }

}
