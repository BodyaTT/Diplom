import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace/workplace.component';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '../../data.service';
import { OperationsInputComponent } from './operations-input/operations-input/operations-input.component';
import { WrapComponent } from './wrap/wrap.component';
import { DetailsComponent } from './details/details.component';
import {SharedModule } from './shared/shared.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingInputComponent } from './shopping/shopping-input/shopping-input.component';
import { FavoritesComponent } from './favorites/favorites.component';


const ROUTES: Route[] = [
  {
    path: '',
    component: WrapComponent,
    children: [
      {
        path: '',
        component: WorkplaceComponent,
      },
      {
        path: 'shopping',
        component: ShoppingComponent,
        children: [
          {
            path: 'favorites',
            redirectTo: '/favorites'
          }
        ]
      },
      {
        path: 'details/:i',
        component: DetailsComponent
      },
      {
        path: 'details/:i/:searchRecept',
        component: DetailsComponent,
        children: [
          {
            path: 'shopping',
            redirectTo: '/shopping'
          },
          {
            path: 'favorites',
            redirectTo: '/favorites'
          }
        ]
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        children: [
          {
            path: 'shopping',
            redirectTo: '/shopping'
          },
          {
            path: 'details/:favorite.recId/:favorite.recWord',
            redirectTo: '/details/:favorite.recId/:favorite.recWord', 
        }
        ]
      },
  ],
}
];
@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    WorkplaceComponent,
    OperationsInputComponent,
    WrapComponent,
    DetailsComponent,
    ShoppingComponent,
    ShoppingInputComponent,
    FavoritesComponent,
  ],
  providers: [DataService],
  exports: [OperationsInputComponent]
})
export class MyCookAppModule { }
