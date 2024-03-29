import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecebiveisComponent } from './recebiveis/recebiveis.component';

const routes: Routes = [
  {
    path: '',
    component:RecebiveisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecebiveisRoutingModule { }
