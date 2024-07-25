import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'
})
export class GenericCardComponent {
  @Input() title: string = '';
  @Input() imagenUrl: string = '';
  @Input() texto: string = '';

  @Input() imageCard: string = '';
  @Input() titlePrincipal: string = '';
  @Input() firstInformation: string | number = '';
  @Input() secondInformation?: string | number = '';
  @Input() dateInformation: string = '';
  @Input() viewButton: boolean = true;
  @Input() textButton: string = '';
}
