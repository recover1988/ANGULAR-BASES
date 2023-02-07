import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
// en declarations se colocan los modulos que son las clases que se quieren exportar y usar
@NgModule({
  // componentes
  declarations: [
    AppComponent,
  ],
  // modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  // servicios especificos
  providers: [],
  // modulo principal donde se lanza priemro la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
