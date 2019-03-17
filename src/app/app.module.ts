import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Route } from '@angular/router';
import { AppComponent } from './app.component';
import {MyCookAppModule } from './modules/my-cook-app/my-cook-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../in-memory-data-service.service';


const ROUTES: Route[] = [
  {
    path: '',
    loadChildren: './modules/my-cook-app/my-cook-app.module#MyCookAppModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCookAppModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
