import { Role } from '../auth/auth';

export interface AppRoutes {
  route: string;
  label: string;
  allow: Role[];
}
