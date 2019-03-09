import { Component } from '@angular/core';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})

export class WorkplaceComponent{
  recepts: any;
  constructor(private dataService: DataService){}


  search(searchRecept:string){ 
    return this.dataService.getRecept(searchRecept)
    .subscribe(data => {
      this.recepts = data.hits
      console.log(this.recepts)
    });
  }
}
