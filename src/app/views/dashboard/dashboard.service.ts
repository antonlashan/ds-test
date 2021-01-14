import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AssignmentReport } from '../../models/report.model';
import { UserAssignment } from '../../models/user-assignment.model';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  userAssignments() {
    return this.http.get<UserAssignment[]>('userassessments').pipe();
  }

  graphData(id: string) {
    return this.http
      .get<AssignmentReport>('userassessment/graph', { params: { id } })
      .pipe();
  }
}
