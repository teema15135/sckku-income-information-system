import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { VerifyComponent } from './verify/verify.component';
import { RecordIncomeComponent } from './record-income/record-income.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'verify',
        component: VerifyComponent
      }, {
        path: 'record-income',
        component: RecordIncomeComponent
      }, {
        path: '',
        redirectTo: 'verify',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }