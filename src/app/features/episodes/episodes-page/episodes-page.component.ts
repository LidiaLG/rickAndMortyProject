import { Component, inject } from '@angular/core';
import { DataApiService } from '../../../core/services/data-api.service';
import { IEpisode } from '../../../core/interfaces/episode.interface';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrl: './episodes-page.component.scss'
})
export class EpisodesPageComponent {
  private dataService = inject( DataApiService );
  episodeData: IEpisode[] = [];
  //para no tener que poner todas las propiedades aquí, podemos crear un servicio genérico
  // locationColumns: (keyof ILocation)[] = [ 'id', 'name', 'url', 'created', 'type', 'dimension', 'residents' ];

  //cogemos del servicio la función genérica para pararle las propiedades de location por columna
  ngOnInit(): void {
    this.dataService.getData<IEpisode>('location').subscribe(
      data => this.episodeData = data
    );
  }
}
