import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Role } from './auth/auth';
import { AuthGuard } from './auth/auth.guard';
import { AuthLayoutComponent } from './layouts/authenticate/authenticate.component';
import { NonAuthLayoutComponent } from './layouts/non-authenticate/non-authenticate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: NonAuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./views/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: { roles: [Role.admin, Role.user] },
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'admin-section',
        canActivate: [AuthGuard],
        data: { roles: [Role.admin] },
        loadChildren: () =>
          import('./views/admin-section/admin-section.module').then(
            (m) => m.AdminSectionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
