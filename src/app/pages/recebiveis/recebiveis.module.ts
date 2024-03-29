import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecebiveisRoutingModule } from './recebiveis-routing.module';
import { RecebiveisComponent } from './recebiveis/recebiveis.component';


@NgModule({
  declarations: [
    RecebiveisComponent
  ],
  imports: [
    CommonModule,
    RecebiveisRoutingModule
  ]
})
export class RecebiveisModule { }
