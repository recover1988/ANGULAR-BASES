import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  };

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes
  // }


  // injeccion de dependencias -> injextar servicio
  constructor() {
    // this.personajes = this.dbzService.personajes
  }

}
