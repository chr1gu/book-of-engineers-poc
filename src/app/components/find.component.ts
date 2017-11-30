import { Component } from '@angular/core';
import {DataService, Person} from "../services/data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.sass']
})
export class FindComponent {

  data: Observable<Person[]>;

  constructor(private dataService: DataService) {
    this.data = dataService.getObservable();
  }
}
