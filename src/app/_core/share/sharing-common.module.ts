import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTrailerComponent } from 'src/app/components/modal-trailer/modal-trailer.component';
import { PipeModule } from '../pipe/pipe.module';
import { ModalMapComponent } from 'src/app/components/modal-map/modal-map.component';

@NgModule({
  declarations: [ModalTrailerComponent, ModalMapComponent],
  exports: [ModalTrailerComponent, ModalMapComponent],
  imports: [
    CommonModule,
    PipeModule
  ]
})
export class SharingCommonModule { }
