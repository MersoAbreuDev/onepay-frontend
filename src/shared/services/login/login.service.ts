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
  returnUrl:string="";
  private isAuthenticated = new BehaviorSubject<boolean>(false)
  mostrarMenuEmitter = new EventEmitter<boolean>();
  user$: Observable<firebase.default.User | null>;
  auth = inject(AngularFireAuth); 
  
    constructor(private http: HttpClient, 
                private router : Router,
                private afAuth: AngularFireAuth
               ) {
        this.user$ = afAuth.authState;
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.getValue();
  }

  get isAuthenticated$() {
    if(localStorage.getItem('currentUser')!=null){
      this.isAuthenticated.next(true);
    }
    return this.isAuthenticated.asObservable();
  }

  login(usuario: any) {
    return from(this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.password))
    .pipe(
      map(data=>{
        this.currentUserSubject.next(data);
        this.isAuthenticated.next(true);
        return data;
      }),
      catchError((err) => {
        if (err.status === 403) {
          console.log("Erro")
        }
        return throwError(() => err);
      })
    );
  }

}
