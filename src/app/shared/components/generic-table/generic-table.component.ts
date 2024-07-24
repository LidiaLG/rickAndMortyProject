import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
//le pasamos el externds para que sepa que siempre será un objeto con claves string y valor de cualquier tipo
export class GenericTableComponent<TableData extends Record<string, any>> {
  @Input() data: TableData[] = [];
  //pasamos el keyof para que la tabla coja un tipo de dato u otro
  // @Input() columns: (keyof TableData)[] = [];

  get columns(): string[] {
    return this.data.length ? Object.keys(this.data[0]) : [];
  }
}
