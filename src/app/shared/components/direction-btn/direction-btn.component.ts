import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direction-btn',
  templateUrl: './direction-btn.component.html',
  styleUrl: './direction-btn.component.scss'
})
export class DirectionBtnComponent {
  private router = inject( Router );

  @Input() text: string = 'Click me';
  @Input() route: string = '/';

  navigate() {
    this.router.navigate([ this.route ]);
  }

}
