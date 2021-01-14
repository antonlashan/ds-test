import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

const BP = '(max-width: 600px)';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements OnDestroy, OnInit {
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  matches: boolean;
  private subs = new Subscription();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {
    this.matches = breakpointObserver.isMatched(BP);
  }

  ngOnInit() {
    this.subs.add(
      this.breakpointObserver.observe(BP).subscribe((res) => {
        this.matches = res.matches;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
