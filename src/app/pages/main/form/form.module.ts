import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { GeneralIncomeComponent } from './general-income/general-income.component';
import { FeeIncomeComponent } from './fee-income/fee-income.component';


@NgModule({
  declarations: [FormComponent, GeneralIncomeComponent, FeeIncomeComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
