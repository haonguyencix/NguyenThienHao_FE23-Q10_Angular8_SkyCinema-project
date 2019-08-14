import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.scss']
})
export class ModalMapComponent implements OnInit {

  mapInModal: string = '';
  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.sharingDataService.sharingMapFromBuyTicketTheatresComponent.subscribe((data: any)=>{
      if (data != ''){
        this.mapInModal = data;
      }
    });
  }

  closeMap() {
    this.mapInModal = '';
  }

}
