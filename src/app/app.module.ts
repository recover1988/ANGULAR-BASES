import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador.component';
// en declarations se colocan los modulos que son las clases que se quieren exportar y usar
@NgModule({
  // componentes
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  // modulos
  imports: [
    BrowserModule
  ],
  // servicios especificos
  providers: [],
  // modulo principal donde se lanza priemro la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
