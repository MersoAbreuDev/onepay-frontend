import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then( m => m.LoginModule)
  },
  { 
    path: 'home',
    loadChildren: () => import('../app/pages/home/home.module').then( m => m.HomeModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupModule),
  },
  {
    path: 'estabelecimento',
    loadChildren: () => import('./pages/estabelecimento/estabelecimento.module').then( m => m.EstabelecimentoModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'vendas',
    loadChildren: () => import('./pages/vendas/vendas.module').then( m => m.VendasModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
