import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-type-report',
  templateUrl: './type-report.component.html',
  styleUrls: ['./type-report.component.scss']
})
export class TypeReportComponent implements OnInit {

  allDisplayedColumns: string[] = [
    'incomeCodeSc',
    'incomeListSc',
    'branch1',
    'branch2',
    'branch3',
    'branch4',
    'branch5',
    'branch6',
    'branch7',
    'branch8',
    'branch9',
    'branch10',
    'branch11',
    'branch12',
    'branch13',
    'branch14',
    'total'
  ];

  displayedColumns: string[] = [
    'incomeCodeSc',
    'incomeListSc',
    'branch1',
    'branch2',
    'branch3',
    'branch4',
    'branch5',
    'branch6',
    'branch7',
    'branch8',
    'branch9',
    'branch10',
    'branch11',
    'branch12',
    'branch13',
    'branch14',
    'total'
  ];
  // dataSource = ELEMENT_DATA;
  dataSource: any[] = [];
  allDataSource: any[] = [];
  total: any[] = [];
  searchCodeFormControl: FormControl;

  filterValue: string[];

  noSub = false;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.callService();
    this.searchCodeFormControl = new FormControl('', Validators.required);
    this.filterValue = [
      'branch1',
      'branch2',
      'branch3',
      'branch4',
      'branch5',
      'branch6',
      'branch7',
      'branch8',
      'branch9',
      'branch10',
      'branch11',
      'branch12',
      'branch13',
      'branch14',
    ];
  }

  toggleNoSub() {
    this.noSub = !this.noSub;
  }

  filterScCode(event) {
    const tmp = [];
    for (const i of this.allDataSource) {
      if (i.scCode.indexOf(this.searchCodeFormControl.value) !== -1) {
        tmp.push(i);
      }
    }
    this.dataSource = tmp;
  }

  changeBranchFilter(event) {
    this.displayedColumns = [
      'incomeCodeSc',
      'incomeListSc',
      ...this.filterValue,
      'total'
    ];
    console.log(this.filterValue);
  }

  callService() {
    this.reportService.getTypeReportData().then((res: any[]) => {
      this.dataSource = res;
      this.allDataSource = res;
    });
    this.reportService.getTypeReportTotal().then((res: any[]) => {
      console.log('res is ', res);
      this.total = res;
    });
  }

  getTotal(index) {
    return this.total[index];
  }
}


export interface PeriodicElement {
  accountCode: string;
  incomeCodeSc: number;
  incomeListSc: number;
  branch1: string;
  branch2: string;
  branch3: string;
  branch4: string;
  branch5: string;
  branch6: string;
  branch7: string;
  branch8: string;
  branch9: string;
  branch10: string;
  branch11: string;
  branch12: string;
  branch13: string;
  branch14: string;
  branch15: string;
  branch16: string;
  total: string;
}

const ELEMENT_DATA: any[] = [
  {
    accountCode: 1,
    incomeCodeSc: 'Hydrogen',
    incomeListSc: 1.0079,
    branch1: 'H',
    branch2: '1',
    branch3: '1',
    branch4: '1',
    branch5: '1',
    branch6: '1',
    branch7: '1',
    branch8: '1',
    branch9: '1',
    branch10: '1',
    branch11: '1',
    branch12: '1',
    branch13: '1',
    branch14: '1',
    branch15: '1',
    branch16: '1',
    total: '1',
  },
];
