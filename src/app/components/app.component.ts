import { Component } from '@angular/core';
import {DataService, Person} from "../services/data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  data: Observable<Person[]>;

  constructor(private dataService: DataService) {
    this.data = dataService.getObservable();
  }

}
