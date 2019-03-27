import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Recept } from '../models/recept.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  recipeId: string;
  searchRecept: string;
  recepts: Recept;
  showAdd: boolean = false;
  user: firebase.User;

  constructor(
    private _cookService: DataService,
    private _route: ActivatedRoute,
    private afAuth:AngularFireAuth
  ) { }

  ngOnInit() {
    this.recipeId = this._route.snapshot.paramMap.get('i');
    this.searchRecept = this._route.snapshot.paramMap.get('searchRecept');
    this._search(this.searchRecept, this.recipeId);
    this.afAuth.authState
    .subscribe(user => {
      this.user = user;
    })
  }

  private _search(searchRecept:string, recipeId: string){ 
    return this._cookService.getRecepts(searchRecept)
    .subscribe(data => {
      this.recepts = new Recept(data.hits[recipeId]);
    });
  }

  add(){
    this.showAdd = !this.showAdd;
  }

  addToShopping(index: number){ 
    this._cookService.createShopping(this.recepts.ingradientLines[index]);
  }

  addToFavorites(){
    this._cookService.addToFavorites(this.recepts);
  }
}
