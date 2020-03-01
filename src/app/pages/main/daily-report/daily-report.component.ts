import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
    // 'credit',
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

  callService() {
    this.reportService.getDailyReportData().then(res => {
      let total = 0;
      for (const i of res) {
        total += Number(i.amountOfMoney);
        i.total = total;
      }
      const toGroups = res.map(row => {
        return new FormGroup({
          receiptDate: new FormControl(row.receiptDate),
          receiptNumber: new FormControl(row.receiptNumber),
          incomeCodeSc: new FormControl(row.incomeCodeSc),
          incomeListSc: new FormControl(row.incomeListSc),
          departmentName: new FormControl(row.departmentName),
          amountOfMoney: new FormControl(row.amountOfMoney),
          total: new FormControl(row.total)
        });
      });
      this.formControlArray = new FormArray(toGroups);
      this.dataSource = res;
      console.log(this.formControlArray);
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

}
