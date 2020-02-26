import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'verify',
        component: VerifyComponent
      }, {
        path: 'daily-report',
        component: DailyReportComponent
      }, {
        path: 'summary-report',
        component: SummaryReportComponent
      }, {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule)
      }, {
        path: '',
        redirectTo: 'home',
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
