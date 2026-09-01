import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HealthCheck } from './health-check/health-check';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'health-check',
    component: HealthCheck,
    title: 'About Us',
  },
];
