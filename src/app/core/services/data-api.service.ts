import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { ILocation } from '../interfaces/location.interface';
import { IDataAPI } from '../interfaces/data-api.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  apiUrl = environments.apiUrl;

  constructor( private http: HttpClient ) {}

  getLocation(): Observable<ILocation[]> {
    return this.http.get<IDataAPI<ILocation>>(`https://rickandmortyapi.com/api/location`)
      .pipe(
        tap( data => console.log( 'location get ',data)),
        map(( data ) => data.results),
        catchError(error => {
          console.error('Error fetching characters:', error);
          return of([]);
        })
      )
  }

  getCharacter(): Observable<ICharacter[]> {
    return this.http.get<IDataAPI<ICharacter>>(`${this.apiUrl}/character`)
      .pipe(
        tap( data => console.log(data.results)),
        map((data) => data.results)
      )
  }

  //creamos un genérico para poder reutilizarlo en el mismo componente pero con las distintas propiedades 
  getData<T>(endpoint: string): Observable<T[]> {
    return this.http.get<IDataAPI<T>>( `${this.apiUrl}/${endpoint}`)
      .pipe(
        map(data => data.results)
      )
  }
}
