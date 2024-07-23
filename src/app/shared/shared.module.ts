import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { DirectionBtnComponent } from './components/direction-btn/direction-btn.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    DirectionBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    DirectionBtnComponent
  ]
})
export class SharedModule { }
