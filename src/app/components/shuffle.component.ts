import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {DataService, Person} from "../services/data.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.sass']
})
export class ShuffleComponent {

  person: BehaviorSubject<Person> = new BehaviorSubject(null);
  id: string = null;

  private persons: Person[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private location: Location) {

    Observable.combineLatest(route.params, dataService.getObservable()).subscribe(data => {
      let newId = data[0].id ? data[0].id.toString() : null;
      this.persons = data[1];

      if (newId !== this.id) {
        let person = this.persons.find(p => p.id.toString() === newId);
        if (person) {
          this.person.next(person);
          this.id = newId;
        } else {
          this.router.navigate(['/notfound']);
        }
      } else if (this.persons.length > 0) {
        this.shuffle();
      }
    });
  }

  shuffle() {
    if (this.persons.length > 0) {
      let index = this.getRandom(0, this.persons.length - 1);
      let person = this.persons[index];
      this.router.navigate(['/person', person.id]);
    }
  }

  back() {
    this.location.back();
  }

  private getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
