import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  department: string;
  catchphrase: string;
  hobbies: string[];
  building: string;
  description: string;
}

@Injectable()
export class DataService {

  private data: BehaviorSubject<Person[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.loadData();
  }

  getObservable(): Observable<Person[]> {
    return this.data.asObservable();
  }

  private loadData() {
    this.http.get<Person[]>('/assets/book-of-engineers-fake-users.json').subscribe(data => {
      this.data.next(data);
    });
  }
}
