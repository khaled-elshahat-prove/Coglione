import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string | undefined;
  obsPoke: Observable<Object> | undefined;
  results: any;
  
  constructor(public pokem: PokemonService) { }

  ngOnInit(): void {
  }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsPoke = this.pokem.searchPokemon(this.query);
    this.obsPoke.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
      localStorage.setItem('dataSource', JSON.stringify(this.results));
    });
  }

}
