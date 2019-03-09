import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-operations-input',
  templateUrl: './operations-input.component.html',
  styleUrls: ['./operations-input.component.css']
})
export class OperationsInputComponent {
  
  searchRecept: string;

  @Output() searchedRecipe = new EventEmitter;
  
  constructor(){}
  
  onSearched(){
    this.searchedRecipe.emit(this.searchRecept);
  }
}

  

