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

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this._getShopping();
  }
  private _getShopping(){
    this.dataService.getShopping()
    .subscribe(res => {
      this.shopping = res;
      console.log(res);
    });
  }
 
  toogle(shopping: Shopping){
    this.dataService.toggleShopping(shopping);
  }

  delete(shopping: Shopping){
    this.dataService.deleteShopping(shopping);
  }

    create(shoppingTitle: string){
      let title = shoppingTitle;
      let completed = false;
      let id = this.shopping.length + 1;
      this.dataService.createShopping({id, title, completed})
        .subscribe(
          shoppingTitle => this.shopping.push(shoppingTitle));
  }
}
