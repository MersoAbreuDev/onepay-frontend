import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas.component';
import { VendasDetalheComponent } from './vendas-detalhe/vendas-detalhe.component';

const routes: Routes = [
  {
    path: '',
    component:VendasComponent
  },
  {
    path: 'vendas-detalhes',
    component:VendasDetalheComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { 

  
}
