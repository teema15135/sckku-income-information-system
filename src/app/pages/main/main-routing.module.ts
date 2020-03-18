import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { TypeReportComponent } from './type-report/type-report.component'
import { AdminGuard } from 'src/app/services/admin.guard';

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
        component: VerifyComponent,
        canActivate: [AdminGuard]
      }, {
        path: 'daily-report',
        component: DailyReportComponent
      }, {
        path: 'summary-report',
        component: SummaryReportComponent
      }, {
        path: 'type-report',
        component: TypeReportComponent
      }, {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule),
        canActivate: [AdminGuard]
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
