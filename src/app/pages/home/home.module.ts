import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponetesCustomModule } from '../../../shared/componentes-custom/componetes-custom.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponetesCustomModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
