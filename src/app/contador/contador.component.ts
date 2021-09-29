import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        <h1>Hola mundo</h1>

        <h3>La base es: <strong>{{ base}}</strong></h3>
        <button (click)= "acumulado(base)"> +5 </button>
        <span>  {{ numero }} </span>
        <button (click)= "acumulado(-base)"> -5 </button>
    
    `
})
export class ContadorComponent{
    title = 'bases';
    numero: number = 10;
    base : number = 5
  
    acumulado(valor: number){
      this.numero += valor;
    }
}