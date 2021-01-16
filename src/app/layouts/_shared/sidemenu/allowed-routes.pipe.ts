import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../../auth/auth';
import { AuthService } from '../../../auth/auth.service';
import { AppRoutes } from '../../../models/route.model';

@Pipe({ name: 'allowedRoutes' })
export class AllowedRoutesPipe implements PipeTransform {
  private user: User | null;

  constructor(private authService: AuthService) {
    this.user = this.authService.currUser;
  }

  transform(routes: AppRoutes[]): AppRoutes[] {
    if (this.user) {
      return routes.filter((r) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return r.allow.length === 0 || r.allow.includes(this.user!.role);
      });
    }

    return [];
  }
}
