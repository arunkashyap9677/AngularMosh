import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {

  @Input() errors: any;
  @Input() errorPrefix?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
