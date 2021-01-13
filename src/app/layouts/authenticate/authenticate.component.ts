import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements OnDestroy, OnInit {
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  matches!: boolean;
  private subs = new Subscription();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.subs.add(
      this.breakpointObserver
        .observe(['(max-width: 600px)'])
        .subscribe((res) => {
          console.log(res);
          this.matches = res.matches;
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
