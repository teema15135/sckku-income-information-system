import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ExcelService } from 'src/app/services/excel.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  displayedColumns = [
    'receiptDate',
    'receiptNumber',
    'incomeCodeSc',
    'incomeListSc',
    'branchName',
    'amountOfMoney',
    'credit',
    'total',
  ];

  allData: any[] = [];

  dataSource: any[] = [];

  excelData: any[] = [];

  events: string[] = [];

  formControlArray: FormArray;

  addRowFormGroup: FormGroup;

  dateSelected: string;

  filterValue: string[];

  constructor(
    private reportService: ReportService,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.formControlArray = new FormArray([]);
    this.initialAddRowFormGroup();
    this.callService();
    this.filterValue = [
      'กองบริหารงานคณะ',
      'นิติวิทย์',
      'วิทย์-ชีวภาพ',
      'วัสดุศาสตร์',
      'คณิตศาสตร์',
      'เคมี',
      'จุลชีววิทยา',
      'ชีวเคมี',
      'ชีววิทยา',
      'สิ่งแวดล้อม',
      'ฟิสิกส์',
      'คอมพิวเตอร์',
      'สถิติ',
      'วมว.',
    ];
  }

  initialAddRowFormGroup() {
    this.addRowFormGroup = new FormGroup({
      receiptDate: new FormControl(`${(this.dateSelected ? this.dateSelected : formatDate(new Date(), 'd/M/yyyy', 'en'))}`
        , [Validators.required]),
      receiptNumber: new FormControl('', [Validators.required]),
      incomeCodeSc: new FormControl('', [Validators.required]),
      incomeListSc: new FormControl('', [Validators.required]),
      branchName: new FormControl('', [Validators.required]),
      amountOfMoney: new FormControl('0', [Validators.required, Validators.min(0)]),
      credit: new FormControl('0', [Validators.required, Validators.min(0)]),
    });
  }

  isShowBranch(branchName: string) {
    console.log(branchName);
    for (const i in this.filterValue) {
      if (branchName === i) {
        return true;
      }
    }
    return false;
  }

  addRowHandler() {
    const row = this.addRowFormGroup.value;
    row.credit = (row.credit <= 0 ? '-' : row.credit);
    row.amountOfMoney = (row.amountOfMoney <= 0 ? '-' : row.amountOfMoney);
    row.total = 0;
    this.dataSource = [...this.dataSource, row];
    this.formControlArray.push(
      new FormGroup({
        receiptNumber: new FormControl(row.receiptNumber),
        incomeCodeSc: new FormControl(row.incomeCodeSc),
        incomeListSc: new FormControl(row.incomeListSc),
        branchName: new FormControl(row.branchName),
        amountOfMoney: new FormControl(row.amountOfMoney),
        credit: new FormControl(row.credit)
      })
    );
    this.calculateTotal();
    this.initialAddRowFormGroup();
    (document.querySelector('#receiptInputField') as HTMLInputElement).focus();
  }

  calculateTotal() {
    let total = 0;
    for (const i of this.dataSource) {
      let debit = Number(i.amountOfMoney);
      let credit = Number(i.credit);
      if (isNaN(debit)) {
        debit = 0;
      }
      if (isNaN(credit)) {
        credit = 0;
      }
      total += debit + credit;
      i.total = total;
    }
  }

  callService() {
    this.reportService.getDailyReportData().then(res => {
      const toGroups = res.map(row => {
        return new FormGroup({
          receiptNumber: new FormControl(row.receiptNumber),
          incomeCodeSc: new FormControl(row.incomeCodeSc),
          incomeListSc: new FormControl(row.incomeListSc),
          branchName: new FormControl(row.branchName),
          amountOfMoney: new FormControl(row.amountOfMoney),
          credit: new FormControl(row.credit)
        });
      });
      this.formControlArray = new FormArray(toGroups);
      for (const i of res) {
        i.credit = '-';
      }
      this.dataSource = res;
      this.calculateTotal();
      this.log(this.dataSource);
      this.log(res);
    });
  }

  addEventDatePicker(event: MatDatepickerInputEvent<Date>) {
    const date = `${event.value.getDate()}/${event.value.getMonth() + 1}/${event.value.getFullYear()}`;
    this.dateSelected = date;
    this.reportService.getDailyReportDataManually(date).then(res => {
      const toGroups = res.map(row => {
        return new FormGroup({
          receiptNumber: new FormControl(row.receiptNumber),
          incomeCodeSc: new FormControl(row.incomeCodeSc),
          incomeListSc: new FormControl(row.incomeListSc),
          branchName: new FormControl(row.branchName),
          amountOfMoney: new FormControl(row.amountOfMoney),
          credit: new FormControl(row.credit)
        });
      });
      this.formControlArray = new FormArray(toGroups);
      for (const i of res) {
        i.credit = '-';
      }
      this.dataSource = res;
      this.calculateTotal();
    });
    this.addRowFormGroup.get('receiptDate').setValue(date);
  }

  getControl(index: number, field: string): FormControl {
    return this.formControlArray.at(index).get(field) as FormControl;
  }

  updateField(index: number, field: string) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.dataSource = this.dataSource.map((e, i) => {
        if (index === i) {
          if (control.value === '') {
            control.setValue('-');
          }
          if ((field === 'credit' || field === 'amountOfMoney') && control.value <= 0) {
            control.setValue('-');
          }
          return {
            ...e,
            [field]: control.value
          };
        }
        return e;
      });
      this.calculateTotal();
    }
  }

  log(a) {
    console.log(a);
  }

  exportAsXLSX(): void {
    let excelData = this.dataSource.map(function (obj) {
      return {
        วันเดือนปี: obj.receiptDate,
        เลขที่ใบเสร็จรับเงิน: obj.receiptNumber,
        รหัสรายได้: obj.incomeCodeSc,
        รายการ: obj.incomeListSc,
        ชื่อสาขา: obj.branchName,
        จำนวนเงิน: obj.amountOfMoney,
        เครดิต: obj.credit,
        ยอดคงเหลือ: obj.total,
      }
    });
    this.excelService.exportAsExcelFile(excelData, 'sample');
  }

}
