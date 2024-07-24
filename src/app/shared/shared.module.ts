import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { DirectionBtnComponent } from './components/direction-btn/direction-btn.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { WordLimitPipe } from './pipes/word-limit.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';


@NgModule({
  declarations: [
    Error404PageComponent,
    DirectionBtnComponent,
    GenericCardComponent,
    GenericTableComponent,
    WordLimitPipe,
    DateFormatPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent,
    DirectionBtnComponent,
    GenericCardComponent,
    GenericTableComponent
  ]
})
export class SharedModule { }
