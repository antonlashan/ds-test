import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getUserAssignments();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getUserAssignments() {
    this.subs.add(
      this.dashboardService.userAssignments().subscribe((res) => {
        console.log(res);
      })
    );
  }
}
