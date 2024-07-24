import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';
import { LocationsPageComponent } from './features/location/locations-page/locations-page.component';
import { EpisodesPageComponent } from './features/episodes/episodes-page/episodes-page.component';
import { CharactersPageComponent } from './features/characters/characters-page/characters-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path:'characters', loadChildren: () => import('./features/module/features/features.module')
      .then(m => m.FeaturesModule)
  },
  {
    path: 'location', component: LocationsPageComponent
  },
  {
    path: 'episode', component: EpisodesPageComponent
  },
  {
    path: '**', component: Error404PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
