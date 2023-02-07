import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // todo esta invisible dentro del encapsulado
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // las cosas que se vean
    exports: [
        ListadoComponent
    ],
    // en imports solo van modulos
    imports: [
        // CommonModule -> ofrece las directivas ngFor gnIf entre otros
        CommonModule
    ]
})

export class HeroesModule { }