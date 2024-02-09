import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotAuthComponent } from '../../../shared/componentes-custom/page-not-auth/page-not-auth.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"not-authorized",
    component:PageNotAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
