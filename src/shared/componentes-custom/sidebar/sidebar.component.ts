import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../../services/login/login.service';
import { DialogService } from 'primeng/dynamicdialog';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
  menuItems!: MenuItem[];
  items!: MenuItem[];
  mostrarMenu!: boolean;

  constructor(private router: Router,
    private loginService: LoginService,
    private dialogService: DialogService){
}

  openUserInfoModal() {
    // Abre o modal de informações do usuário
    this.dialogService.open(UserInfoComponent, {
      header: 'Informações do Usuário',
      width: '20%',
      contentStyle: {
        'max-height': '15%',
        'overflow-y': 'auto',
        'top': '50px',
        'right': '20px' 
      }
    });
  }

  ngOnInit(){
    console.log('Initializing Sidebar Component');
  this.mostrarMenu = JSON.parse(localStorage.getItem('mostrarMenu') || 'false');
  console.log('mostrarMenu:', this.mostrarMenu);
  

  this.loginService.isAuthenticated$.subscribe(isAuthenticated => {
    console.log('Authentication status changed:', isAuthenticated);
    this.mostrarMenu = isAuthenticated;
    localStorage.setItem('mostrarMenu', JSON.stringify(this.mostrarMenu));
    console.log('mostrarMenu updated and stored:', this.mostrarMenu);
    });

      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          title: 'Home',
          routerLink:'home',
        }, 
        {
            label: 'Cadastros',
            icon: 'pi pi-file-edit',
            title: 'Cadastros',
            items: [
                {
                    label: 'Estabelecimento',
                    icon: 'pi pi-file-edit',
                    items: [
                        {
                            label: 'Novo',
                            icon: 'pi pi-plus',
                            routerLink:'estabelecimento/fisica-form',
                        },
                        {
                            label: 'Consultar',
                            icon: 'pi pi-search',
                            routerLink:'estabelecimento/table',
                        }
                    ],
                    
                }
            ],
        }, 
        {
          label: 'Vendas',
          icon: 'pi pi-money-bill',
          title: 'Vendas',
          routerLink:'vendas',
          
        }, 
        {
          label: 'Planos',
          icon: 'pi pi-verified',
          title: 'Planos',
          items: [
              {
                  label: 'Consulta Planos',
                  icon: 'pi pi-search',
                  routerLink:'receitas',
              }
          ],
        }, 
        {
          label: 'Usuários',
          icon: 'pi pi-users',
          title: 'Usuários',
          items: [
            {
              label: 'Cadastrar',
              icon: 'pi pi-plus',
              routerLink:'',
            },
              {
                  label: 'Consultar',
                  icon: 'pi pi-search',
                  routerLink:'',
              }
               
          ],
      }, 
    ];
    this.menuItems = [
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => { this.logout() }
      }
    ]
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
   this.loginService.logout();
    this.mostrarMenu = false;
    localStorage.setItem('mostrarMenu', JSON.stringify(this.mostrarMenu));
  }

  
}
