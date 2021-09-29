import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { HeroeCoponents } from "./Heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations:[
        HeroeCoponents,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}