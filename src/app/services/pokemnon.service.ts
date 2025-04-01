import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemnonService {

  static URL = environment.pokeApi;

  constructor(private http: HttpClient) { 
    
  }

  getAll(): Observable<any> {
    return this.http.get(PokemnonService.URL);
  } 

  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>( PokemnonService.URL + name );
  }
}
