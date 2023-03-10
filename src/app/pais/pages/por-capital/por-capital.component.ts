import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []

  constructor(private paisService: PaisService) {}

  buscar(termino: string){
    this.hayError = false
    this.termino = this.termino
    this.paisService.buscarCapital(termino)
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

  sugerencias(termino: string){
    console.log('termino')
  }
}
