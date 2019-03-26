import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shopping, Recept } from './modules/my-cook-app/models/recept.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class DataService {

  apiUrlRecept:string = "https://api.edamam.com/search?q=";
  shopping: Shopping[] = [];
  favorites: Recept[] = [];
  newShopping: Shopping;
  newFavorite: Recept;
  shoppingLenght: number;
  

  constructor(private _http:HttpClient, private firestore: AngularFirestore) { }

  getRecepts(searchRecept:string):Observable<any>{
    return this._http.get(this.apiUrlRecept + searchRecept + "&app_id=5a79b16d&app_key=106522329383adb2c93f889d76e7a990")
  }

  getShopping(){
    return this.firestore.collection('shopping').snapshotChanges();
 }

  createShopping(shoppingTitle: string){
    let title = shoppingTitle;
    let completed = false;
    this.newShopping = {title, completed};
    this.firestore.collection('shopping').add(this.newShopping);
  }

  deleteShopping(id: string){
   this.firestore.doc('shopping/' + id).delete();
  }

  toggleShopping(shopping: Shopping){
    shopping.completed = !shopping.completed;
    this.firestore.doc('shopping/' + shopping.id).update(shopping);
  }

  addToFavorites(recept: Recept){
    let label = recept.label;
    let diet = recept.diet;
    let ingredients = recept.ingredients;
    let receptImage = recept.receptImage;
    let calories = recept.calories;
    let ingradientLines = recept.ingradientLines;

    this.newFavorite = { 
      label,
      diet,
      ingredients,
      receptImage,
      calories,
      ingradientLines}
      this.firestore.collection('favorites').add(this.newFavorite);
  }

  getFavorites(){
    return this.firestore.collection('favorites').snapshotChanges();
  }

  deleteFavorite(id: string){
    this.firestore.doc('favorites/' + id).delete();
  }
}
