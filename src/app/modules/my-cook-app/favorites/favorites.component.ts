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
  isFavorites:boolean = true;

  constructor(
    private _cookService: DataService
  ) { }

  ngOnInit() {
    this._getFavorites();
  }

  private _getFavorites(){
    this._cookService.getFavorites()
    .subscribe(res => {
      this.favorites = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Recept
      });
      if(res.length === 0){
        this.isFavorites = false;
      } else{
        this.isFavorites = true;
      }
    });
  }
  
  delete(id: string){
    this._cookService.deleteFavorite(id);
  }
}
