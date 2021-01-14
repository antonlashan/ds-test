import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { UserAssignment } from '../../models/user-assignment.model';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'image_url', 'name', 'active', 'action'];
  dataSource: UserAssignment[] = [];
  private subs = new Subscription();

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getUserAssignments();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getUserAssignments() {
    this.subs.add(
      this.dashboardService.userAssignments().subscribe((res) => {
        this.dataSource = res;
        this.cdr.detectChanges();
      })
    );
  }
}
