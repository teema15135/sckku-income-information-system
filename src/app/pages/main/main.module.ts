import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { VerifyComponent } from './verify/verify.component';
import { NgbAccordionModule, NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';


@NgModule({
  declarations: [
    MainComponent,
    VerifyComponent,
    HomeComponent,
    DailyReportComponent,
    SummaryReportComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbDropdownModule,
  ]
})
export class MainModule { }
