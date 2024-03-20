import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotAuthComponent } from '../../../shared/componentes-custom/page-not-auth/page-not-auth.component';
import { ConfigurationComponent } from './configuration.component';


const routes: Routes = [
  {
    path:"",
    component:ConfigurationComponent
  }
  ,
  {
    path:"not-authorized",
    component:PageNotAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
