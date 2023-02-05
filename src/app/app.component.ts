import { Component } from '@angular/core';

//Decorador componente
// este espera un argumento q es un objeto
@Component({
  selector: 'app-root', // nombre que va a tener el componente
  templateUrl: './app.component.html', // el templateURL es la direccion dela parte HTML, con el path
  // template:'<span>Eric</span>', // en el template se puede escribir el codigo HTML directamente, antes se aconsejaba usar si el HTML tenia menos de 3 lineas
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
}
