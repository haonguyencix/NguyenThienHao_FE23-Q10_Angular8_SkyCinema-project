import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { HomeToolsComponent } from './home-tools/home-tools.component';
import { MaterialModule } from 'src/app/_core/material/material.modules';
import { SharingCommonModule } from 'src/app/_core/share/sharing-common.module';

@NgModule({
  declarations: [BannerComponent, CarouselComponent, CarouselItemComponent, HomeToolsComponent],
  exports: [BannerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharingCommonModule
  ]
})
export class BannerModule { }
