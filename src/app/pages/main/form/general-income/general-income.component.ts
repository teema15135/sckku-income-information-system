import { Component, OnInit } from '@angular/core';
import { SC_MAP } from '../../../../shared/sc-number-map';
import { SCNumber } from 'src/app/models/scMap.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-income',
  templateUrl: './general-income.component.html',
  styleUrls: ['./general-income.component.scss']
})
export class GeneralIncomeComponent implements OnInit {

  public scNumberData: SCNumber[] = [];
  public scKeyword = 'sc';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  fg: FormGroup;

  ngOnInit() {
    this.initialSCNumberData();
    this.initialFormGroup();
  }

  initialSCNumberData() {
    this.scNumberData = SC_MAP;
  }

  initialFormGroup() {
    this.fg = this.formBuilder.group({
      receiptDate: ['', [Validators.required]],       // วันที่ใบเสร็จรับเงิน
      paymentLocation: ['', [Validators.required]],   // ได้รับเงินจาก
      departmentName: ['', [Validators.required]],    // ชื่อหน่วยงาน
      receiptNumber: ['', [Validators.required]],     // เลขที่ใบเสร็จรับเงิน
      branchName: ['', [Validators.required]],        // ชื่อสาขาวิชา
      accountCode: ['', [Validators.required]],       // รหัสบัญชี*
      incomeListKku: ['', [Validators.required]],     // รายการรายได้ - KKU*
      incomeCodeSc: ['', [Validators.required]],      // รหัสรายได้ - SC*
      incomeListSc: ['', [Validators.required]],      // รายการรายได้ - SC*
      details: ['', [Validators.required]],           // รายละเอียด
      receivingType: ['', [Validators.required]],     // ประเภทการรับเงิน
      dateDeposit: ['', [Validators.required]],       // วันที่นำฝาก (เช็ค/เงินโอน/ใบนำฝาก)
      checkNumber: [''],       // เลขที่เช็ค
      checkDate: [''],         // วันที่เช็ค
      amountOfMoney: ['', [Validators.required]]      // จำนวนเงิน
    });
  }

  onSelectSCNumber(event: SCNumber) {
    this.fg.get('accountCode').setValue(event.acc);
    this.fg.get('incomeListKku').setValue(event.name);
    this.fg.get('incomeListSc').setValue(event.name);
    this.fg.get('incomeCodeSc').setValue(event.sc);
  }

  onDateSelect(event, fcName) {
    this.fg.get(fcName).setValue(`${event.day}/${event.month}/${event.year}`);
  }



  sendForm() {
    console.log(this.fg.value);
    if (this.fg.value.receivingType === 'เช็ค') {
      if (this.fg.value.checkNumber === '' || this.fg.value.checkDate === '') {
        alert('Please fill Check number and Check date');
        return;
      }
    }
  }

  clearForm() {
  }

}
