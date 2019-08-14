import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselBannerArray: any = [
    {img: "./assets/images/bannerCarousel/hoi-15646486141725.jpg", trailer: "https://www.youtube.com/watch?v=vwirX56fhsI"},
    {img: "./assets/images/bannerCarousel/nhat-15633351822616.jpg", trailer: "https://www.youtube.com/watch?v=QBepxTLc0BY"},
    {img: "./assets/images/bannerCarousel/sadako-15638544977053.jpg", trailer: "https://www.youtube.com/watch?v=OPV0rwzb-oo"},
    {img: "./assets/images/bannerCarousel/nhen-15615549214462.jpg", trailer: "https://www.youtube.com/watch?v=Nt9L1jCKGnE"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
