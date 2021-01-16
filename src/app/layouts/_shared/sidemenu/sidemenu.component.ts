import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Role } from '../../../auth/auth';
import { AppRoutes } from '../../../models/route.model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  routes: AppRoutes[] = [
    { route: '/dashboard', label: 'Dashboard', allow: [] },
    { route: '/admin-section', label: 'Admin Section', allow: [Role.admin] },
  ];
}
