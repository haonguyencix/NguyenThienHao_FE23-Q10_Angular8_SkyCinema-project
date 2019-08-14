import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatresComponent } from './theatres.component';
import { BuyTicketTheatresComponent } from './buy-ticket-theatres/buy-ticket-theatres.component';
import { PipeModule } from 'src/app/_core/pipe/pipe.module';
import { FilmItemComponent } from './buy-ticket-theatres/film-item/film-item.component';
import { SharingCommonModule } from 'src/app/_core/share/sharing-common.module';

@NgModule({
  declarations: [TheatresComponent, BuyTicketTheatresComponent, FilmItemComponent],
  exports: [TheatresComponent],
  imports: [
    CommonModule,
    PipeModule,
    SharingCommonModule
  ]
})
export class TheatresModule { }
