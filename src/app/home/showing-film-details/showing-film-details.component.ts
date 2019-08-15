import { Component, OnInit } from '@angular/core';
// import { SharingDataService } from 'src/app/_core/share/sharing-data.service';

@Component({
  selector: 'app-showing-film-details',
  templateUrl: './showing-film-details.component.html',
  styleUrls: ['./showing-film-details.component.scss']
})
export class ShowingFilmDetailsComponent implements OnInit {

  revArr: any = [
    {
      id: "39-hdcfwed123dfg",
      avt: "./assets/img/user-avt1.jpg",
      username: "Dinh Phuc Nguyen",
      point: 9,
      post: "Phim dễ thương thật, mình dẫn con đi xem con rất thích",
      likes: 8,
      isLiked: false,
      isFbLogedIn: true
    },
    {
      id: "39-adsf34rtdr4",
      avt: "./assets/img/user-avt6.jpg",
      username: "Minh Minh",
      point: 10,
      post: "Phim này dễ thương ghê, lớn rồi vẫn rất thích xem",
      likes: 32,
      isLiked: false,
      isFbLogedIn: false
    },
    {
      id: "49-sdfyu5666ygff",
      avt: "./assets/img/user-avt5.jpg",
      username: "Hao Nhat Ho",
      point: 6,
      post: "Kịch bản không hấp dẫn mình lắm. Mình thấy hơi tiếc tiền. Để tiền đi uống The coffee house còn ngon hơn",
      likes: 11,
      isLiked: false,
      isFbLogedIn: true
    },
    {
      id: "39-jghgfg55fdf",
      avt: "./assets/img/user-avt5.jpg",
      username: "Hao Nhat Ho",
      point: 8,
      post: "Mình dẫn người yêu đi coi, người yêu mình thích mê",
      likes: 29,
      isLiked: false,
      isFbLogedIn: true
    },
    {
      id: "69-jghs5d2r5fd",
      avt: "./assets/img/user-avt5.jpg",
      username: "Hao Nhat Ho",
      point: 10,
      post: "Điểm 10 cho độ chất chơi. Sự đầu tư về hình ảnh và kĩ xảo quá đỉnh",
      likes: 29,
      isLiked: false,
      isFbLogedIn: true
    },
    {
      id: "69-gjjtg3454dber",
      avt: "./assets/img/user-avt2.jpg",
      username: "Mẫn Nguyễn",
      point: 10,
      post: "xuất sắc, kịch tính và không kém phần hài hước, muốn đi xem lại lần 2",
      likes: 4,
      isLiked: false,
      isFbLogedIn: true
    },
    {
      id: "39-dsfhgrh54fsd",
      avt: "./assets/img/user-avt3.jpg",
      username: "Nguyen Trung Hieu",
      point: 8,
      post: "Phim hay và xúc động. Thích hợp cho trẻ con xem hè.",
      likes: 2,
      isLiked: false,
      isFbLogedIn: false
    },
    {
      id: "69-hjrty34665",
      avt: "./assets/img/user-avt4.jpg",
      username: "Xiao Xiang",
      point: 9,
      post: "Phim rất hay, rất đáng xem!",
      likes: 9,
      isLiked: false,
      isFbLogedIn: false
    },
    {
      id: "49-dfe52ijtyahew",
      avt: "./assets/img/user-avt8.jpg",
      username: "Vũ Nguyễn Anh Huy",
      point: 9,
      post: "Xem mà mê, tuyệt vời ông mặt zời !!",
      likes: 2,
      isLiked: false,
      isFbLogedIn: false
    },
    {
      id: "49-sdght68tyjsd",
      avt: "./assets/img/user-avt7.jpg",
      username: "Đặng Trung Hiếu",
      point: 10,
      post: "Phim hay lắm luôn, muốn xem lại lần 2",
      likes: 6,
      isLiked: false,
      isFbLogedIn: true
    },
    {
      id: "39-dfes667ijty",
      avt: "./assets/img/user-avt8.jpg",
      username: "Vũ Nguyễn Anh Huy",
      point: 8,
      post: "Phim khá hay",
      likes: 1,
      isLiked: false,
      isFbLogedIn: false
    },
    {
      id: "69-sdfg45756iuyjh",
      avt: "./assets/img/user-avt9.jpg",
      username: "Nguyễn Tiến Minh Tuấn",
      point: 10,
      post: "Cực phẩm luôn",
      likes: 16,
      isLiked: false,
      isFbLogedIn: false
    },
    {
      id: "49-sdf34yu87yu4f",
      avt: "./assets/img/user-avt3.jpg",
      username: "Nguyen Trung Hieu",
      point: 6,
      post: "Riêng mình thấy phim kịch bản hơi cũ, không đặc sắc lắm",
      likes: 3,
      isLiked: false,
      isFbLogedIn: false
    }
  ]
  constructor() {}

  ngOnInit() {
  }
}