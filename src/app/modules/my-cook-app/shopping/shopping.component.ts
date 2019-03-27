import { Component, OnInit } from '@angular/core';
import { Shopping } from '../models/recept.model';
import { DataService } from '../../../data.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit{
  shopping: Shopping[] = [];

  constructor(
    private dataService: DataService
    ) {}

  ngOnInit(){
    this._getShopping();
  }
  private _getShopping(){
    this.dataService.getShopping()
    .subscribe(res => {
      this.shopping = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Shopping
      });
    })
  }
 
  toogle(shopping: Shopping){
    this.dataService.toggleShopping(shopping);
  }

  delete(id: string){
    this.dataService.deleteShopping(id);
  }

  create(shoppingTitle: string){
    this.dataService.createShopping(shoppingTitle)
  }
}
