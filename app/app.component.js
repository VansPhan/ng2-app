"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello World';
        this.people = [
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
        ];
    }
    AppComponent.prototype.totalSalary = function () {
        var sum = 0;
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var person = _a[_i];
            sum += person.income;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{ title }}</h1>\n  \t<p>Total combined salary: {{ totalSalary() | currency: 'USD':true }}</p>\n  \t<ul>\n  \t\t<li *ngFor=\"let person of people\">\n  \t\t\t<h2>Name: {{ person.name | uppercase }}</h2>\n  \t\t\t<h2 *ngIf=\"person.age > 22\">Age: {{ person.age }}</h2>\n  \t\t\t<h2 *ngIf=\"person.age <= 22\">Age: {{ person.age }} (This person is underage)</h2>\n  \t\t\t<h2 *ngIf=\"person.income <= 100000\">Income: {{ person.income | currency:'USD':true }}</h2>\n  \t\t\t<h2 *ngIf=\"person.income > 100000\">Income: {{ person.income | currency:'USD':true }} (6 Figures $_$)</h2>\n  \t\t</li>\n  \t</ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map