import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';

import { CharactersPageComponent } from '../../characters/characters-page/characters-page.component';
import { CharacterDetailsPageComponent } from '../../characters/character-details-page/character-details-page.component';


@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
