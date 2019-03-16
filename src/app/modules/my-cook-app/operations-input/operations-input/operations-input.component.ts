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

  @Output() searchedRecipe = new EventEmitter;
  
  constructor(){}
  
  onSearched(){
    this.searchedRecipe.emit(this.searchRecept);
    this.isRecepts = true;
    this.floatLabel = "never";

  }
}

  

