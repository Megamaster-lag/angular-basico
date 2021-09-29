import { Component } from '@angular/core';


@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeCoponents{
    nombre: string = "Ironman";
    edad: number = 38;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad} `
    }

    cambiarNombre():void{
        this.nombre = "Spiderman"
    }

    cambiaredad():void{
        this.edad = 12;
    }
}