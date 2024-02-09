import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../../services/login/login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
  menu!: MenuItem[];
  items!: MenuItem[];
  mostrarMenu: boolean = false;
  currentUserSubject: any;
  currentUser: any;

  constructor(private router: Router,
    private loginService: LoginService){
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
}

  ngOnInit(){
    this.loginService.isAuthenticated$.subscribe(isAuthenticated => {
      this.mostrarMenu = isAuthenticated;
      console.log("Menu ",isAuthenticated );
    });
    this.items = [
      {
          label: 'Cadastros',
          icon: 'pi pi-file-edit',
          items: [
              {
                  label: 'Estabelecimento',
                  icon: 'pi pi-users',
                  items: [
                      {
                          label: 'Novo',
                          icon: 'pi pi-plus',
                          routerLink:'estabelecimento/fisica-form',
                      },
                      {
                          label: 'Consultar',
                          icon: 'pi pi-search',
                          routerLink:'receitas',
                      }
                  ],
                  
              }
          ]
          
      }, 
  ];
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  
}
