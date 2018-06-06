import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  first:number = 5;
  second:number = 15;

  largestNumber() {
    return Math.max( this.first, this.second);
  }
}
