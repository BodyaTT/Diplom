import { Component, OnInit } from '@angular/core';
import { Shopping } from '../models/recept.model';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit{
  shopping: Shopping[] = [];
  isShopping:boolean = true;

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
      if(res.length === 0){
        this.isShopping = false;
      } else{
        this.isShopping = true;
      }
    });
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
