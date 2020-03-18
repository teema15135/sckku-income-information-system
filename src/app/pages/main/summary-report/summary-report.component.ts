import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.scss']
})
export class SummaryReportComponent implements OnInit {

  // ใบเสร็จเล่มที่, รหัสหน่วยงาน
  displayedColumns = [
    'editButton',
    'receiptDate',
    'receiptNumber',
    'accountCode',
    'incomeCodeSc',
    'incomeListKku',
    'incomeListSc',
    'details',
    'receivingType',
    'amountOfMoney',
    'branchName',
  ];
  dataSource: PeriodicElement[] | { filter } = [];

  poolData: PeriodicElement[] = [];

  filterValue = 'all';

  constructor(
    private reportService: ReportService,
    private router: Router
  ) { }

  ngOnInit() {
    this.callService();
  }

  onClickEditRecord(index: number) {
    this.router.navigate(['/main/form/general'], { state: { id: this.dataSource[index]._id }});
  }

  callService() {
    this.reportService.getSummaryReportData().then((res: PeriodicElement[]) => {
      console.log('res is ', res);
      this.dataSource = res;
      this.poolData = res;
    });
  }

  callServiceFinding(event: Event) {
    console.log('clicked');
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    const incomeCodeSc = this.dataSource.filter;
    this.reportService.getSummaryReportFinding(incomeCodeSc).then((res: PeriodicElement[]) => {
      console.log('res is ', res);
      this.dataSource = res;
    });
  }

  changeBranchFilter(event: { source, value: string}) {
    if (event.value === 'all') {
      this.dataSource = this.poolData;
    } else {
      const tmp = [];
      for (const row of this.poolData) {
        if (row.branchName === event.value) {
          tmp.push(row);
        }
      }
      this.dataSource = tmp;
    }
  }

}

export interface PeriodicElement {
  _id: string;
  receiptDate: string;
  receiptNumber: string;
  accountCode: string;
  incomeCodeSc: string;
  incomeListKku: string;
  incomeListSc: string;
  details: string;
  receivingType: string;
  amountOfMoney: number;
  branchName: string;
  filter?;
}
