import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../models/user.model';

import { AdminSectionService } from './admin-section.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSectionComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['email', 'first_name', 'last_name'];
  dataSource: User[] = [];
  private subs = new Subscription();

  constructor(
    private adminSectionService: AdminSectionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getUsers() {
    this.subs.add(
      this.adminSectionService.users().subscribe((res) => {
        this.dataSource = res;
        this.cdr.detectChanges();
      })
    );
  }
}
