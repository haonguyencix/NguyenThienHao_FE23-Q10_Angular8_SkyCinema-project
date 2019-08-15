import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service.js';
import swal from '../../../../../../node_modules/sweetalert/dist/sweetalert.min.js';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharingDataService: SharingDataService) { }

  avt: string = '';
  username: string = '';
  likes: number = 0;
  isLiked: boolean = false;
  isLogedIn: boolean;
  isFbLogedIn: boolean;
  starPoint: number = 0;
  str: string;
  filmId: any;
  @Input() revArr;

  ngOnInit() {
    this.getParamsFromURL()
    if (localStorage.getItem('userLogin') !== null) {
      let userLogin = JSON.parse(localStorage.getItem('userLogin'));
      this.avt = userLogin.SSID;
      this.username = userLogin.TaiKhoan;
      this.isLogedIn = userLogin.loginStatus;
      if (userLogin.fbLoginStatus === true) {
        this.isFbLogedIn = userLogin.fbLoginStatus;
      }
    };
    if (localStorage.getItem('usersRev') !== null) {
      let usersRev = JSON.parse(localStorage.getItem('usersRev'));
      this.revArr = usersRev;
    }
  }

  isChecked(event) {
    this.starPoint = parseInt(event.target.value, 10);
  }

  getParamsFromURL() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  post() {
    let uniqueId = () => {
      return this.filmId + '-' + Math.random().toString(36).substr(2, 9);
    };
    let revObj = {
      id: uniqueId(),
      avt: this.avt,
      username: this.username,
      point: this.starPoint,
      post: this.str,
      likes: this.likes,
      isLiked: this.isLiked,
      isFbLogedIn: this.isFbLogedIn
    }
    this.revArr.unshift(revObj);
    localStorage.setItem('usersRev', JSON.stringify(this.revArr));
    this.sharingDataService.sharingReviewMethod(this.revArr);
  }

  goToLoginPage() {
    this.router.navigate(['/home/form-pages/login-page']);
  }

  check(event) {
    for (let item of this.revArr) {
      if (this.revArr.indexOf(item) === parseInt(event.target.name, 10)) {
        if (event.target.checked === true) {
          item.likes++;
          item.isLiked = true;
        } else {
          item.likes--;
          item.isLiked = false;
        }
      }
    }
    localStorage.setItem('usersRev', JSON.stringify(this.revArr));
  }

  delete(id) {
    let index = this.revArr.findIndex(item => {
      return item.id === id;
    })
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your comment has been deleted!", {
          icon: "success",
        }).then(() => {
          this.revArr.splice(index, 1);
          localStorage.setItem('usersRev', JSON.stringify(this.revArr));
        })
      }
    });
  }
}
