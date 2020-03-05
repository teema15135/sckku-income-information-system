import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { VerifyComponent } from './verify/verify.component';
import { NgbAccordionModule, NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DemoMaterialModule } from './summary-report/material-module';
import { EditableComponent } from 'src/app/shared/editable/editable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewModeDirective } from 'src/app/shared/editable/directive/view-mode.directive';
import { EditModeDirective } from 'src/app/shared/editable/directive/edit-mode.directive';
import { IonicModule } from '@ionic/angular';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    MainComponent,
    VerifyComponent,
    HomeComponent,
    DailyReportComponent,
    SummaryReportComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbDropdownModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
})
export class MainModule { }
