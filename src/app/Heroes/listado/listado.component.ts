import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html'  
})
export class ListadoComponent{

  listaHeroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Batman', 'Thor'];
  heroeBorrado: string = '';

  borrarElemento(): void{
    const heroEliminado = this.listaHeroes.shift() || '';
    this.heroeBorrado = heroEliminado;
  }
  
}
