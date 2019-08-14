import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import { Subscription } from 'rxjs';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss']
})
export class ShowtimeComponent implements OnInit{

  showingFilmStatus: boolean = true;

  carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: ["<img src='/assets/img/prev.png' class='btn-nav prev-slide'>", "<img src='/assets/img/next.png' class='btn-nav next-slide'>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1090: {
        items: 3
      },
      1324: {
        items: 4
      }
    }
  }

  showingFilmList: any;
  commingFilmList: any = [
    { filmImg: "/assets/img/commingSoon/lion-king.jpg", filmName: "Lion King", released: "12/07/2019" },
    { filmImg: "/assets/img/commingSoon/onward.jpg", filmName: "Onward", released: "19/07/2019" },
    { filmImg: "/assets/img/commingSoon/fantastic-beasts-3.jpg", filmName: "Fantastic Beasts 3", released: "26/07/2019" },
    { filmImg: "/assets/img/commingSoon/the-angry-birds-movie-2.jpg", filmName: "The Angry Birds Movie 2", released: "02/08/2019" },
    { filmImg: "/assets/img/commingSoon/the-flash.jpg", filmName: "The Flash", released: "09/08/2019" },
    { filmImg: "/assets/img/commingSoon/weathering-with-you.jpg", filmName: "Weathering With You", released: "16/08/2019" },
    { filmImg: "/assets/img/commingSoon/sonic-hedgehog.gif", filmName: "Sonic: The Hedgehog", released: "23/08/2019" },
    { filmImg: "/assets/img/commingSoon/dino-king-journey-to-fire-mountain.jpg", filmName: "Dino King Journey to Fire Mountain", released: "30/08/2019" }
  ];

  subFilmList = new Subscription;

  constructor(private filmManagementService: FilmManagementService, private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.getFilmListFromAPI();
  }

  appearShowingFilm() {
    this.showingFilmStatus = true;
  }

  appearCommingSoonFilm() {
    this.showingFilmStatus = false;
  }

  getFilmListFromAPI() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    this.subFilmList = this.filmManagementService.GET(uri).subscribe((data: any) => {
      this.showingFilmList = data;
      this.sharingDataService.sharingFilmListMethod(data);
    })
  }

  ngOnDestroy() {
    this.subFilmList.unsubscribe();
  }
}