import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AdminSectionRoutingModule } from './admin-section-routing.module';
import { AdminSectionComponent } from './admin-section.component';
import { AdminSectionService } from './admin-section.service';

@NgModule({
  declarations: [AdminSectionComponent],
  imports: [CommonModule, AdminSectionRoutingModule, MatTableModule],
  providers: [AdminSectionService],
})
export class AdminSectionModule {}
