import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TableModule } from 'primeng/table';
import { SharedModule } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonCustomComponent } from './button-custom/button-custom.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    SidebarComponent,
    ButtonCustomComponent
  ],
  imports: [
    CardModule,
    CommonModule,
    SidebarModule,
    ButtonModule,
    DragDropModule,
    PanelModule,
    MenuModule,
    PanelMenuModule,
    DividerModule,
    StyleClassModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextareaModule,
    TableModule,
    SharedModule,
    InputTextModule,
    DropdownModule,
    MessagesModule,
    InputMaskModule,
    DialogModule,
    ToastModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BreadcrumbModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    SidebarComponent,
    DropdownModule,
    CardModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    ButtonCustomComponent,
    BreadcrumbModule
  ]
})
export class ComponetesCustomModule { }
