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
import { ExcelService } from 'src/app/services/excel.service';
import { TypeReportComponent } from './type-report/type-report.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'M/YYYY',
  },
  display: {
    dateInput: 'M/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    MainComponent,
    VerifyComponent,
    HomeComponent,
    DailyReportComponent,
    SummaryReportComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective,
    TypeReportComponent
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
    ScrollingModule,
  ],
  providers: [
    ExcelService,
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    // },
    // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class MainModule { }
