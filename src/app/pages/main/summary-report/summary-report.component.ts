import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.scss']
})
export class SummaryReportComponent implements OnInit {

  displayedColumns = [
    'select',
    'editButton',
    'receiptDate',
    'receiptNumber',
    'accountCode',
    'incomeCodeSc',
    'incomeListKku',
    'incomeListSc',
    'details',
    'branchName',
    'receivingType',
    'amountOfMoney',
  ];
  dataSource: any = [];
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataExcel: any = [];

  poolData: PeriodicElement[] = [];

  filterValue = 'all';

  constructor(
    private reportService: ReportService,
    private router: Router,
    private excelService: ExcelService,
  ) { }

  ngOnInit() {
    this.callService();
  }

  onClickEditRecord(index: number) {
    this.router.navigate(['/main/form/general'], { state: { id: this.dataSource[index]._id }});
  }

  callService() {
    this.reportService.getSummaryReportData().then((res: PeriodicElement[]) => {
      this.dataSource = res;
      this.poolData = res;
    });
  }

  callServiceFinding(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    const incomeCodeSc = this.dataSource.filter;
    this.reportService.getSummaryReportFinding(incomeCodeSc).then((res: PeriodicElement[]) => {
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

  exportAsXLSX(): void {
    let excelData = this.dataExcel.map(function (obj) {
      return {
        วันที่ใบเสร็จ: obj.receiptDate,
        เลขที่ใบเสร็จ: obj.receiptNumber,
        รหัสบัญชี: obj.accountCode,
        รหัสรายได้SC: obj.incomeCodeSc,
        รายการรายได้KKU: obj.incomeListKku,
        รายการรายได้SC: obj.incomeListSc,
        รายละเอียดรายได้SC: obj.details,
        ชื่อสาขา: obj.branchName,
        ประเภทการรับเงิน: obj.receivingType,
        จำนวนเงิน: obj.amountOfMoney,
      }
    });
    this.excelService.exportAsExcelFile(excelData, 'sample');
  }

  isAllSelected($event) {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
  masterToggle($event) {
    if ($event.checked) {
      this.onCompleteRow(this.dataSource);
    }
    this.isAllSelected($event) ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  selectRow($event, row) {
    if ($event.checked) {
      this.dataExcel.push(row);
    }
    else {
      this.dataExcel.pop(row)
    }
  }

  onCompleteRow(dataSource) {
    dataSource.forEach(element => {
      this.dataExcel.push(element)
    });
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
  branchName: string;
  receivingType: string;
  amountOfMoney: number;
  filter?;
}
