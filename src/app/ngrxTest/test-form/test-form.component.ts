import { DetailsService } from './../../services/details-service.service';
import { Details } from './../../models/Details';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputFieldValidator } from 'src/app/sharedComponents/Validators/inputValidators';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), 
          InputFieldValidator.NoSpaceAllowed], InputFieldValidator.CheckUniqueNames),
    comment: new FormControl('',Validators.required)
  });

  detailsList: Details[] = [];
  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.detailsList = this.detailsService.getDetailsList();
  }

  get name(){
    return this.form.get('name');
  }

  get comment(){
    return this.form.get('comment');
  }

  public SaveData(){
    let details: Details = {
      Name: this.name?.value,
      Comment: this.comment?.value
    }
    //this.name?.reset();
    //this.comment?.reset();
    this.detailsService.AddDetailsToList(details);
    this.detailsList = this.detailsService.getDetailsList();
  }
}
