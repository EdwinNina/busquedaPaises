import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private apiKey: string = 'a022aba3a1f39f3fcc45f2a8a5337688';

  constructor(private http: HttpClient) { }

  private params = {
    'access_key': this.apiKey,
    'fields': 'name,capital,alpha2code,flag,population'
  }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url,
      {
        params: this.params
      });
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,
      {
        params: this.params
      });
  }

  buscarCodigo(termino: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`
    return this.http.get<Country>(url,
      {
        params: this.params
      });
  }

  buscarRegion(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/regionalbloc/${termino}`
    return this.http.get<Country[]>(url,
      {
        params: this.params
      });
  }
}
