import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [DashboardService],
})
export class DashboardModule {}
