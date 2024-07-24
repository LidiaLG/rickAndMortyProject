import { ICharacter } from './../../../core/interfaces/character.interface';
import { Component, inject, OnInit } from '@angular/core';
import { DataApiService } from '../../../core/services/data-api.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss'
})
export class CharactersPageComponent implements OnInit{
  private dataService = inject( DataApiService );
  charater: ICharacter[] = [];

  ngOnInit(): void {
    this.dataService.getCharacter().subscribe(
    (data) => {
      this.charater = data;
      console.log( 'holi', this.charater );
      
    }
    )
  }

}
