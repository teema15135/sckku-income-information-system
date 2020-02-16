import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { VerifyComponent } from './verify/verify.component';
import { NgbAccordionModule, NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RecordIncomeComponent } from './record-income/record-income.component';


@NgModule({
  declarations: [
    MainComponent,
    VerifyComponent,
    RecordIncomeComponent
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
