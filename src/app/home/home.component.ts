import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listDates: any = [{
    year: 2001,
    month: 'January'
  },
  {
    year: 2001,
    month: 'February'
  },
  {
    year: 2001,
    month: 'March'
  },
]
  constructor() {

   }

  ngOnInit(): void {
  }

}
