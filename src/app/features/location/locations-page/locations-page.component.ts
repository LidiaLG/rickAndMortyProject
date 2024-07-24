import { ILocation } from './../../../core/interfaces/location.interface';
import { Component, inject, OnInit } from '@angular/core';
import { DataApiService } from '../../../core/services/data-api.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrl: './locations-page.component.scss'
})
export class LocationsPageComponent implements OnInit{
  private dataService = inject( DataApiService );
  locationData: ILocation[] = [];
  //para no tener que poner todas las propiedades aquí, podemos crear un servicio genérico
  // locationColumns: (keyof ILocation)[] = [ 'id', 'name', 'url', 'created', 'type', 'dimension', 'residents' ];

  //cogemos del servicio la función genérica para pararle las propiedades de location por columna
  ngOnInit(): void {
    this.dataService.getData<ILocation>('location').subscribe(
      data => this.locationData = data
    );
  }
  // ngOnInit(): void {
  //   this.dataService.getLocation().subscribe(
  //     data => this.locationData = data
  //   );
}


