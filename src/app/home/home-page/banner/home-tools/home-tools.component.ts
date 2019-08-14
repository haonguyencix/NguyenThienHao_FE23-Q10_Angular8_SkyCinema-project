import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';
import { Subscription } from 'rxjs';

export interface Theatre {
  TheatreId: string;
  name: string;
  addr: string;
}

export interface TheatreGroup {
  disabled?: boolean;
  logo: string;
  TheatreGroupName: string;
  theatreArray: Theatre[];
}

@Component({
  selector: 'app-home-tools',
  templateUrl: './home-tools.component.html',
  styleUrls: ['./home-tools.component.scss']
})
export class HomeToolsComponent implements OnInit {

  theatreGroups: TheatreGroup[] = [
    {
      logo: "./assets/images/logoTheatres/bhd-cineplex.png",
      TheatreGroupName: "BHD Cineplex",
      theatreArray: [
        { TheatreId: "A1", name: "BHD Bitexco", addr: "L3 - Bitexco Icon 68, 2 Hải Triều, Q.1" },
        { TheatreId: "A2", name: "BHD Vincom 3/2", addr: "L5 - Vincom 3/2, 3C Đường 3/2, Q.10" },
        { TheatreId: "A3", name: "BHD Vincom Lê Văn Việt", addr: "L4 - Vincom Plaza, 50 Lê Văn Việt, Q.9" },
        { TheatreId: "A4", name: "BHD Vincom Quang Trung", addr: "B1 - Vincom QT, 190 Quang Trung, Gò Vấp" },
        { TheatreId: "A5", name: "BHD Vincom Thảo Điền", addr: "L5 - Megamall, 159 XL Hà Nội, Q.2" },
        { TheatreId: "A6", name: "BHD Vincom Phạm Hùng", addr: "L4 - Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh" },
      ]
    },
    {
      logo: "./assets/images/logoTheatres/cinestar.png",
      TheatreGroupName: "Cinestar",
      theatreArray: [
        { TheatreId: "B1", name: "Cinestar Hai Bà Trưng", addr: "135 Hai Bà Trưng, Bến Nghé, Q.1" },
        { TheatreId: "B2", name: "Cinestar Quốc Thanh", addr: "271 Nguyễn Trãi, Q.1" }
      ]
    },
    {
      logo: "./assets/images/logoTheatres/galaxy-cinema.png",
      TheatreGroupName: "Galaxy Cinema",
      theatreArray: [
        { TheatreId: "C1", name: "Galaxy Huỳnh Tấn Phát", addr: "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7" },
        { TheatreId: "C2", name: "Galaxy Kinh Dương Vương", addr: "718bis Kinh Dương Vương, Q.6" },
        { TheatreId: "C3", name: "Galaxy Nguyễn Du", addr: "116 Nguyễn Du, Q.1" },
        { TheatreId: "C4", name: "Galaxy Quang Trung", addr: "L3 - Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp" },
        { TheatreId: "C5", name: "Galaxy Tân Bình", addr: "246 Nguyễn Hồng Đào, Tân Bình" }
      ]
    },
    {
      logo: "./assets/images/logoTheatres/lotte-cinema.png",
      TheatreGroupName: "Lotte Cinema",
      theatreArray: [
        { TheatreId: "D1", name: "Lotte Cantavil", addr: "L7 - Cantavil Premier, Xa Lộ Hà Nội, Q.2" },
        { TheatreId: "D2", name: "Lotte Cộng Hòa", addr: "L4 - Pico Plaza, 20 Cộng Hòa, Tân Bình" },
        { TheatreId: "D3", name: "Lotte Diamond", addr: "L13 - Diamond Plaza, 34 Lê Duẩn, Q.1" },
        { TheatreId: "D4", name: "Lotte Gò Vấp", addr: "L3 - Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp" },
        { TheatreId: "D5", name: "Lotte Nam Sài Gòn", addr: "L3 - Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7" },
        { TheatreId: "D6", name: "Lotte Nowzone", addr: "L5 - Nowzone, 235 Nguyễn Văn Cừ, Q.1" },
        { TheatreId: "D7", name: "Lotte Phú Thọ", addr: "L4 - Lotte Mart Phú Thọ, Q.11" },
        { TheatreId: "D8", name: "Lotte Thủ Đức", addr: "L2 - Joy Citipoint, KCX Linh Trung, Thủ Đức" },
      ]
    },
    {
      logo: "./assets/images/logoTheatres/mega-gs.png",
      TheatreGroupName: "Mega GS",
      theatreArray: [
        { TheatreId: "E1", name: "Mega GS Cao Thắng", addr: "19 Cao Thắng, Q.3" }
      ]
    },
    {
      logo: "./assets/images/logoTheatres/cgv.png",
      TheatreGroupName: "CGV",
      theatreArray: [
        { TheatreId: "F1", name: "CGV Vincom Landmark 81", addr: "B1 - Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM" },
      ]
    }
  ];

  movies: any;
  movie: any;
  subFilmList = new Subscription;
  subFilmDetail = new Subscription;
  MaPhim: any;
  datesArray: any = [];
  selectMovieStatus: boolean = false;
  selectTheatreStatus: boolean = false;
  selectDateStatus: boolean = false;
  isLogo: string;
  isTheatreInfo: object;
  isDate: string;
  showtimeId: number;

  constructor(private filmManagementService: FilmManagementService, private router: Router, private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.getFilmListFromShowtimeComponent();
  }

  getFilmListFromShowtimeComponent() {
    this.subFilmList = this.sharingDataService.sharingFilmListFromShowtimeComponent.subscribe((data: any) => {
      if (data != null) {
        this.movies = data;
      }
    })
  }

  getDateFromAPI() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.MaPhim}`
    this.subFilmDetail = this.filmManagementService.GET(uri).subscribe((data: any) => {
      if (data != null) {
        this.movie = data;
      }
    })
  }

  movieIsSelected(filmId) {
    this.MaPhim = filmId;
    this.selectMovieStatus = true;
    this.getDateFromAPI();
  }

  theatreIsSelected(logo, theatreInfo) {
    this.selectTheatreStatus = true;
    this.isLogo = logo;
    this.isTheatreInfo = theatreInfo;
  }

  dateIsSelected(time, showtimeId) {
    this.selectDateStatus = true;
    this.isDate = time;
    this.showtimeId = showtimeId;
  }

  goToTicketBoxPage(showtimeId) {
    this.router.navigate(["/home/ticket-box", showtimeId]).then(() => { window.scrollTo(0, 0) });;
    localStorage.setItem('logo', JSON.stringify(this.isLogo));
    localStorage.setItem('theatre', JSON.stringify(this.isTheatreInfo));
    localStorage.setItem('date', JSON.stringify(this.isDate));
    localStorage.setItem('detail', JSON.stringify(this.movie));
  }

  ngOnDestroy() {
    this.subFilmList.unsubscribe();
    this.subFilmDetail.unsubscribe();
  }
}