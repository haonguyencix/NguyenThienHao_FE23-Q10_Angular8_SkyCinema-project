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
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
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

  constructor() { }

  ngOnInit() {
  }

  isChanged: number = 0;
  isActivated: number = 0;
  isLogo: string = 'assets/img/logoTheatres/bhd-cineplex.png';

  theatresArray: theatresArray[] = [
    {
      logo: "assets/img/logoTheatres/galaxy-cinema.png",
      id: '0',
      promotionArray: [
        { img: "/assets/img/galaxy/300_1528184704492.jpg" },
        { img: "/assets/img/galaxy/300x450_1560498889489.jpg" },
        { img: "/assets/img/galaxy/300x450_1561601613602.jpg" },
        { img: "/assets/img/galaxy/300x450_1563172691581.jpg" },
        { img: "/assets/img/galaxy/momo450x300_1557482115205.jpg" },
        { img: "/assets/img/galaxy/300x450_1564730295372.jpg" },
        { img: "/assets/img/galaxy/300x450_80.jpg" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/bhd-cineplex.png",
      id: '1',
      promotionArray: [
        { img: "/assets/img/bhd/21397758_10208122504699164_1414073620_n.jpg" },
        { img: "/assets/img/bhd/710x320-BHD-79K.jpg" },
        { img: "/assets/img/bhd/BHD-Star-SuatSom-710x320.jpg" },
        { img: "/assets/img/bhd/BHD-Star-U22-45K-710x320-HUE.jpg" },
        { img: "/assets/img/bhd/BHD-Star_MEMBERDAY_710x320.jpg" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/cinestar.png",
      id: '2',
      promotionArray: [
        { img: "/assets/img/cinestar/c_member--616x325px--01.jpg" },
        { img: "/assets/img/cinestar/c_monday--616x325px--01.jpg" },
        { img: "/assets/img/cinestar/c_refill--616x325px--01.jpg" },
        { img: "/assets/img/cinestar/c_ten--616x325px--01.jpg" },
        { img: "/assets/img/cinestar/c_tuesday--616x325px--01.jpg" },
        { img: "/assets/img/cinestar/tẹt-ga--616x325px--01.jpg" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/lotte-cinema.png",
      id: '3',
      promotionArray: [
        { img: "/assets/img/lotte/1202146af1c14744a7d39e51a8c336ea.jpg"},
        { img: "/assets/img/lotte/35e2e857a7554d2db1ace64df305eb20 (1).jpg"},
        { img: "/assets/img/lotte/3f4da5302c114162a585c6bf9b3c453f.jpg"},
        { img: "/assets/img/lotte/6a4812a5a73949c891ee7161965991ec (1).jpg"},
        { img: "/assets/img/lotte/6cd2c77952f2409e850f494d5c8a094f.jpg"},
        { img: "/assets/img/lotte/6f5afe21b9ff46ffbd5ce2f379bf6cea.jpg"},
        { img: "/assets/img/lotte/ab3561ea38a04a02bda338b67d37d61c.jpg"},
        { img: "/assets/img/lotte/c7a36fa7604644d78f8747441c312ab9.jpg"},
        { img: "/assets/img/lotte/cc2aba4f8f6e416399779450ab19a182 (1).jpg"},
        { img: "/assets/img/lotte/f452bdc6b3194e7dbf4d626903afeb6d.jpg"}
      ]
    },
    {
      logo: "assets/img/logoTheatres/mega-gs.png",
      id: '4',
      promotionArray: [
        { img: "/assets/img/megags/big-members-day-1920x1080-02.png" },
        { img: "/assets/img/megags/mega-day2-800x600.png" },
        { img: "/assets/img/megags/member-card-c.png" },
        { img: "/assets/img/megags/share-800x600.png" },
        { img: "/assets/img/megags/u22-800x600.png" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/cgv.png",
      id: '5',
      promotionArray: [
        { img: "/assets/img/cgv/240x201_27.jpg" },
        { img: "/assets/img/cgv/miloday_supercb_79k_240x201_1.jpg" },
        { img: "/assets/img/cgv/vb_cgv_banner-240x201_2.png" },
        { img: "/assets/img/cgv/vnpay-240x201.jpg" }
      ]
    }
  ];

  changeTheatreTab(index: number, logo) {
    this.isActivated = index;
    this.isChanged = index;
    this.isLogo = logo;
  }

}
