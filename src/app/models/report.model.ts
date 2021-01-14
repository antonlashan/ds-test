/* eslint-disable @typescript-eslint/naming-convention */
export interface ReportData {
  Agreeableness: number;
  Drive: number;
  Luck: number;
  Openess: number;
}
export interface AssignmentReport {
  data: ReportData;
  type: string;
}

export interface BarChartData {
  name: string;
  value: number;
}
