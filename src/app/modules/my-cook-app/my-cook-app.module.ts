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

const ROUTES: Route[] = [
  {
    path: '',
    component: WorkplaceComponent,
  },
  {
    path: 'details/:i',
    component: DetailsComponent
  },
  {
    path: 'details/:i/:searchRecept',
    component: DetailsComponent
  }
];
@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    WorkplaceComponent,
    OperationsInputComponent,
    WrapComponent,
    DetailsComponent
  ],
  providers: [DataService],
  exports: [OperationsInputComponent]
})
export class MyCookAppModule { }
