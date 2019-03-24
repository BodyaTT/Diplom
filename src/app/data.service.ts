import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shopping, Recept } from './modules/my-cook-app/models/recept.model';
import { Observable } from 'rxjs';



// import { shopping } from './modules/my-cook-app/shared/shoppingData';
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' }) 
};

@Injectable()

export class DataService {

  apiUrlRecept:string = "https://api.edamam.com/search?q=";
  private shoppingUrl: string = 'http://localhost:3000/shopping';
  private favoritesUrl: string = 'http://localhost:3000/favorites';
  shopping: Shopping[] = [];
  favorites: Recept[] = [];
  newShopping: Shopping;
  newFavorite: Recept;
  shoppingLenght: number;
  

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
    this.shoppingLenght = shoppingLenght;
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

  addToShopping(shoppingTitle: string):Observable<Shopping>{
    let title = shoppingTitle;
    let completed = false;
    let id = this.shoppingLenght + 1;
    this.newShopping = {id ,title, completed};
    return this._http.post<Shopping>(this.shoppingUrl, this.newShopping, httpOptions) as Observable<Shopping>;
  }

  addToFavorites(recept: Recept):Observable<Recept>{
    let label = recept.label;
    let diet = recept.diet;
    let ingredients = recept.ingredients;
    let receptImage = recept.receptImage;
    let calories = recept.calories;
    let ingradientLines = recept.ingradientLines;
    let id = this.shoppingLenght + 1;;

    this.newFavorite = {
      id, 
      label,
      diet,
      ingredients,
      receptImage,
      calories,
      ingradientLines}

    return this._http.post<Recept>(this.favoritesUrl, this.newFavorite, httpOptions) as Observable<Recept>;
  }

  getFavorites():Observable<Recept[]>{
    return this._http.get<Recept[]>(this.favoritesUrl);
  }

  deleteFavorite(favorite: Recept):Observable<{}>{
    let url = `${this.favoritesUrl}/${favorite.id}`;
    return this._http.delete(url, httpOptions);
  }
}
