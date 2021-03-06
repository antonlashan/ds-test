import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AllowedRoutesPipe } from './_shared/sidemenu/allowed-routes.pipe';
import { SidemenuComponent } from './_shared/sidemenu/sidemenu.component';
import { AuthLayoutComponent } from './authenticate/authenticate.component';
import { NonAuthLayoutComponent } from './non-authenticate/non-authenticate.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    NonAuthLayoutComponent,
    SidemenuComponent,
    AllowedRoutesPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class LayoutsModule {}
