import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'item-pokemon/:id', component: ItemPokemonComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
