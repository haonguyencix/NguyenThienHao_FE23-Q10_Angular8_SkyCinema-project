import { Component, OnInit, Input } from '@angular/core';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input() item;
  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
  }

  clickPlayButton(){
    this.sharingDataService.sharingTrailerMethod(this.item.trailer);
  }

}
