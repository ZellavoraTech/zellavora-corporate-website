import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export const maintenanceGuard: CanActivateFn = () => {
  if (environment.maintenanceMode) {
    inject(Router).navigate(['/maintenance'], { replaceUrl: true });
    return false;
  }
  return true;
};

export const maintenanceBypassGuard: CanActivateFn = () => {
  if (!environment.maintenanceMode) {
    inject(Router).navigate(['/'], { replaceUrl: true });
    return false;
  }
  return true;
};
