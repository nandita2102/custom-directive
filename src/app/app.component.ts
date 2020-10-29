import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "User details";

  list = [{id: 1234, name: "Person1", age: "25"},
  {id: 5678, name: "Person2", age: "29"},
  {id: 6352, name: "Person3", age: "21"}];
}
