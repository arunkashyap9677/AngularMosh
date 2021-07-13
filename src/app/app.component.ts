import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  isFullParent = false;
  viewMode = 'list';

  constructor() { 

  }

  ngOnInit(): void {
  }

  ToggleAlarmParent(istoggle: boolean)
  {
    console.log("ToggleAlarmParent clicked", istoggle);
  }
}
