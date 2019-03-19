import { Component, Output, EventEmitter } from '@angular/core';
import { Shopping } from '../../models/recept.model'

@Component({
  selector: 'app-shopping-input',
  templateUrl: './shopping-input.component.html',
  styleUrls: ['./shopping-input.component.css']
})
export class ShoppingInputComponent {
  
  shoppingTitle: string;
  shopping: Shopping[] = [];
  constructor() { }

  @Output() createdShopping = new EventEmitter();

  create(){
    this.createdShopping.emit(this.shoppingTitle);
    this.shoppingTitle = '';
  }
}
