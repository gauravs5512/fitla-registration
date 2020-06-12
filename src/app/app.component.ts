import { Component } from '@angular/core';
import { Constant } from './constant2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitla-registration';
  Constant = Constant;
}
