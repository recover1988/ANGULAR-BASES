import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1600
    },
    {
      nombre: 'Vegeta',
      poder: 1500
    },
    {
      nombre: 'Yamcha',
      poder: 50
    },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  };

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento)
  };
  // injeccion de dependencias -> injextar servicio
  constructor(private dbzService: DbzService) { }

}
