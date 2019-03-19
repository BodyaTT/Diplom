import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../../data.service';
import { Shopping } from '../../models/recept.model'

@Component({
  selector: 'app-shopping-input',
  templateUrl: './shopping-input.component.html',
  styleUrls: ['./shopping-input.component.css']
})
export class ShoppingInputComponent {
  
  shoppingTitle: string;
  shopping: Shopping[] = [];
  constructor(private dataService: DataService) { }

  @Output() createdShopping = new EventEmitter();

  private _getShopping(){
    this.dataService.getShopping()
    .subscribe(res => {
      this.shopping = res;
      console.log(res);
    });
  }
  create(){
    this.createdShopping.emit(this.shoppingTitle);
    this.shoppingTitle = '';
  }
}
