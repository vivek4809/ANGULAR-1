import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:  [':host {width: 100%; height: 100%}']
})
export class AppComponent {
  title = 'CapBook';
}
