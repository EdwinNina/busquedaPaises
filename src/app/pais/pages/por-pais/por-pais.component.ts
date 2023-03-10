import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `
  ]
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []
  paisesSugeridos: Country[] = []
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string){
    this.hayError = false
    this.termino = this.termino
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(termino)
      .subscribe(
        (resp) => {
          this.paises = resp
        },
        (error) => {
          this.hayError = true
          this.paises = []
        }
      )
  }

  buscarPorSugerido(termino: string){
    this.buscar(termino)
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(
        (paises) => {
          this.paisesSugeridos = paises.splice(0,3)
        },
        (error) => {
          this.paisesSugeridos = []
          this.mostrarSugerencias = false;
        },
      )
  }
}
