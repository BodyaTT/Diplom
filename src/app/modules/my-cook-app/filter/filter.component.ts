import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Diet, Filter } from '../models/recept.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() setFilter = new EventEmitter;

  maxIngradients: number = 1;
  minCalories: number = 50;
  maxCalories: number = 100;
  filter: Filter;

  diet:string;

  diets: Diet[] = [
    {value: 'balanced', viewValue: 'Balanced'},
    {value: 'high-protein', viewValue: 'High-protein'},
    {value: 'low-fat', viewValue: 'Low-fat'},
    {value: 'low-carb', viewValue: 'Low-carb'},
    {value: 'low-sodium', viewValue: 'Low-sodium'}
  ];

  constructor() { }

  ngOnInit() {
  }

  acceptFilter(){
    this.filter = new Filter(this.maxIngradients, this.diet, this.minCalories, this.maxCalories);
    this.setFilter.emit(this.filter);
  }

}
