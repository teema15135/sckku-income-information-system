import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { GeneralIncomeComponent } from './general-income/general-income.component';
import { FeeIncomeComponent } from './fee-income/fee-income.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: 'general',
        component: GeneralIncomeComponent
      }, {
        path: 'fee',
        component: FeeIncomeComponent
      // }, {
      //   path : '',
      //   redirectTo: 'general',
      //   pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
