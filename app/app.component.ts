import { Component } from '@angular/core';
import { PeopleComponent } from './app.people.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ PeopleComponent ],
  styleUrls: ['app/app.component.css']
})

class AppComponent { 
	title = 'Hello World';
}

export { AppComponent };