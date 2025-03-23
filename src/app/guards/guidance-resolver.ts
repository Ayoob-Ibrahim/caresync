import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../service/http.service';

export const GuidanceResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    const guidanceService = inject(HttpService);
    return guidanceService.GuidanceData().pipe(
        catchError(() => of(null))
    );
};
