import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  recipeId: string;
  searchRecept: string;
  recepts: any;
  showAdd: boolean = false;

  constructor(
    private _cookService: DataService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipeId = this._route.snapshot.paramMap.get('i');
    this.searchRecept = this._route.snapshot.paramMap.get('searchRecept');
    this._search(this.searchRecept, this.recipeId);
    console.log(this.searchRecept)
  }

  private _search(searchRecept:string, recipeId: string){ 
    return this._cookService.getRecepts(searchRecept)
    .subscribe(data => {
      this.recepts = data.hits[recipeId]
    });
  }

  add(){
    this.showAdd = !this.showAdd;
  }

  addToShopping(index: number){ 
    this._cookService.addToShopping(this.recepts.recipe.ingredientLines[index]).subscribe();
  }
}
