import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Recept } from '../models/recept.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  recipeId: string;
  searchRecept: string;
  recepts: Recept;
  showAdd: boolean = false;
  user: firebase.User;


  myDoughnutChart = [];

  constructor(
    private _cookService: DataService,
    private _route: ActivatedRoute,
    private afAuth:AngularFireAuth
  ) { }

  ngOnInit() {
    this.recipeId = this._route.snapshot.paramMap.get('i');
    this.searchRecept = this._route.snapshot.paramMap.get('searchRecept');
    this._search(this.searchRecept, this.recipeId);
    this.afAuth.authState
    .subscribe(user => {
      this.user = user;
    })
    
    this.myDoughnutChart = new Chart('doughnut-chart', {
      type: 'doughnut',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
  }

  private _search(searchRecept:string, recipeId: string){ 
    return this._cookService.getRecepts(searchRecept)
    .subscribe(data => {
      this.recepts = new Recept(data.hits[recipeId]);
    });
  }

  add(){
    this.showAdd = !this.showAdd;
  }

  addToShopping(index: number){ 
    this._cookService.createShopping(this.recepts.ingradientLines[index]);
  }

  addToFavorites(){
    this._cookService.addToFavorites(this.recepts, this.recipeId, this.searchRecept);
  }
}
