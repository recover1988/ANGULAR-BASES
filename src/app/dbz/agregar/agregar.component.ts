import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

@Input('agregar') agregar:()=>void=()=>{};
@Input('nuevo') nuevo:Personaje={nombre:'',poder:0};

}
