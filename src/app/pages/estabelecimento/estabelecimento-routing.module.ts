import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstabelecimentoFisicaFormComponent } from './estabelecimento-fisica-form/estabelecimento-fisica-form.component';
import { EstabelecimentoTableComponent } from './estabelecimento-table/estabelecimento-table.component';

const routes: Routes = [
  {
    path:'fisica-form',
    component: EstabelecimentoFisicaFormComponent
  },
  {
    path:'table',
    component: EstabelecimentoTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstabelecimentoRoutingModule { }
