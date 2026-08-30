import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: { preset: Aura, options: { darkModeSelector: false } },
      license:
        'eyJpZCI6ImM4MDUxOWI1LWNlOGQtNDM3Yi04OTQxLTc1YTdlMmUzMjQ0MSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODgxMTIzNDgsImV4cCI6MTgxOTY0ODM0OH0.ltiiRt2MPh7lryrQh3Onpv6yI3gjLlin62g07MDIUsUOBUHi7VWe6ErBOTz2YvEjGEZm3rgmNFrbTXOBJ5XHDA',
    }),
  ],
};
