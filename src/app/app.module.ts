import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Route } from '@angular/router';
import { AppComponent } from './app.component';
import {MyCookAppModule } from './modules/my-cook-app/my-cook-app.module'

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
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
