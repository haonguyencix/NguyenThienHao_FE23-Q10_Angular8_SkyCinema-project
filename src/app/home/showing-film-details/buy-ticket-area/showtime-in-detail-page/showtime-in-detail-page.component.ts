import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

export interface theatreArray {
  img: string;
  name: string;
  addr: string;
}

export interface theatresArray {
  logo: string;
  id: string;
  theatreArray: theatreArray[];
}

@Component({
  selector: 'app-showtime-in-detail-page',
  templateUrl: './showtime-in-detail-page.component.html',
  styleUrls: ['./showtime-in-detail-page.component.scss']
})
export class ShowtimeInDetailPageComponent implements OnInit {

  constructor(private sharingDataService: SharingDataService, private router: Router) { }

  ngOnInit() {
    this.getTimeFromFilmDetailOfBannerInDetailPage();
  }

  isChanged: number = 0;
  isActivated: number = 0;
  isLogo: string = 'assets/images/logoTheatres/bhd-cineplex.png';

  changeTheatreTab(index: number, logo) {
    this.isActivated = index;
    this.isChanged = index;
    this.isLogo = logo;
  }

  theatreDeafaultObj = { img: "assets/images/imgTheatres/bhd/bhd-star-bitexco.jpg", name: "BHD - Bitexco", addr: "L3 - Bitexco Icon 68, 2 Hải Triều, Q.1" }

  theatresArray: theatresArray[] = [
    {
      logo: "assets/images/logoTheatres/bhd-cineplex.png",
      id: '0',
      theatreArray: [
        { img: "assets/images/imgTheatres/bhd/bhd-star-bitexco.jpg", name: "BHD - Bitexco", addr: "L3 - Bitexco Icon 68, 2 Hải Triều, Q.1" },
        { img: "assets/images/imgTheatres/bhd/bhd-star-vincom-3-2.jpg", name: "BHD - Vincom 3/2", addr: "L5 - Vincom 3/2, 3C Đường 3/2, Q.10",  },
        { img: "assets/images/imgTheatres/bhd/bhd-star-vincom-le-van-viet.jpg", name: "BHD - Vincom Lê Văn Việt", addr: "L4 - Vincom Plaza, 50 Lê Văn Việt, Q.9" },
        { img: "assets/images/imgTheatres/bhd/bhd-star-vincom-quang-trung.jpg", name: "BHD - Vincom Quang Trung", addr: "B1 - Vincom QT, 190 Quang Trung, Gò Vấp" },
        { img: "assets/images/imgTheatres/bhd/bhd-star-vincom-thao-dien.jpg", name: "BHD - Vincom Thảo Điền", addr: "L5 - Megamall, 159 XL Hà Nội, Q.2" },
        { img: "assets/images/imgTheatres/bhd/bhd-star-pham-hung.jpg", name: "BHD - Vincom Phạm Hùng", addr: "L4 - Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh" },
      ]
    },
    {
      logo: "assets/images/logoTheatres/cinestar.png",
      id: '1',
      theatreArray: [
        { img: "assets/images/imgTheatres/cinestar/cinestar-hai-ba-trung.jpg", name: "CNS - Hai Bà Trưng", addr: "271 Nguyễn Trãi, Q.1" },
        { img: "assets/images/imgTheatres/cinestar/cinestar-quoc-thanh.jpg", name: "CNS - Quốc Thanh", addr: "135 Hai Bà Trưng, Bến Nghé, Q.1" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/galaxy-cinema.png",
      id: '2',
      theatreArray: [
        { img: "assets/images/imgTheatres/galaxy/galaxy-huynh-tan-phat.jpg", name: "GLX - Huỳnh Tấn Phát", addr: "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7" },
        { img: "assets/images/imgTheatres/galaxy/galaxy-kinh-duong-vuong.jpg", name: "GLX - Kinh Dương Vương", addr: "718bis Kinh Dương Vương, Q.6" },
        { img: "assets/images/imgTheatres/galaxy/galaxy-nguyen-du.jpg", name: "GLX - Nguyễn Du", addr: "116 Nguyễn Du, Q.1" },
        { img: "assets/images/imgTheatres/galaxy/galaxy-quang-trung.jpg", name: "GLX - Quang Trung", addr: "L3 - Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp" },
        { img: "assets/images/imgTheatres/galaxy/galaxy-tan-binh.jpg", name: "GLX - Tân Bình", addr: "246 Nguyễn Hồng Đào, Tân Bình" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/lotte-cinema.png",
      id: '3',
      theatreArray: [
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-cantavil.jpg", name: "Lotte - Cantavil", addr: "L7 - Cantavil Premier, Xa Lộ Hà Nội, Q.2" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-cong-hoa.jpg", name: "Lotte - Cộng Hòa", addr: "L4 - Pico Plaza, 20 Cộng Hòa, Tân Bình" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-diamond.jpg", name: "Lotte - Diamond", addr: "L13 - Diamond Plaza, 34 Lê Duẩn, Q.1" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-go-vap.jpg", name: "Lotte - Gò Vấp", addr: "L3 - Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-nam-sai-gon.jpg", name: "Lotte - Nam Sài Gòn", addr: "L3 - Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-nowzone.jpg", name: "Lotte - Nowzone", addr: "L5 - Nowzone, 235 Nguyễn Văn Cừ, Q.1" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-phu-tho.jpg", name: "Lotte - Phú Thọ", addr: "L4 - Lotte Mart Phú Thọ, Q.11" },
        { img: "assets/images/imgTheatres/lotte/lotte-cinema-thu-duc.jpg", name: "Lotte - Thủ Đức", addr: "L2 - Joy Citipoint, KCX Linh Trung, Thủ Đức" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/mega-gs.png",
      id: '4',
      theatreArray: [
        { img: "assets/images/imgTheatres/mega/mega-gs-cao-thang.jpg", name: "MegaGS - Cao Thắng", addr: "19 Cao Thắng, Q.3" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/cgv.png",
      id: '5',
      theatreArray: [
        { img: "assets/images/imgTheatres/cgv/cgv-vincom-landmark-81.jpg", name: "CGV - Vincom Landmark 81", addr: "B1 - Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM" }
      ]
    }
  ];

  filmDetail: any;
  subFilmDetail = new Subscription;

  getTimeFromFilmDetailOfBannerInDetailPage() {
    this.subFilmDetail = this.sharingDataService.sharingFilmDetailFromBannerInDetailComponent.subscribe((data: any) => {
      if (data != null) {
        this.filmDetail = data;
      }
    });
  }

  activatedDate: number = 0;
  isDate: string = 'Today';
  showtimeId: number;

  getDate(index: number, date: any, id: number) {
    this.activatedDate = index;
    this.isDate = date;
    this.showtimeId = id;
  }

  ngOnDestroy() {
    this.subFilmDetail.unsubscribe();
    console.log("Unsubcribe film detail from showtime in detail page", this.subFilmDetail);
  }

  goToTicketBoxPage(showtimeId, isTheatreInfo) {
    this.router.navigate(["/home/ticket-box", showtimeId]).then(() => { window.scrollTo(0, 0) });
    localStorage.setItem('logo', JSON.stringify(this.isLogo));
    localStorage.setItem('theatre', JSON.stringify(isTheatreInfo));
    localStorage.setItem('date', JSON.stringify(this.isDate));
    localStorage.setItem('detail', JSON.stringify(this.filmDetail));
  }
}
