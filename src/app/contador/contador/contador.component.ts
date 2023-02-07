import { Component } from '@angular/core'
// usar ` ` backstick para hacer el template
@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>
        <h3>La base es de: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)">{{base}}</button>

        <span>{{ numero }}</span>

        <button (click)="acumular(-base)">{{-base}}</button>
    
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    // com this se hace referencia a la propiedad de la clase
    acumular(valor: number) {
        this.numero += valor;
    }

}