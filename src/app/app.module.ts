import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BearsComponent} from './bears/bears.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BearsService} from "./bears.service";

const ROUTES = [
  {
    path: '',
    redirectTo: 'bears',
    pathMatch: 'full'
  },
  {
    path: 'bears',
    component: BearsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BearsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BearsService],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
