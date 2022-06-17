import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authenticationService.isAuthorized(route.data['role']).pipe(
      map((authorized) => {
        if (authorized === false) {
          this.router.navigate(['/login']);
          return false;
        }

        return !!authorized;
      }),
      catchError(() => {
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url },
        });
        return of(false);
      })
    );
  }
}
