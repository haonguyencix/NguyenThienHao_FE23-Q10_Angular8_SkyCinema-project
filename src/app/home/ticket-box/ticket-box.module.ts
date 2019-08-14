import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBoxComponent } from './ticket-box.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SeatItemComponent } from './seat-item/seat-item.component';
import { TicketBoxRoutingModule } from './ticket-box-routing.modules';
import { MaterialModule } from 'src/app/_core/material/material.modules';

@NgModule({
  declarations: [TicketBoxComponent, SeatListComponent, SeatItemComponent],
  exports: [TicketBoxComponent],
  imports: [
    CommonModule,
    TicketBoxRoutingModule,
    MaterialModule
  ]
})
export class TicketBoxModule { }
