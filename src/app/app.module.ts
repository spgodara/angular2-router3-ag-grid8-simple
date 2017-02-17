import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AgGridModule} from 'ag-grid-ng2/main';

import { AppComponent } from './app.component';

import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

const appRoutes: Routes = [
    {path: 'route1', component: Route1Component, data: {title: "Route 1"}},
    {path: 'route2', component: Route2Component, data: {title: "Route 2"}},
    {path: '', redirectTo: 'route1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([Route2Component])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
