import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-showing-item',
  templateUrl: './showing-item.component.html',
  styleUrls: ['./showing-item.component.scss']
})
export class ShowingItemComponent implements OnInit {

  fullStarArr: any = [];
  emptyStarArr: any = [];

  @Input() showingFilm;
  constructor(private router: Router, private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.evaluateStar();
  }

  evaluateStar() {
    for (let star = 0; star < this.showingFilm.DanhGia; star++) {
      this.fullStarArr.push("+1 star");
    }
    for (let star = 0; star < (5 - this.showingFilm.DanhGia); star++) {
      this.emptyStarArr.push("-1 star");
    }
  };

  goToShowingFilmDetailsPage() {
    this.router.navigate(
      ["/home/showing-film-details", this.showingFilm.MaPhim],
      {
        queryParams:
          { film: this.showingFilm.TenPhim }
      }
    ).then(() => { window.scrollTo(0, 0) });
  };

  clickPlayButton() {
    this.sharingDataService.sharingTrailerMethod(this.showingFilm.Trailer);
  }
}