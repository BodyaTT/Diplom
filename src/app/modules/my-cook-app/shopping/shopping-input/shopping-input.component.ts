import { Component } from '@angular/core';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-shopping-input',
  templateUrl: './shopping-input.component.html',
  styleUrls: ['./shopping-input.component.css']
})
export class ShoppingInputComponent {
  shoppingTitle: string;
  
  constructor(private dataService: DataService) { }

  create(){
    this.dataService.createShopping(this.shoppingTitle);
    this.shoppingTitle = '';
  }
}
