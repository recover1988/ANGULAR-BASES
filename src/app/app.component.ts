import { Component } from '@angular/core';

//Decorador componente
// este espera un argumento q es un objeto
@Component({
  selector: 'app-root', // nombre que va a tener el componente
  templateUrl: './app.component.html', // el templateURL es la direccion dela parte HTML, con el path
  // template:'<span>Eric</span>', // en el template se puede escribir el codigo HTML directamente, antes se aconsejaba usar si el HTML tenia menos de 3 lineas
  styleUrls: ['./app.component.css']
})
// se puede poner explicitamenete si la variables es publica o privada
// es opcional pero mejor poner el tipo de dato
// no se aconseja tener mucha logica en el template, es mejor tene la logica en este archivo .ts
export class AppComponent {


}