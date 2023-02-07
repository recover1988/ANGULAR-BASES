import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    };

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    };

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    };

    cambiarEdad(): void {
        this.edad = 30;
    };
}
// One way data binding o enlzado en una sola via --> quiere decir que angular solo refresca si algo cambia