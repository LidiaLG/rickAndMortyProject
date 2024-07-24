import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LocationsPageComponent } from './features/location/locations-page/locations-page.component';
import { SharedModule } from './shared/shared.module';
import { EpisodesPageComponent } from './features/episodes/episodes-page/episodes-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationsPageComponent,
    EpisodesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
