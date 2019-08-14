import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service.js';
import swal from '../../../../../../node_modules/sweetalert/dist/sweetalert.min.js'

@Component({
  selector: 'app-change-pass-tab',
  templateUrl: './change-pass-tab.component.html',
  styleUrls: ['./change-pass-tab.component.scss']
})
export class ChangePassTabComponent implements OnInit {

  constructor(private filmManagementService: FilmManagementService) { }

  userLogin: any;

  ngOnInit() {
    if (localStorage.getItem('userLogin') !== null) {
      let _userLogin = JSON.parse(localStorage.getItem('userLogin'));
      this.userLogin = _userLogin;
    }
  }

  changePass(changePassForm) {
    let objUser = {
      TaiKhoan: this.userLogin.TaiKhoan,
      MatKhau: changePassForm.confirmpass,
      HoTen: this.userLogin.HoTen,
      Email: this.userLogin.Email,
      SoDT: this.userLogin.SoDT,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    };
    const uri = "QuanLyNguoiDung/CapNhatThongTin";
    if (changePassForm.currentpass === this.userLogin.MatKhau) {
      if(changePassForm.confirmpass === changePassForm.newpass) {
        this.filmManagementService.POST(uri, objUser).subscribe((data: any) => {
          localStorage.setItem("userLogin", JSON.stringify(data));
          swal({
            title: "YOUR PASSWORD HAVE CHANGED SUCCESSFULLY!",
            icon: "success",
            buttons: "OK"
          }).then(() => {
            location.reload();
          })
        })
      } else {
        swal({
          title: "BE CAREFUL WHEN YOU ENTER YOUR CONFIRMATION PASSWORD!",
          icon: "warning",
          buttons: "OK"
        })
      }
    } else {
      swal({
        title: "CURRENT PASSWORD IS NOT CORRECT!",
        icon: "error",
        buttons: "OK"
      })
    }
  }
}
