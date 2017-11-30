import {Component, Input} from '@angular/core';
import {Person} from "../services/data.service";
import {ShuffleComponent} from "./shuffle.component";

@Component({
  selector: 'person-preview',
  templateUrl: './person-preview.component.html',
  styleUrls: ['./person-preview.component.sass']
})
export class PersonPreviewComponent {

  @Input()person: Person;
  @Input()parent: ShuffleComponent;

  constructor() {}

  back() {
    this.parent.back();
  }

  shuffle() {
    this.parent.shuffle();
  }
}
