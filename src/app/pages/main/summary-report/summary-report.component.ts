import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.scss']
})
export class SummaryReportComponent implements OnInit {

  //ใบเสร็จเล่มที่, รหัสหน่วยงาน
  displayedColumns = [
    'receiptDate', 
    'receiptNumber', 
    'accountCode', 
    'incomeCodeSc', 
    'incomeListKku', 
    'incomeListSc', 
    'details', 
    'receivingType', 
    'amountOfMoney', 
    'departmentName', 
  ];
  dataSource: any = []

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.callService()
  }

  callService() {
    this.reportService.getSummaryReportData().then(res => {
      console.log('res is ', res)
      this.dataSource = res
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  _id: string
  receiptDate: string;
  receiptNumber: string;
  accountCode: string;
  incomeCodeSc: string;
  incomeListKku: string;
  incomeListSc: string;
  details: string;
  receivingType: string;
  amountOfMoney: number;
  departmentName: string;
}