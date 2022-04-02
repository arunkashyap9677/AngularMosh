import { DetailsState } from './../../Store/Reducers/details.reducer';
import { addDetails } from './../../Store/Actions/details.action';
import { DetailsService } from './../../services/details-service.service';
import { Details } from './../../models/Details';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputFieldValidator } from 'src/app/sharedComponents/Validators/inputValidators';
import { Store } from '@ngrx/store';
import { getDetails } from 'src/app/Store/Actions/details.action';

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
  details$ = this.store.select('details');
  constructor(private detailsService: DetailsService, private store: Store<DetailsState>)
   { }

  ngOnInit(): void {
    this.getDetails();
  }

  get name(){
    return this.form.get('name');
  }

  get comment(){
    return this.form.get('comment');
  }

  public SaveData(){
    let detail: Details = {
      Name: this.name?.value,
      Comment: this.comment?.value
    }
    //this.name?.reset();
    //this.comment?.reset();
    this.store.dispatch(addDetails({detail}));
    //this.detailsService.AddDetailsToList(details);
    this.detailsList = this.detailsService.getDetailsList();
  }

  private getDetails(){
    this.store.dispatch(getDetails());
    //this.detailsList = this.detailsService.getDetailsList();
  }
}
