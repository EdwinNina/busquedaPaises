import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones = [
    {
      'code' : 'EU', 'name':'European Unio',
    },
    {
      'code' : 'EFTA', 'name':'European Free Trade Association'
    },
    {
      'code' : 'CARICOM', 'name':'Caribbean Community',
    },
    {
      'code' : 'PA', 'name':'Pacific Alliance',
    },
    {
      'code' : 'AU', 'name':'African Union',
    },
    {
      'code' : 'USAN', 'name':'Union of South American Nations',
    },
    {
      'code' : 'EEU', 'name':'Eurasian Economic Union',
    },
    {
      'code' : 'AL', 'name':'Arab League',
    },
    {
      'code' : 'ASEAN', 'name':'Association of Southeast Asian Nations',
    },
    {
      'code' : 'CAIS', 'name':'Central American Integration System',
    },
    {
      'code' : 'CEFTA', 'name':'Central European Free Trade Agreement',
    },
    {
      'code' : 'NAFTA', 'name':'North American Free Trade Agreement',
    },
    {
      'code' : 'SAARC', 'name':'South Asian Association for Regional Cooperation',
    }
  ]
  regionActiva: string = ''
  paises: Country[] = []

  constructor(private paisService: PaisService) {}

  getClasCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string){
    if(region === this.regionActiva) return

    this.regionActiva = region
    this.paises = []
    this.paisService.buscarRegion(region)
      .subscribe(
        (resp) => {
          this.paises = resp
        },
        (error) => {
          this.paises = []
        }
      )
  }
}
