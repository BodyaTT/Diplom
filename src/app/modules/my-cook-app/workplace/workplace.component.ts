import { Component } from '@angular/core';
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
      this.searchRecept = searchRecept;
      console.log(data);
    });
    
  }
}
