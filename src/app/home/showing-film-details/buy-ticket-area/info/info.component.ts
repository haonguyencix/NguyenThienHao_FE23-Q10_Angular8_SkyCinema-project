import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public trailerInDetailPage: string;

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.getTimeFromFilmDetailOfBannerInDetailPage()
  }

  filmDetail: any;
  subFilmDetail = new Subscription;
  fullStarArr: any = [];
  emptyStarArr: any = [];

  getTimeFromFilmDetailOfBannerInDetailPage() {
    this.subFilmDetail = this.sharingDataService.sharingFilmDetailFromBannerInDetailComponent.subscribe((data: any) => {
      if (data != null && data != '') {
        this.filmDetail = data;
        this.trailerInDetailPage = this.filmDetail.Trailer.replace('watch?v=', 'embed/');
      }
      for (let star = 0; star < this.filmDetail.DanhGia; star++) {
        this.fullStarArr.push("+1 star");
      }
      for (let star = 0; star < (5 - this.filmDetail.DanhGia); star++) {
        this.emptyStarArr.push("-1 star");
      }
    });
  }

  ngOnDestroy() {
    this.subFilmDetail.unsubscribe();
  }

}
