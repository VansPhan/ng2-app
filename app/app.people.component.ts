import { Component } from '@angular/core';
import { Person } from './models/person';
import { PEOPLE } from './models/mocks';

@Component({
	selector: 'people',
	templateUrl: 'app/app.people.component.html',
	styleUrls: ['app/app.people.component.css']
})

class PeopleComponent {
	people: Person[];

	ngOnInit() {
		this.people = PEOPLE;
	}

	totalSalary() {
		let sum = 0;
		for (let person of this.people) {
			sum += person.income;
		}
		return sum;
	}
}

export { PeopleComponent };
