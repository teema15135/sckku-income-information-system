import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { IncomeRecord } from 'src/app/models/record.model';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  reports: IncomeRecord[] = [];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getAllDailyReport().then(reports => {
      this.reports = reports; console.log(this.reports);
    }).catch(err => console.error(err));
  }

  sumTo(index: number): number {
    return 1;
  }

}
