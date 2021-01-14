import { Component, ChangeDetectionStrategy } from '@angular/core';

interface AppRoutes {
  route: string;
  label: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  routes: AppRoutes[] = [
    { route: '/dashboard', label: 'Dashboard' },
    { route: '/admin-section', label: 'Admin Section' },
  ];
}
