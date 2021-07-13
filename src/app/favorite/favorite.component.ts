import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input("is-full")
  isFull:boolean = false;
  @Output()
  toggleClock = new EventEmitter();
  constructor() { 

  }

  ngOnInit(): void {
  }

  ToggleAlarm()
  {
    console.log(this.isFull);
    this.isFull = !this.isFull;
    this.toggleClock.emit(this.isFull);
  }

}
