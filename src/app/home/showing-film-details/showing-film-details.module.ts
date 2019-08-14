import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ShowingFilmDetailsComponent } from './showing-film-details.component';
import { ShowtimeInDetailPageComponent } from './buy-ticket-area/showtime-in-detail-page/showtime-in-detail-page.component';
import { BannerInDetailPageComponent } from './banner-in-detail-page/banner-in-detail-page.component';
import { BuyTicketAreaComponent } from './buy-ticket-area/buy-ticket-area.component';
import { InfoComponent } from './buy-ticket-area/info/info.component';
import { ReviewComponent } from './buy-ticket-area/review/review.component';
import { MaterialModule } from 'src/app/_core/material/material.modules';
import { PipeModule } from 'src/app/_core/pipe/pipe.module';
import { ShowingFilmDetailsRoutingModule } from './showing-film-details-routing.moudule';
import { SharingCommonModule } from 'src/app/_core/share/sharing-common.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowingFilmDetailsComponent, ShowtimeInDetailPageComponent, BannerInDetailPageComponent, BuyTicketAreaComponent, InfoComponent, ReviewComponent],
  exports: [ShowingFilmDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule,
    ShowingFilmDetailsRoutingModule,
    SharingCommonModule,
    FormsModule
  ]
})
export class ShowingFilmDetailsModule { }
