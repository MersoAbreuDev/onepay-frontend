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
        path: 'estabelecimento',
        loadChildren: () => import('./pages/estabelecimento/estabelecimento.module').then( m => m.EstabelecimentoModule),
        canLoad: [AuthGuard]
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
