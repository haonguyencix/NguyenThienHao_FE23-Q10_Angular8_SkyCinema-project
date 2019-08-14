import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipeModule } from 'src/app/_core/pipe/pipe.module';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent],
  imports: [
    CommonModule,
    PipeModule,
    NgxPaginationModule
  ]
})
export class NewsModule { }
