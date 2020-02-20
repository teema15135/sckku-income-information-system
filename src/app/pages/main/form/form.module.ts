import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { GeneralIncomeComponent } from './general-income/general-income.component';
import { FeeIncomeComponent } from './fee-income/fee-income.component';
import { KkufmisComponent } from './kkufmis/kkufmis.component';
import { IonicModule } from '@ionic/angular';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FormComponent, GeneralIncomeComponent, FeeIncomeComponent, KkufmisComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    IonicModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ]
})
export class FormModule { }
