import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [PromotionsComponent],
  exports: [PromotionsComponent],
  imports: [
    CommonModule,
    OwlModule
  ]
})
export class PromotionsModule { }
