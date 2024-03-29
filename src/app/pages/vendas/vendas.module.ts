import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { ComponetesCustomModule } from '../../../shared/componentes-custom/componetes-custom.module';
import { VendasComponent } from './vendas.component';
import { VendasDetalheComponent } from './vendas-detalhe/vendas-detalhe.component';



@NgModule({
  declarations: [VendasComponent, VendasDetalheComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    ComponetesCustomModule
  ]
})
export class VendasModule { }
