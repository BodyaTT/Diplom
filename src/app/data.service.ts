import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recept } from './modules/my-cook-app/models/recept.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl:string = "https://api.edamam.com/search?q=";

  constructor(private _http:HttpClient) { }

  getRecept(searchRecept:string){
    return this._http.get<Recept[]>(this.apiUrl + searchRecept + "&app_id=5a79b16d&app_key=106522329383adb2c93f889d76e7a990");
  }
}
