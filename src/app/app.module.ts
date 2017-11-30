import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app.component';
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { FindComponent } from "./components/find.component";
import {ShuffleComponent} from "./components/shuffle.component";
import {DataService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";
import {PersonPreviewComponent} from "./components/person-preview.component";
import { LazyLoadImageModule } from 'ng-lazyload-image';


const appRoutes: Routes = [
  { path: '', component: ShuffleComponent },
  { path: 'person/:id', component: ShuffleComponent },
  { path: 'find', component: FindComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FindComponent,
    ShuffleComponent,
    PersonPreviewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
