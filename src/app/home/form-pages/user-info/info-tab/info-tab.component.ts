import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import swal from '../../../../../../node_modules/sweetalert/dist/sweetalert.min.js';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})
export class InfoTabComponent implements OnInit {

  userLogin: any;

  constructor(private filmManagementService: FilmManagementService) { }

  ngOnInit() {
    if (localStorage.getItem('userLogin') !== null) {
      let _userLogin = JSON.parse(localStorage.getItem('userLogin'));
      this.userLogin = _userLogin;
    }
  }

  info(infoForm) {
    let objUser = {
      TaiKhoan: this.userLogin.TaiKhoan,
      MatKhau: this.userLogin.MatKhau,
      SSID: "./assets/img/user-avt10.jpg",
      HoTen: infoForm.fullname,
      Email: infoForm.email,
      SoDT: infoForm.phone,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    };
    console.log(objUser);
    const uri = "QuanLyNguoiDung/CapNhatThongTin"
    this.filmManagementService.POST(uri, objUser).subscribe((data: any) => {
      localStorage.setItem("userLogin", JSON.stringify(data));
      swal({
        title: "YOUR INFORMATION WAS UPDATED!",
        icon: "success",
        buttons: "OK"
      }).then(() => {
          location.reload();
      })
    })
  }

}
