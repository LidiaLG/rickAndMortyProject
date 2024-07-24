import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from '../../characters/characters-page/characters-page.component';
import { CharacterDetailsPageComponent } from '../../characters/character-details-page/character-details-page.component';

const routes: Routes = [
  {
    path: '', component: CharactersPageComponent,
     children: [
      {
        path: ':id', component: CharacterDetailsPageComponent
      },
      // {
      //   path: ':id', children: [
      //   ]
      // }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
