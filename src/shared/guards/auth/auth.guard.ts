import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = localStorage.getItem('currentUser') !== null;

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('login/not-authorized');
      return false;
    }
  }
}