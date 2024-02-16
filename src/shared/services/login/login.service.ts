import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, from, map, throwError } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  returnUrl: string = "";
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private afAuth: AngularFireAuth) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.isAuthenticated.next(true);
      } else {
        localStorage.removeItem('currentUser');
        this.isAuthenticated.next(false);
      }
    });
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  get isAuthenticated$() {
    return this.isAuthenticated.asObservable();
  }

  login(usuario: any) {
    return from(this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password))
      .pipe(
        map(data => {
          this.currentUserSubject.next(data.user);
          return data;
        }),
        catchError((err) => {
          if (err.status === 403) {
            console.log("Erro");
          }
          return throwError(() => err);
        })
      );
  }

  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}