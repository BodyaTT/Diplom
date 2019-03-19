import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shopping } from './modules/my-cook-app/models/recept.model';
import { Observable } from 'rxjs';



// import { shopping } from './modules/my-cook-app/shared/shoppingData';
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' }) 
};

@Injectable()

export class DataService {

  apiUrlRecept:string = "https://api.edamam.com/search?q=";
  private shoppingUrl: string = 'http://localhost:3000/shopping';
  shopping: Shopping[] = [];
  newShopping: Shopping;
  

  constructor(private _http:HttpClient) { }

  getRecepts(searchRecept:string):Observable<any>{
    return this._http.get(this.apiUrlRecept + searchRecept + "&app_id=5a79b16d&app_key=106522329383adb2c93f889d76e7a990")
  }

  getShopping():Observable<Shopping[]>{
    return this._http.get<Shopping[]>(this.shoppingUrl);
 }

  createShopping(shoppingTitle: string, shoppingLenght: number):Observable<Shopping>{
    let title = shoppingTitle;
    let completed = false;
    let id = shoppingLenght + 1;
    this.newShopping = {id ,title, completed};
    return this._http.post<Shopping>(this.shoppingUrl, this.newShopping, httpOptions) as Observable<Shopping>;
  }

  deleteShopping(shopping: Shopping): Observable<{}>{
    let url = `${this.shoppingUrl}/${shopping.id}`;
    return this._http.delete(url, httpOptions);
  }

  toggleShopping(shopping: Shopping): Observable<void>{
    let url = `${this.shoppingUrl}/${shopping.id}`;
    shopping.completed = !shopping.completed;
   return this._http.put<void>(url, shopping, httpOptions)
  }

}
