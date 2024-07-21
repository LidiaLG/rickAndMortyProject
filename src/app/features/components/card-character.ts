import { Component, inject, OnInit } from '@angular/core';
import { ICharacter } from '../../core/interfaces/character.interface';
import { DataApiService } from '../../core/services/data-api.service';

@Component({
    selector: 'app-card-character',
    templateUrl: './card-character.component.html',
    styles: ``
})
export class CardCharacterComponent implements OnInit {
    character: ICharacter[] = [];
    private dataService = inject( DataApiService );

    ngOnInit(): void {
        this.dataService.getCharacter().subscribe({
          next: (data) => {
            this.character = data;
            console.log('Data received:', this.character);
          },
          error: (error) => {
            console.error('Error fetching characters:', error);
          }
        });
    }
    
}
