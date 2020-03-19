import { Component, OnInit } from '@angular/core';
import { SC_MAP } from '../../../../shared/sc-number-map';
import { SCNumber } from 'src/app/models/scMap.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { IncomeRecord } from 'src/app/models/record.model';

@Component({
  selector: 'app-general-income',
  templateUrl: './general-income.component.html',
  styleUrls: ['./general-income.component.scss']
})
export class GeneralIncomeComponent implements OnInit {

  public scNumberData: SCNumber[] = [];
  public scKeyword = 'sc';

  private isSending = false;

  selectedIncomeCode: string;

  id: string;
  incomeInfo: IncomeRecord;

  constructor(
    private formBuilder: FormBuilder,
    private recordService: RecordService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.getIncomeExtras();
  }

  fg: FormGroup;

  ngOnInit() {
    this.initialSCNumberData();
    this.initialFormGroup();
    this.getIncomeInfo();
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

  getIncomeExtras() {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      this.recordService.getIncomeRecord(state.id);
      this.id = state.id;
    } else {
      console.log('no state');
    }
  }

  getIncomeInfo() {
    if (this.id) {
      this.recordService.getIncomeRecord(this.id).subscribe(
        res => {
          this.incomeInfo = res;
          this.setupFormToMeetApiInfo(res);
        }, err => {
        }
      );
    }
  }

  setupFormToMeetApiInfo(info: IncomeRecord) {
    this.fg.setValue({
      receiptDate: info.receiptDate,       // วันที่ใบเสร็จรับเงิน
      paymentLocation: info.paymentLocation,   // ได้รับเงินจาก
      departmentName: info.departmentName,    // ชื่อหน่วยงาน
      receiptNumber: info.receiptNumber,     // เลขที่ใบเสร็จรับเงิน
      branchName: info.branchName,        // ชื่อสาขาวิชา
      accountCode: info.accountCode,       // รหัสบัญชี*
      incomeListKku: info.incomeListKku,     // รายการรายได้ - KKU*
      incomeCodeSc: info.incomeCodeSc,      // รหัสรายได้ - SC*
      incomeListSc: info.incomeListSc,      // รายการรายได้ - SC*
      details: info.details,           // รายละเอียด
      receivingType: info.receivingType,     // ประเภทการรับเงิน
      dateDeposit: info.dateDeposit,       // วันที่นำฝาก (เช็ค/เงินโอน/ใบนำฝาก)
      checkNumber: info.checkNumber,       // เลขที่เช็ค
      checkDate: info.checkDate,         // วันที่เช็ค
      amountOfMoney: info.amountOfMoney
    });
    document.getElementById('receiptDate').setAttribute('value', this.transformDateString(info.receiptDate));
    document.getElementById('dateDeposit').setAttribute('value', this.transformDateString(info.dateDeposit));
    document.getElementById('checkDate').setAttribute('value', this.transformDateString(info.checkDate));
  }

  transformDateString(dateStr: string) {
    const arr = dateStr.split('/');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }

  onSelectSCNumber(event: SCNumber) {
    this.fg.get('accountCode').setValue(event.acc);
    this.fg.get('incomeListKku').setValue(event.name);
    this.fg.get('incomeListSc').setValue(event.name);
  }

  onDateSelect(event, fcName) {
    this.fg.get(fcName).setValue(`${event.day}/${event.month}/${event.year}`);
  }

  sendForm() {
    if (this.isSending) {
      return;
    }
    this.isSending = true;
    if (this.fg.value.receivingType === 'check') {
      if (this.fg.value.checkNumber === '' || this.fg.value.checkDate === '') {
        this.toastr.warning('กรุณากรอก หมายเลขเช็ค และวันที่เช็คให้ครบถ้วน');
        return;
      }
    }
    const scCode = this.fg.value;
    scCode.incomeCodeSc = scCode.incomeCodeSc.sc;
    if (this.id) {
      this.recordService.updateIncomeRecord({ ...scCode, _id: this.id })
        .subscribe(
          res => {
            this.toastr.success('แก้ไขสำเร็จ');
            this.isSending = false;
            this.router.navigate(['/main/summary-report']);
          }, err => console.error(err)
        );
    } else {
      console.log(scCode);
      this.recordService.saveIncomeRecord(scCode).then(res => {
        console.log(res);
        this.toastr.success('บันทึกสำเร็จ');
        this.isSending = false;
        this.clearForm();
      });
    }
  }

  clearForm() {
    if (this.id) {
      this.recordService.deleteIncomeRecord({ ...this.incomeInfo, _id: this.id })
        .subscribe(
          res => {
            this.toastr.success('ยกเลิกรายการสำเร็จ');
            this.isSending = false;
            this.router.navigate(['/main/summary-report']);
          }, err => console.error(err)
        );
    } else {
      this.fg.setValue({
        receiptDate: '',       // วันที่ใบเสร็จรับเงิน
        paymentLocation: '',   // ได้รับเงินจาก
        departmentName: '',    // ชื่อหน่วยงาน
        receiptNumber: '',     // เลขที่ใบเสร็จรับเงิน
        branchName: '',        // ชื่อสาขาวิชา
        accountCode: '',       // รหัสบัญชี*
        incomeListKku: '',     // รายการรายได้ - KKU*
        incomeCodeSc: '',      // รหัสรายได้ - SC*
        incomeListSc: '',      // รายการรายได้ - SC*
        details: '',           // รายละเอียด
        receivingType: '',     // ประเภทการรับเงิน
        dateDeposit: '',       // วันที่นำฝาก (เช็ค/เงินโอน/ใบนำฝาก)
        checkNumber: '',       // เลขที่เช็ค
        checkDate: '',         // วันที่เช็ค
        amountOfMoney: ''
      });
    }
  }
}
