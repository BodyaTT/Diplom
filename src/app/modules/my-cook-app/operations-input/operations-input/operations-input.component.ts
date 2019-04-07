import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operations-input',
  templateUrl: './operations-input.component.html',
  styleUrls: ['./operations-input.component.css']
})
export class OperationsInputComponent {
  floatLabel: string;
  searchRecept: string;
  isRecepts:boolean = false;
  isFilter:boolean;

  @Output() searchedRecipe = new EventEmitter;
  @Output() toogleFilter = new EventEmitter;
  
  constructor(){}
  
  onSearched(){
    this.searchedRecipe.emit(this.searchRecept);
    this.isRecepts = true;
    this.floatLabel = "never";
  }

  filter(){
    this.isFilter = true;
    this.toogleFilter.emit(this.isFilter);
  }
}

  

