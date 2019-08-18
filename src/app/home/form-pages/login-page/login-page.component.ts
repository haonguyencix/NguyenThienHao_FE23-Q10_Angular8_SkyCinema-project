import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import swal from '../../../../../node_modules/sweetalert/dist/sweetalert.min.js';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/app/_core/share/sharing-data.service.js';
declare var FB: any;
declare const gapi: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private sharingDataService: SharingDataService, private filmManagementService: FilmManagementService, private router: Router) { }
  loginStatus: boolean;
  fbLoginStatus: boolean;

  ngOnInit() {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: '2150030445107812',
        cookie: true,
        xfbml: true,
        version: 'v4.0'
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  login(loginForm) {
    this.loginStatus = false;
    this.fbLoginStatus = false;
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${loginForm.username}&MatKhau=${loginForm.password}`
    this.filmManagementService.POST(uri).subscribe((data: any) => {
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        swal({
          title: "USERNAME OR PASSWORD IS INCORRECT !",
          icon: "warning",
          buttons: "OK"
        })
      }
      else {
        this.loginStatus = true;
        this.fbLoginStatus = false;
        this.sharingDataService.sharingLoginStatusMethod({ ...data, loginStatus: this.loginStatus, fbLoginStatus: this.fbLoginStatus });
        localStorage.setItem("userLogin", JSON.stringify({ ...data, loginStatus: this.loginStatus, fbLoginStatus: this.fbLoginStatus }));
        window.history.back();
        swal({
          title: "LOGGED IN SUCCESSFULLY",
          icon: "success",
          buttons: "OK"
        })
      }
    })
  }

  getAPI(res1) {
    FB.api(`/${res1.authResponse.userID}/`, (res2) => {
      if (res2 && !res2.error) {
        FB.api(`/${res2.id}/picture`, 'GET', { "redirect": "false" }, (res3) => {
          if (res3 && !res3.error) {
            this.sharingDataService.sharingLoginStatusMethod({ ...res1, TaiKhoan: res2.name, SSID: res3.data.url, loginStatus: this.loginStatus, fbLoginStatus: this.fbLoginStatus });
            localStorage.setItem("userLogin", JSON.stringify({ ...res1, TaiKhoan: res2.name, SSID: res3.data.url, loginStatus: this.loginStatus, fbLoginStatus: this.fbLoginStatus }));
          }
        })
      }
    })
  }

  submitLogin() {
    FB.login((res1) => {
      if (res1.authResponse && res1.status === 'connected') {
        this.loginStatus = true;
        this.fbLoginStatus = true;
        window.history.back();
        this.getAPI(res1);
        swal({
          title: "LOGGED IN SUCCESSFULLY",
          icon: "success",
          buttons: "OK"
        })
      }
      else {
        swal({
          title: "LOGIN FAIL!",
          icon: "error",
          buttons: "OK"
        })
      }
    }, { scope: 'email' });
  }

  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: "82391064746-8bgec36pj4gdan4gk3h23o7e1muncmbe.apps.googleusercontent.com",
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        this.loginStatus = true;
        this.fbLoginStatus = false;
        let profile = googleUser.getBasicProfile();
        let name = profile.getName();
        let avtUrl = profile.getImageUrl();
        this.sharingDataService.sharingLoginStatusMethod({ TaiKhoan: name, SSID: avtUrl, loginStatus: this.loginStatus, fbLoginStatus: this.fbLoginStatus });
        localStorage.setItem("userLogin", JSON.stringify({ TaiKhoan: name, SSID: avtUrl, loginStatus: this.loginStatus, fbLoginStatus: this.fbLoginStatus }));
        window.history.back();
        swal({
          title: "LOGGED IN SUCCESSFULLY",
          icon: "success",
          buttons: "OK"
        })
      }, () => {
        swal({
          title: "LOGIN FAIL!",
          icon: "error",
          buttons: "OK"
        })
      });
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
