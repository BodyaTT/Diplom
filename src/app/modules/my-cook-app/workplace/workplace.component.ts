import { Component} from '@angular/core';
import { DataService } from '../../../data.service';
import { Recept } from '../models/recept.model';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})

export class WorkplaceComponent{
  searchRecept: string;
  recepts: Recept[];
  constructor(private dataService: DataService){}
  
  search(){
    return this.dataService.getRecept(this.searchRecept)
    .subscribe(data => {
      this.recepts = data
      console.log(this.searchRecept)
    });
  }
}
