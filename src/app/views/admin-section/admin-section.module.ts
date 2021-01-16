import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableExporterModule } from 'mat-table-exporter';

import { AdminSectionRoutingModule } from './admin-section-routing.module';
import { AdminSectionComponent } from './admin-section.component';
import { AdminSectionService } from './admin-section.service';

@NgModule({
  declarations: [AdminSectionComponent],
  imports: [
    CommonModule,
    AdminSectionRoutingModule,
    MatTableModule,
    MatTableExporterModule,
    MatButtonModule,
  ],
  providers: [AdminSectionService],
})
export class AdminSectionModule {}
