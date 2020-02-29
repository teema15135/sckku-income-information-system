import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

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
    // 'total',
  ];
  dataSource: any = []

  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit() {
    this.callService()
  }

  callService() {
    this.reportService.getDailyReportData().then(res => {
      console.log('res is ', res)
      this.dataSource = res
    });
  }

  events: string[] = [];

  addEventDatePicker(event: MatDatepickerInputEvent<Date>) {
    const date = `${event.value.getDate()}/${event.value.getMonth()+1}/${event.value.getFullYear()}`;
    this.reportService.getDailyReportDataManually(date).then(res => {
      console.log('res is ', res)
      this.dataSource = res
    });
  }

}
