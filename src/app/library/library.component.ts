import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  month: any='';
  year: any='';
  order: any= '';
  page: any = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.month = params.get('month');
      this.year = params.get('year');
      console.log(this.month, this.year);
    })

    this.route.queryParamMap.subscribe(params => {
      this.order = params.get('order');
      this.page = params.get('page');
      console.log(this.order, this.page);
    })
  }

}
