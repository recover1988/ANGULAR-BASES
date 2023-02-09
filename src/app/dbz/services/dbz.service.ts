import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    //el stadnar para proipiedad privada es _
    private _personajes: Personaje[] = [
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

    get personajes(): Personaje[] {
        return [...this._personajes]
    }

    constructor() {
        console.log('servicio inicializado')
    }
}