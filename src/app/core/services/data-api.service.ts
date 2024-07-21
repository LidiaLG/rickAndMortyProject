import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { map, Observable } from 'rxjs';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private apiUrl = environments.apiUrl;

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<ICharacter[]> {
    return this.http.get<{ results: ICharacter[] }>(`${this.apiUrl}/character`)
      .pipe(
        map(response => response.results)
      );
  }
}
