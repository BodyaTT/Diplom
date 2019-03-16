import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shopping } from './modules/my-cook-app/models/recept.model';
import {Observable} from 'rxjs';

import { shopping } from './modules/my-cook-app/shared/shoppingData';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl:string = "https://api.edamam.com/search?q=";

  shopping: Shopping[] = shopping;

  constructor(private _http:HttpClient) { }

  getRecepts(searchRecept:string):Observable<any>{
    return this._http.get(this.apiUrl + searchRecept + "&app_id=5a79b16d&app_key=106522329383adb2c93f889d76e7a990")
  }

  getShopping():Shopping[]{
    return this.shopping;
  }

  createShopping(title: string){
    let shopping = new Shopping(title);
    this.shopping.push(shopping);
  }

  deleteShopping(shopping: Shopping){
    let index = this.shopping.indexOf(shopping);
    if(index > -1){
      this.shopping.splice(index, 1);
    }
  }

  toggleShopping(shopping: Shopping){
    shopping.completed = !shopping.completed;
  }

}
