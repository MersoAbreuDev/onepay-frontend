import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponetesCustomModule } from '../shared/componentes-custom/componetes-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../enviroments/enviroment.prod';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponetesCustomModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
