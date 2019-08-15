import { Component, OnInit, Input } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-banner-in-detail-page',
  templateUrl: './banner-in-detail-page.component.html',
  styleUrls: ['./banner-in-detail-page.component.scss']
})
export class BannerInDetailPageComponent implements OnInit {

  filmId: any;
  showingFilm: any;
  subFilmDetail = new Subscription;
  fullStarArr: any = [];
  emptyStarArr: any = [];
  averagePoint: number;
  isEvaluated: number = 0;
  circle: string;
  showCircle: boolean = true;
  @Input() revArr;
  constructor(private filmManagementService: FilmManagementService, private activatedRoute: ActivatedRoute, private sharingDataService: SharingDataService) { }

  ngOnInit() {
    let sum: number = 0;
    let count: number = 0;
    this.getParamsFromURL();
    this.getShowingFilmDetailsFromAPI();
    this.sharingDataService.sharingReviewFromReviewComponent.subscribe((data: any) => {
      if (typeof data !== 'object') {
        this.revArr = data;
        console.log(this.revArr);
      }
    })
    if (localStorage.getItem('usersRev') !== null) {
      let usersRev = JSON.parse(localStorage.getItem('usersRev'));
      this.revArr = usersRev;
    }
    this.revArr.map(item => {
      if (item.id.split('-')[0] === this.filmId) {
        sum = sum + item.point;
        count++;
      }
    })
    this.isEvaluated = count;
    this.averagePoint = sum / (count);
    this.circle = `rotate(-${360 - (((this.averagePoint) / 10) * 360)}deg)`;
    if (this.averagePoint >= 5) {
      this.showCircle = true;
    } else {
      this.showCircle = false;
    }
  }

  getParamsFromURL() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getShowingFilmDetailsFromAPI() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.filmId}`
    this.subFilmDetail = this.filmManagementService.GET(uri).subscribe((data: any) => {
      this.showingFilm = data;
      this.sharingDataService.sharingFilmDetailMethod(data);
      for (let star = 0; star < this.showingFilm.DanhGia; star++) {
        this.fullStarArr.push("+1 star");
      }
      for (let star = 0; star < (5 - this.showingFilm.DanhGia); star++) {
        this.emptyStarArr.push("-1 star");
      }
    })
  }

  srcollToBuyTicketArea() {
    window.scrollTo({
      top: 450,
      behavior: 'smooth'
    })
  }

  clickPlayButton() {
    this.sharingDataService.sharingTrailerMethod(this.showingFilm.Trailer);
  }

  ngOnDestroy() {
    this.subFilmDetail.unsubscribe();
    console.log("Unsubcribe film detail from banner in detail page", this.subFilmDetail);
  }
}
