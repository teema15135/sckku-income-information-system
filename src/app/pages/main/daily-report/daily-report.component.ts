import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
    'departmentName',
    'amountOfMoney',
    'credit',
    'total',
  ];

  dataSource: any[] = [];

  events: string[] = [];

  formControlArray: FormArray;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.callService();
    this.formControlArray = new FormArray([]);
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
          receiptDate: new FormControl(row.receiptDate),
          receiptNumber: new FormControl(row.receiptNumber),
          incomeCodeSc: new FormControl(row.incomeCodeSc),
          incomeListSc: new FormControl(row.incomeListSc),
          departmentName: new FormControl(row.departmentName),
          amountOfMoney: new FormControl(row.amountOfMoney),
          credit: new FormControl(row.credit),
          total: new FormControl(row.total)
        });
      });
      this.formControlArray = new FormArray(toGroups);
      for (const i of res) {
        i.credit = '-';
      }
      this.dataSource = res;
      this.calculateTotal();
      this.log(this.dataSource);
    });
  }

  addEventDatePicker(event: MatDatepickerInputEvent<Date>) {
    const date = `${event.value.getDate()}/${event.value.getMonth() + 1}/${event.value.getFullYear()}`;
    this.reportService.getDailyReportDataManually(date).then(res => {
      this.dataSource = res;
    });
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
          if ((field === 'credit' || field === 'amountOfMoney') && control.value === 0) {
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

}
