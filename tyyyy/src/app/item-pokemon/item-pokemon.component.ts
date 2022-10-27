import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

import { Location } from '@angular/common'

@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css']
})
export class ItemPokemonComponent implements OnInit {
  routepoke: Observable<ParamMap> | undefined;
  pokeObs: Observable<Object> | undefined;
  det: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PokemonService,
    private location: Location
  ){
    
   }

  ngOnInit(): void {

    this.routepoke = this.route.paramMap;
    this.routepoke.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let itemId = params.get('id');
    console.log(itemId);
    this.pokeObs = this.service.searchPokemonDett(itemId!);
    this.pokeObs.subscribe(
      (data) => ((this.det = data), console.log(data))
    );
  };

  back(): void {
    this.location.back();
  }

}
