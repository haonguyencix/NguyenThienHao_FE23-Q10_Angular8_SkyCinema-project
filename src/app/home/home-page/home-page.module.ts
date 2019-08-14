import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { BannerModule } from './banner/banner.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { TheatresModule } from './theatres/theatres.module';
import { PromotionsModule } from './promotions/promotions.module';
import { NewsModule } from './news/news.module';


@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    BannerModule,
    ShowtimeModule,
    TheatresModule,
    PromotionsModule,
    NewsModule
  ]
})
export class HomePageModule { }
