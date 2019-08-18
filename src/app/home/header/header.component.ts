import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from '../../../../node_modules/sweetalert/dist/sweetalert.min.js';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service.js';
declare var FB: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private sharingDataService: SharingDataService) { }

  isUsername: string = '';
  avt: string = '';
  isLogedIn: boolean;
  isFbLogedIn: boolean;
  isGgLogedIn: boolean;
  revArr: any;

  showBTT: boolean = false;
  showSup: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('userLogin') !== null) {
      let userLogin = JSON.parse(localStorage.getItem('userLogin'));
      this.isUsername = userLogin.TaiKhoan;
      this.avt = userLogin.SSID;
      this.isLogedIn = userLogin.loginStatus;
      this.isFbLogedIn = userLogin.fbLoginStatus;
      this.isGgLogedIn = userLogin.ggLoginStatus;
    };
    this.sharingDataService.sharingLoginStatusFromLoginPage.subscribe((data: any) => {
      if (data.loginStatus === true) {
        this.isUsername = data.TaiKhoan;
        this.avt = data.SSID;
        this.isLogedIn = data.loginStatus;
        this.isFbLogedIn = data.fbLoginStatus;
        this.isGgLogedIn = data.ggLoginStatus;
      }
    });
    if (localStorage.getItem('usersRev') !== null) {
      let usersRev = JSON.parse(localStorage.getItem('usersRev'));
      this.revArr = usersRev;
    }
    window.onscroll = () => {
      this.headerScrolled();
      this.progressBar();
      this.showtimeScrolled();
      this.theatresScrolled();
      this.newsScrolled();
      this.promotionsScrolled();
      this.showBackToTop();
      this.showSupport();
    };
  }

  progressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  }

  headerScrolled() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("header").style.padding = "0 10px";
      document.getElementById("header").style.transition = "all .2s ease-in-out";
      document.getElementById("logo").style.width = "76px";
      document.getElementById("logo").style.height = "60px";
      document.getElementById("logo").style.transition = "all .2s ease-in-out";
      document.getElementById("logo-text").style.fontSize = "33.6px";
      document.getElementById("logo-text").style.transition = "all .2s ease-in-out";
    } else {
      document.getElementById("header").style.padding = "2px 10px";
      document.getElementById("logo").style.width = "95px";
      document.getElementById("logo").style.height = "75px";
      document.getElementById("logo-text").style.fontSize = "42px";
    }
  }

  showBackToTop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      this.showBTT = true;
    } else {
      this.showBTT = false;
    }
  }

  showSupport() {
    if ((document.body.scrollTop > 500 && document.body.scrollTop < 2300) || (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 2300)) {
      this.showSup = true;
    } else {
      this.showSup = false;
    }
  }

  scrollToShowtime() {
    this.router.navigate(["/home"]).then(() => {
      window.scrollTo({
        top: 710,
        behavior: 'smooth'
      })
    })
  }

  showtimeScrolled() {
    if ((document.body.scrollTop > 610 && document.body.scrollTop < 1200) || (document.documentElement.scrollTop > 610 && document.documentElement.scrollTop < 1200)) {
      document.getElementById("showtime").style.transform = "scale(1.15)";
      document.getElementById("showtime").style.color = "#0de8e5";
    } else {
      document.getElementById("showtime").style.transform = "scale(1)";
      document.getElementById("showtime").style.color = "gainsboro";
    }
  }

  scrollToTheatres() {
    this.router.navigate(["/home"]).then(() => {
      window.scrollTo({
        top: 1340,
        behavior: 'smooth'
      })
    })
  }

  theatresScrolled() {
    if ((document.body.scrollTop > 1240 && document.body.scrollTop < 1800) || (document.documentElement.scrollTop > 1240 && document.documentElement.scrollTop < 1800)) {
      document.getElementById("theatres").style.transform = "scale(1.15)";
      document.getElementById("theatres").style.color = "#0de8e5";
    } else {
      document.getElementById("theatres").style.transform = "scale(1)";
      document.getElementById("theatres").style.color = "gainsboro";
    }
  }

  scrollToNews() {
    this.router.navigate(["/home"]).then(() => {
      window.scrollTo({
        top: 2050,
        behavior: 'smooth'
      })
    })
  }

  newsScrolled() {
    if ((document.body.scrollTop > 1930 && document.body.scrollTop < 2520) || (document.documentElement.scrollTop > 1930 && document.documentElement.scrollTop < 2520)) {
      document.getElementById("news").style.transform = "scale(1.15)";
      document.getElementById("news").style.color = "#0de8e5";
    } else {
      document.getElementById("news").style.transform = "scale(1)";
      document.getElementById("news").style.color = "gainsboro";
    }
  }

  scrollToPromotions() {
    this.router.navigate(["/home"]).then(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight - document.documentElement.clientHeight,
        behavior: 'smooth'
      })
    })
  }

  promotionsScrolled() {
    if ((document.body.scrollTop > 2550 && document.body.scrollTop < (document.documentElement.scrollHeight - document.documentElement.clientHeight)) || (document.documentElement.scrollTop > 2550 && document.documentElement.scrollTop < (document.documentElement.scrollHeight - document.documentElement.clientHeight))) {
      document.getElementById("promotions").style.transform = "scale(1.15)";
      document.getElementById("promotions").style.color = "#0de8e5";
    } else {
      document.getElementById("promotions").style.transform = "scale(1)";
      document.getElementById("promotions").style.color = "gainsboro";
    }
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  logOut() {
    swal({
      title: "DO YOU WANT TO LOG OUT ?",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willLogOut) => {
      if (willLogOut) {
        window.onload = () => {
          FB.init({ apiKey: 'b65c1efa72f570xxxxxxxxxxxxxxxxx' });
          FB.getLoginStatus(function handleSessionResponse(response) {
            if (!response.session) {
              console.log(response);
              return;
            }
            FB.logout(handleSessionResponse);
          });
        }
        localStorage.removeItem("userLogin");
        localStorage.removeItem("logo");
        localStorage.removeItem("date");
        localStorage.removeItem("theatre");
        localStorage.removeItem("detail");
        this.isLogedIn = false;
        this.isFbLogedIn = false;
        this.isGgLogedIn = false;
        this.revArr.map(item => {
          item.isLiked = false;
        })
        localStorage.setItem('usersRev', JSON.stringify(this.revArr));
        this.router.navigate(["/home"]);
        swal("LOGGED OUT!", {
          icon: "success",
          buttons: 'OK'
        })
      }
    });
  }
}
