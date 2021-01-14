import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSectionComponent } from './admin-section.component';

const routes: Routes = [{ path: '', component: AdminSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSectionRoutingModule {}
