import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  searchPokemon(query: string) {
    const url = `https://pokeapi.co/api/v2/type/${query}`;
    let obsPok= this.http.get(url);
    return obsPok;
  }

  searchPokemonDett(query: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    let obsDet= this.http.get(url);
    return obsDet;
  }
}
