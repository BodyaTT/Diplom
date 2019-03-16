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
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

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
        component: ShoppingComponent
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
          }
        ]
      }
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
    ShoppingListComponent
  ],
  providers: [DataService],
  exports: [OperationsInputComponent]
})
export class MyCookAppModule { }
