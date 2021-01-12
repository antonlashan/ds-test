import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-non-authenticate',
  templateUrl: './non-authenticate.component.html',
  styleUrls: ['./non-authenticate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NonAuthLayoutComponent {}
