import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  trailerInModal: string = '';
  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.sharingDataService.sharingTrailerFromShowingItemComponent.subscribe((data: any) => {
      if (data != '') {
        this.trailerInModal = data.replace('watch?v=', 'embed/');
        console.log(this.trailerInModal);
      }
    })
  }

  closeTrailer() {
    this.trailerInModal = '';
  }
}