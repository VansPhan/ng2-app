import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
  	<p>Total combined salary: {{ totalSalary() | currency: 'USD':true }}</p>
  	<ul>
  		<li *ngFor="let person of people">
  			<h2>Name: {{ person.name | uppercase }}</h2>
  			<h2 *ngIf="person.age > 22">Age: {{ person.age }}</h2>
  			<h2 *ngIf="person.age <= 22">Age: {{ person.age }} (This person is underage)</h2>
  			<h2 *ngIf="person.income <= 100000">Income: {{ person.income | currency:'USD':true }}</h2>
  			<h2 *ngIf="person.income > 100000">Income: {{ person.income | currency:'USD':true }} (6 Figures $_$)</h2>
  		</li>
  	</ul>`
})

class AppComponent { 
	title = 'Hello World';
	people = [
		{
			'name': 'Van',
			'age': 22,
			'income': 85000
		},
		{
			'name': 'Weston',
			'age': 24,
			'income': 97000
		},
		{
			'name': 'Johnny',
			'age': 26,
			'income': 105000
		}
	]
	totalSalary() {
		let sum = 0;
		for (let person of this.people) {
			sum += person.income;
		}
		return sum;
	}
}

export { AppComponent };