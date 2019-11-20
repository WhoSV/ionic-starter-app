import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Films } from './models/films.model';
import { Film } from './models/film.model';

@Injectable()
export class SWAPIService {
  public url: string = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) {}

  public getAllFilms(): Observable<Films[]> {
    return this.http.get(this.url) as Observable<Films[]>;
  }

  public getFilm(url: any): Observable<Film[]> {
    return this.http.get(url) as Observable<Film[]>;
  }
}
