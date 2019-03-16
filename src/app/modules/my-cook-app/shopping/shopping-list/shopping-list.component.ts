import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../models/recept.model';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shopping: Shopping[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.shopping = this.dataService.getShopping();
  }
 
  toogle(shopping: Shopping){
    this.dataService.toggleShopping(shopping);
  }

  delete(shopping: Shopping){
    this.dataService.deleteShopping(shopping);
  }


}
