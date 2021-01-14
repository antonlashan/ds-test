import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BarChartModule } from '@swimlane/ngx-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [DashboardComponent, ReportComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatIconModule,
    BarChartModule,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
