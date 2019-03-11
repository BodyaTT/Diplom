import { Component, Input } from '@angular/core';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})


export class WorkplaceComponent{
  recepts: any;
  searchRecept: string;

  constructor(private dataService: DataService){}
  search(searchRecept:string){ 
    return this.dataService.getRecepts(searchRecept)
    .subscribe(data => {
      this.recepts = data.hits
      console.log(this.recepts)
      this.searchRecept = searchRecept;
    });
    
  }
}
