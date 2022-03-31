import { Details } from './../models/Details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  DetailsList: Details[] = [
    { Name: "Test1", Comment: "Comment1"},
    { Name: "Test2", Comment: "Comment2"},
    { Name: "Test3", Comment: "Comment3"},
    { Name: "Test4", Comment: "Comment4"},
    { Name: "Test5", Comment: "Comment5"},
      ];

  constructor() { }

  public getDetailsList(){
    return this.DetailsList;
  }

  public AddDetailsToList(details: Details){
    this.DetailsList.push(details);
  }
}
