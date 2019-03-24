import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Recept } from '../models/recept.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Recept[];

  constructor(
    private _cookService: DataService
  ) { }

  ngOnInit() {
    this._getFavorites();
  }

  private _getFavorites(){
    this._cookService.getFavorites()
    .subscribe(res => this.favorites = res)
  }
  
  delete(favorite: Recept){
    this._cookService.deleteFavorite(favorite).subscribe();
    let index = this.favorites.indexOf(favorite);
    if(index > -1){
      this.favorites.splice(index, 1);
    }
  }
}
