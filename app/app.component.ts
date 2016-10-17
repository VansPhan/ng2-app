import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
  	<h2>{{ test.Van }}</h2>
  	<h2>{{ test.Bobby }}</h2>
  	<h2>{{ test.West }}</h2>`
})

class AppComponent { 
	title = 'Hello World';
	test = {
		"Van": "Phan",
		"Bobby": "Scar",
		"West": "Balls"
	}
}

export { AppComponent };