import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { Filter } from '../models/recept.model';


@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})


export class WorkplaceComponent{
  recepts: any[];
  searchRecept: string;
  isFilter:boolean;

  constructor(private dataService: DataService){}
  
  search(searchRecept:string){ 
    return this.dataService.getRecepts(searchRecept)
    .subscribe(data => {
      this.recepts = data.hits;
      this.searchRecept = searchRecept;
    });
  }

  searchWithFilter(filter: Filter){
    this.dataService.setFilters(filter);
    this.toogleFilter(false);
  }

  toogleFilter(filter: boolean){
    this.isFilter = filter;
  }
}
