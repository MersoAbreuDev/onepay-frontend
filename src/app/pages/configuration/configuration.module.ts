import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponetesCustomModule } from '../../../shared/componentes-custom/componetes-custom.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponetesCustomModule
  ],
  providers: [
    MessageService
  ]
})
export class ConfigurationModule { }
