import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shopping, Recept, User, Filter } from './modules/my-cook-app/models/recept.model';
import { Observable } from 'rxjs';;
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';



@Injectable()

export class DataService {

  apiUrlRecept:string = "https://api.edamam.com/search?q=";
  shopping: Shopping[] = [];
  favorites: Recept[] = [];
  newShopping: Shopping;
  newFavorite: Recept;
  shoppingLenght: number;
  userId: string;
  filter: Filter;

  maxIngr: number = 5;
  

  constructor(
    private _http:HttpClient, 
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
     }

  getRecepts(searchRecept:string, filter?: Filter):Observable<any>{
    return this._http.get(this.apiUrlRecept + searchRecept + "&app_id=5a79b16d&app_key=106522329383adb2c93f889d76e7a990");
  }

  setFilters(filter: Filter){
    this.filter = filter;
    console.log(this.filter);
  }

  getShopping(){
    if(!this.userId) return;
    return this.firestore.collection('users/' + this.userId + '/shopping').snapshotChanges();
 }

  createShopping(shoppingTitle: string){
    let title = shoppingTitle;
    let completed = false;
    this.newShopping = {title, completed};
    this.firestore.collection('users/' + this.userId + '/shopping').add(this.newShopping);
  }

  deleteShopping(id: string){
   this.firestore.doc('users/' + this.userId + '/shopping/' + id).delete();
  }

  toggleShopping(shopping: Shopping){
    shopping.completed = !shopping.completed;
    this.firestore.doc('users/' + this.userId + '/shopping/' + shopping.id).update(shopping);
  }

  addToFavorites(recept: Recept, recipeId: string, searchWord: string){
    let label = recept.label;
    let diet = recept.diet;
    let ingredients = recept.ingredients;
    let receptImage = recept.receptImage;
    let calories = recept.calories;
    let ingradientLines = recept.ingradientLines;
    let recId = recipeId;
    let recWord = searchWord;

    if(!diet){
      this.newFavorite = { 
        label,
        ingredients,
        receptImage,
        calories,
        ingradientLines}
    } else{    
      this.newFavorite = { 
        label,
        diet,
        ingredients,
        receptImage,
        calories,
        ingradientLines,
        recId,
        recWord}
      }

      this.firestore.collection('users/' + this.userId + '/favorites').add(this.newFavorite);
  }

  getFavorites(){
    return this.firestore.collection('users/' + this.userId + '/favorites').snapshotChanges();
  }

  deleteFavorite(id: string){
    this.firestore.doc('users/' + this.userId + '/favorites/' + id).delete();
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
