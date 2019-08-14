import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimeComponent } from './showtime.component';
import { ShowingItemComponent } from './showing-item/showing-item.component';
import { CommingItemComponent } from './comming-item/comming-item.component';
import { OwlModule} from 'ngx-owl-carousel';
import { MaterialModule } from 'src/app/_core/material/material.modules';
import { PipeModule } from 'src/app/_core/pipe/pipe.module';
import { SharingCommonModule } from 'src/app/_core/share/sharing-common.module';

@NgModule({
  declarations: [ShowtimeComponent, ShowingItemComponent, CommingItemComponent],
  exports: [ShowtimeComponent],
  imports: [
    CommonModule,
    OwlModule,
    MaterialModule,
    PipeModule,
    SharingCommonModule
  ]
})
export class ShowtimeModule { }
