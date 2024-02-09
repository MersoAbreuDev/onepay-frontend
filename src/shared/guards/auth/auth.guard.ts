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
    return this.afAuth.authState.pipe(
      take(1),
      map(user => {
        if (user) {
          return true; // Permitir a navegação se o usuário estiver autenticado
        } else {
          // Redirecionar para a página de login se o usuário não estiver autenticado
          this.router.navigate(['/login/not-authorized']); // Ajuste aqui para a rota correta de login
          return false;
        }
      })
    );
  }
}