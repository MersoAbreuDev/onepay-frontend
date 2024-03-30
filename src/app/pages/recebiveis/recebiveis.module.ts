import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecebiveisRoutingModule } from './recebiveis-routing.module';
import { RecebiveisComponent } from './recebiveis/recebiveis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponetesCustomModule } from '../../../shared/componentes-custom/componetes-custom.module';



@NgModule({
  declarations: [
    RecebiveisComponent
  ],
  imports: [
    CommonModule,
    RecebiveisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponetesCustomModule
  ]
})
export class RecebiveisModule { }
