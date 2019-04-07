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
  chart = [];
  data = [];
 
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
    });
  }

  private _search(searchRecept:string, recipeId: string){ 
    return this._cookService.getRecepts(searchRecept)
    .subscribe(data => {
      this.recepts = new Recept(data.hits[recipeId]);
      console.log(this.recepts);
      this.data = [this.recepts.digest[0]["total"], this.recepts.digest[1]["total"], this.recepts.digest[2]["total"]];
      this.chart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: ['Fats', 'Carbohydrates', 'Proteins'],
          datasets: [{
            data: this.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          cutoutPercentage: 60,
          responsive: true,
      
        }
    });  
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
