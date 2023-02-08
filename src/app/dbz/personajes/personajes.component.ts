import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  personajes: any[] = [
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
}
