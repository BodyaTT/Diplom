import { Component, OnInit } from '@angular/core';
import { Recept } from './modules/my-cook-app/models/recept.model';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recepts: Recept[];
  constructor(private dataService: DataService){}

  ngOnInit(){
    return this.dataService.getRecept()
    .subscribe(data => this.recepts = data);
  }

  title = 'my-cook-app';


}
