import { Component, OnInit } from '@angular/core';

export interface promtionArray {
  img: string;
}

export interface theatresArray {
  logo: string;
  id: string;
  promotionArray: promtionArray[];
}

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  carouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: ["<img src='/assets/images/prev.png' class='btn-nav prev-slide'>", "<img src='/assets/images/next.png' class='btn-nav next-slide'>"],
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

  constructor() { }

  ngOnInit() {
  }

  isChanged: number = 0;
  isActivated: number = 0;
  isLogo: string = 'assets/images/logoTheatres/bhd-cineplex.png';

  theatresArray: theatresArray[] = [
    {
      logo: "assets/images/logoTheatres/galaxy-cinema.png",
      id: '0',
      promotionArray: [
        { img: "./assets/images/galaxy/300_1528184704492.jpg" },
        { img: "./assets/images/galaxy/300x450_1560498889489.jpg" },
        { img: "./assets/images/galaxy/300x450_1561601613602.jpg" },
        { img: "./assets/images/galaxy/300x450_1563172691581.jpg" },
        { img: "./assets/images/galaxy/momo450x300_1557482115205.jpg" },
        { img: "./assets/images/galaxy/300x450_1564730295372.jpg" },
        { img: "./assets/images/galaxy/300x450_80.jpg" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/bhd-cineplex.png",
      id: '1',
      promotionArray: [
        { img: "./assets/images/bhd/21397758_10208122504699164_1414073620_n.jpg" },
        { img: "./assets/images/bhd/710x320-BHD-79K.jpg" },
        { img: "./assets/images/bhd/BHD-Star-SuatSom-710x320.jpg" },
        { img: "./assets/images/bhd/BHD-Star-U22-45K-710x320-HUE.jpg" },
        { img: "./assets/images/bhd/BHD-Star_MEMBERDAY_710x320.jpg" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/cinestar.png",
      id: '2',
      promotionArray: [
        { img: "./assets/images/cinestar/c_member--616x325px--01.jpg" },
        { img: "./assets/images/cinestar/c_monday--616x325px--01.jpg" },
        { img: "./assets/images/cinestar/c_refill--616x325px--01.jpg" },
        { img: "./assets/images/cinestar/c_ten--616x325px--01.jpg" },
        { img: "./assets/images/cinestar/c_tuesday--616x325px--01.jpg" },
        { img: "./assets/images/cinestar/tẹt-ga--616x325px--01.jpg" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/lotte-cinema.png",
      id: '3',
      promotionArray: [
        { img: "./assets/images/lotte/1202146af1c14744a7d39e51a8c336ea.jpg"},
        { img: "./assets/images/lotte/35e2e857a7554d2db1ace64df305eb20 (1).jpg"},
        { img: "./assets/images/lotte/3f4da5302c114162a585c6bf9b3c453f.jpg"},
        { img: "./assets/images/lotte/6a4812a5a73949c891ee7161965991ec (1).jpg"},
        { img: "./assets/images/lotte/6cd2c77952f2409e850f494d5c8a094f.jpg"},
        { img: "./assets/images/lotte/6f5afe21b9ff46ffbd5ce2f379bf6cea.jpg"},
        { img: "./assets/images/lotte/ab3561ea38a04a02bda338b67d37d61c.jpg"},
        { img: "./assets/images/lotte/c7a36fa7604644d78f8747441c312ab9.jpg"},
        { img: "./assets/images/lotte/cc2aba4f8f6e416399779450ab19a182 (1).jpg"},
        { img: "./assets/images/lotte/f452bdc6b3194e7dbf4d626903afeb6d.jpg"}
      ]
    },
    {
      logo: "assets/images/logoTheatres/mega-gs.png",
      id: '4',
      promotionArray: [
        { img: "./assets/images/megags/big-members-day-1920x1080-02.png" },
        { img: "./assets/images/megags/mega-day2-800x600.png" },
        { img: "./assets/images/megags/member-card-c.png" },
        { img: "./assets/images/megags/share-800x600.png" },
        { img: "./assets/images/megags/u22-800x600.png" }
      ]
    },
    {
      logo: "assets/images/logoTheatres/cgv.png",
      id: '5',
      promotionArray: [
        { img: "./assets/images/cgv/240x201_27.jpg" },
        { img: "./assets/images/cgv/miloday_supercb_79k_240x201_1.jpg" },
        { img: "./assets/images/cgv/vb_cgv_banner-240x201_2.png" },
        { img: "./assets/images/cgv/vnpay-240x201.jpg" }
      ]
    }
  ];

  changeTheatreTab(index: number, logo) {
    this.isActivated = index;
    this.isChanged = index;
    this.isLogo = logo;
  }

}
