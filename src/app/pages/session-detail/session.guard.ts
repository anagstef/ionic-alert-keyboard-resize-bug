import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionDetailPage } from './session-detail';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanDeactivate<SessionDetailPage> {
  public component: SessionDetailPage;
  public route: ActivatedRouteSnapshot;

  public canDeactivate(
    component: SessionDetailPage,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}
