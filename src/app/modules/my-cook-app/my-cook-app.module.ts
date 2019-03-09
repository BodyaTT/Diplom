import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace/workplace.component';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from '../../data.service';
import { OperationsInputComponent } from './operations-input/operations-input/operations-input.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: WorkplaceComponent,
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
    OperationsInputComponent
  ],
  providers: [DataService],
  exports: [OperationsInputComponent]
})
export class MyCookAppModule { }
