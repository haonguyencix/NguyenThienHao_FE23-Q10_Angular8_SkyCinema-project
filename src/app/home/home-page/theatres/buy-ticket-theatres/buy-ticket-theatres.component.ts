import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

export interface theatreArray {
  img: string;
  name: string;
  addr: string;
  map: string;
}

export interface theatresArray {
  logo: string;
  id: string;
  theatreArray: theatreArray[];
}

@Component({
  selector: 'app-buy-ticket-theatres',
  templateUrl: './buy-ticket-theatres.component.html',
  styleUrls: ['./buy-ticket-theatres.component.scss']
})
export class BuyTicketTheatresComponent implements OnInit {

  filmList: Array<object>;

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.getFilmListFromShowtimeComponent();
  }

  theatresArray: theatresArray[] = [
    {
      logo: "assets/img/logoTheatres/bhd-cineplex.png",
      id: '0',
      theatreArray: [
        { img: "assets/img/imgTheatres/bhd/bhd-star-bitexco.jpg", name: "BHD - Bitexco", addr: "L3 - Bitexco Icon 68, 2 Hải Triều, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.514951715635!2d106.70222881480078!3d10.77181589232465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41479dd6e5%3A0x6322994318a1a010!2sBHD+Star+Cineplex!5e0!3m2!1sen!2s!4v1563874329325!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/bhd/bhd-star-vincom-3-2.jpg", name: "BHD - Vincom 3/2", addr: "L5 - Vincom 3/2, 3C Đường 3/2, Q.10", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4605982761527!2d106.67868221480073!3d10.775991392321812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2661403577%3A0x9257956110ab20c!2sBHD+Star+Cineplex!5e0!3m2!1sen!2s!4v1563877041731!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/bhd/bhd-star-vincom-le-van-viet.jpg", name: "BHD - Vincom Lê Văn Việt", addr: "L4 - Vincom Plaza, 50 Lê Văn Việt, Q.9", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38650.11106652194!2d106.8004464256765!3d10.846233838401862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e0c7ef911e915b2!2zQmhkIFN0YXIgTMOqIFbEg24gVmnhu4d0!5e0!3m2!1sen!2s!4v1563876116156!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/bhd/bhd-star-vincom-quang-trung.jpg", name: "BHD - Vincom Quang Trung", addr: "B1 - Vincom QT, 190 Quang Trung, Gò Vấp", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7636442617154!2d106.67016871480119!3d10.829391292285626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290164e0251b%3A0x8efa606916f6f5f0!2sBHD+Star+Cineplex!5e0!3m2!1sen!2s!4v1563877216504!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/bhd/bhd-star-vincom-thao-dien.jpg", name: "BHD - Vincom Thảo Điền", addr: "L5 - Megamall, 159 XL Hà Nội, Q.2", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1176192155335!2d106.73876461480097!3d10.802302692303964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526115cf166fb%3A0x6fd050f19935f977!2sBHD+Cineplex!5e0!3m2!1sen!2s!4v1563877246102!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/bhd/bhd-star-pham-hung.jpg", name: "BHD - Vincom Phạm Hùng", addr: "L4 - Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0103784301164!2d106.67250581480039!3d10.733682592350528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e4cfd0e2185%3A0x9903d89058211ce9!2sBHD+Star+Cineplex!5e0!3m2!1sen!2s!4v1563877172201!5m2!1sen!2s" },
      ]
    },
    {
      logo: "assets/img/logoTheatres/cinestar.png",
      id: '1',
      theatreArray: [
        { img: "assets/img/imgTheatres/cinestar/cinestar-hai-ba-trung.jpg", name: "CNS - Hai Bà Trưng", addr: "271 Nguyễn Trãi, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.376432091022!2d106.6959840148009!3d10.782453992317448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f366a781d37%3A0x1f5346650cf7ceb8!2sCinestar+Hai+B%C3%A0+Tr%C6%B0ng!5e0!3m2!1sen!2s!4v1563877524082!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/cinestar/cinestar-quoc-thanh.jpg", name: "CNS - Quốc Thanh", addr: "135 Hai Bà Trưng, Bến Nghé, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.619742780924!2d106.6853307148006!3d10.76376119233012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f19e63f0a05%3A0xd4c41b784ebcc3e8!2sCinestar+Cinema+Qu%E1%BB%91c+Thanh!5e0!3m2!1sen!2s!4v1563877571952!5m2!1sen!2s" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/galaxy-cinema.png",
      id: '2',
      theatreArray: [
        { img: "assets/img/imgTheatres/galaxy/galaxy-huynh-tan-phat.jpg", name: "GLX - Huỳnh Tấn Phát", addr: "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.2887086342935!2d106.73433831480024!3d10.712200492365133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254514ffbc13%3A0x94f76a7d3585b5ff!2zR2FsYXh5IEh14buzbmggVOG6pW4gUGjDoXQ!5e0!3m2!1sen!2s!4v1563882841935!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/galaxy/galaxy-kinh-duong-vuong.jpg", name: "GLX - Kinh Dương Vương", addr: "718bis Kinh Dương Vương, Q.6", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7927949059276!2d106.62597391480057!3d10.750446592339152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c2ab06fc7b7%3A0x50a4eefae0a2deca!2sGalaxy+Kinh+Duong+Vuong!5e0!3m2!1sen!2s!4v1563882868702!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/galaxy/galaxy-nguyen-du.jpg", name: "GLX - Nguyễn Du", addr: "116 Nguyễn Du, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4963238022556!2d106.69073141480078!3d10.773247092323698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c0189fa2b%3A0x6e75dc36d4dba07d!2sGalaxy+Nguy%E1%BB%85n+Du!5e0!3m2!1sen!2s!4v1563882889794!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/galaxy/galaxy-quang-trung.jpg", name: "GLX - Quang Trung", addr: "L3 - Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.693218271813!2d106.65995971480132!3d10.834772792281958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a786cb6d63%3A0x18bd509e1d3ad74a!2sGalaxy+Quang+Trung!5e0!3m2!1sen!2s!4v1563882909846!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/galaxy/galaxy-tan-binh.jpg", name: "GLX - Tân Bình", addr: "246 Nguyễn Hồng Đào, Tân Bình", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2678642929586!2d106.6384791148008!3d10.790784592311747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ead62de80b7%3A0x5cde8036b5d68e56!2sGalaxy+Tan+Binh+Cinema!5e0!3m2!1sen!2s!4v1563882932556!5m2!1sen!2s" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/lotte-cinema.png",
      id: '3',
      theatreArray: [
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-cantavil.jpg", name: "Lotte - Cantavil", addr: "L7 - Cantavil Premier, Xa Lộ Hà Nội, Q.2", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1289406252695!2d106.74471141480106!3d10.801435192304561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752613499adb6f%3A0x7d3a7531caed099b!2sLotte+Cinema+Cantavil!5e0!3m2!1sen!2s!4v1563882989701!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-cong-hoa.jpg", name: "Lotte - Cộng Hòa", addr: "L4 - Pico Plaza, 20 Cộng Hòa, Tân Bình", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1366386707086!2d106.65086041480086!3d10.800845292304935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752937dfed0c0b%3A0x469b02156ee650cd!2sLotte+Cinema+Cong+Hoa!5e0!3m2!1sen!2s!4v1563883016618!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-diamond.jpg", name: "Lotte - Diamond", addr: "L13 - Diamond Plaza, 34 Lê Duẩn, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3948647197726!2d106.69634236480073!3d10.781038992318372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f37cade9cef%3A0x89a11cd90293c6cc!2sDiamond+Plaza!5e0!3m2!1sen!2s!4v1563883058239!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-go-vap.jpg", name: "Lotte - Gò Vấp", addr: "L3 - Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.649131933545!2d106.66923226480132!3d10.838140242279646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529abdd70ce51%3A0xfddf3fab60a9090d!2sLotte+Cinema+Go+Vap!5e0!3m2!1sen!2s!4v1563883110572!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-nam-sai-gon.jpg", name: "Lotte - Nam Sài Gòn", addr: "L3 - Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9174260278533!2d106.7001729148005!3d10.740847392345708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9f3904fc6d%3A0xf8eedeab7440a13a!2sLotte+Cinema!5e0!3m2!1sen!2s!4v1563883154281!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-nowzone.jpg", name: "Lotte - Nowzone", addr: "L5 - Nowzone, 235 Nguyễn Văn Cừ, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6129344374003!2d106.68016281480072!3d10.764284692329744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f19358a688d%3A0x950e00fb59d5e2db!2sLotte+Cinema+Nowzone!5e0!3m2!1sen!2s!4v1563883081687!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-phu-tho.jpg", name: "Lotte - Phú Thọ", addr: "L4 - Lotte Mart Phú Thọ, Q.11", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6281685470703!2d106.65488461480062!3d10.76311329233054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec4786d93f%3A0x87cc2e05f000f09d!2sLotte+Cinema+Phu+Tho!5e0!3m2!1sen!2s!4v1563883128861!5m2!1sen!2s" },
        { img: "assets/img/imgTheatres/lotte/lotte-cinema-thu-duc.jpg", name: "Lotte - Thủ Đức", addr: "L2 - Joy Citipoint, KCX Linh Trung, Thủ Đức", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15672.881953517664!2d106.76321233199545!3d10.870827627797778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175278015247b3d%3A0x63d00ce9adeb8974!2zTG90dGUgQ2luZW1hIFRo4bunIMSQ4bupYw!5e0!3m2!1sen!2s!4v1563883192673!5m2!1sen!2s" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/mega-gs.png",
      id: '4',
      theatreArray: [
        { img: "assets/img/imgTheatres/mega/mega-gs-cao-thang.jpg", name: "MegaGS - Cao Thắng", addr: "19 Cao Thắng, Q.3", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.552738873114!2d106.68068341480068!3d10.768912092326628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f220559d037%3A0x6d815550960170a1!2sGS+mega+Cinemas!5e0!3m2!1sen!2s!4v1563883251073!5m2!1sen!2s" }
      ]
    },
    {
      logo: "assets/img/logoTheatres/cgv.png",
      id: '5',
      theatreArray: [
        { img: "assets/img/imgTheatres/cgv/cgv-vincom-landmark-81.jpg", name: "CGV - Vincom Landmark 81", addr: "B1 - Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.215629564237!2d106.72005101480086!3d10.79479039230903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529efc333959f%3A0x370ad7e2d5e414cb!2sCGV+Vincom+Center+Landmark+81!5e0!3m2!1sen!2s!4v1563883233858!5m2!1sen!2s" }
      ]
    }
  ];

  isChanged: number = 0;
  isActivated: number = 0;
  isLogo: string = 'assets/img/logoTheatres/bhd-cineplex.png';
  isTheatreInfo: object = { img: "assets/img/imgTheatres/bhd/bhd-star-bitexco.jpg", name: "BHD - Bitexco", addr: "L3 - Bitexco Icon 68, 2 Hải Triều, Q.1", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.514951715635!2d106.70222881480078!3d10.77181589232465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41479dd6e5%3A0x6322994318a1a010!2sBHD+Star+Cineplex!5e0!3m2!1sen!2s!4v1563874329325!5m2!1sen!2s" };

  changeTheatresTab(index: number, logo) {
    this.isActivated = index;
    this.isChanged = index;
    this.isLogo = logo;
  }

  isTheatreActivated: number = 0;

  changeTheatreTab(index: number, theatreInfo) {
    this.isTheatreActivated = index;
    this.isTheatreInfo = theatreInfo;
  }

  getFilmListFromShowtimeComponent() {
    this.sharingDataService.sharingFilmListFromShowtimeComponent.subscribe((data: any) => {
      if (data != null && data != '') {
        this.filmList = data;
      }
    })
  }

  clickMap(map: string) {
    this.sharingDataService.sharingMapMethod(map);
  }

  sharingDataEvent(filmDetail) {
    localStorage.setItem('logo', JSON.stringify(this.isLogo));
    localStorage.setItem('theatre', JSON.stringify(this.isTheatreInfo));
    localStorage.setItem('date', JSON.stringify('Today'));
    localStorage.setItem('detail', JSON.stringify(filmDetail));
  }
}
