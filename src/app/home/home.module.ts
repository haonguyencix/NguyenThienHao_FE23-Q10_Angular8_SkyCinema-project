import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.modules'
import { HomePageModule } from './home-page/home-page.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowingFilmDetailsModule } from './showing-film-details/showing-film-details.module'
import { MaterialModule } from '../_core/material/material.modules';
import { PipeModule } from '../_core/pipe/pipe.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomePageModule,
    HomeRoutingModule,
    ShowingFilmDetailsModule,
    MaterialModule,
    PipeModule
  ]
})
export class HomeModule { }
