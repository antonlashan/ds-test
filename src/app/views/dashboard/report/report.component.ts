import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BarChartData, ReportData } from '../../../models/report.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit, OnDestroy {
  chartData: BarChartData[] = [];
  private subs = new Subscription();

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getUserAssignments(params.id);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private getUserAssignments(id: string) {
    this.subs.add(
      this.dashboardService.graphData(id).subscribe((res) => {
        this.chartData = this.formatChartData(res.data);
        this.cdr.detectChanges();
      })
    );
  }

  private formatChartData(data: ReportData) {
    return Object.keys(data).map((key) => ({
      name: key,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: (data as any)[key],
    })) as BarChartData[];
  }
}
