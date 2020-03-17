import { Component } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pqr';
  number=15;
  ar=[1,2,3,4,5];
}
