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
  shoppingLenght: number = this.shopping.length;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this._getShopping();
  }
  private _getShopping(){
    this.dataService.getShopping()
    .subscribe(res => {
      this.shopping = res;
    });
  }
 
  toogle(shopping: Shopping){
    this.dataService.toggleShopping(shopping).subscribe();
  }

  delete(shopping: Shopping){
    this.dataService.deleteShopping(shopping).subscribe();
    let index = this.shopping.indexOf(shopping);
    if(index > -1){
      this.shopping.splice(index, 1);
    }
  }

    create(shoppingTitle: string, shoppingLenght: number){
      this.dataService.createShopping(shoppingTitle, shoppingLenght)
        .subscribe(
          res => {
            this.shopping = [
              ...this.shopping,
              res
            ]});
  }
}
