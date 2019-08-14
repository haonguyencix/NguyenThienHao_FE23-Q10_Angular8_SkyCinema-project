import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import swal from '../../../../../node_modules/sweetalert/dist/sweetalert.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  @ViewChild("registerForm", { static: false }) registerForm: NgForm;
  constructor(private filmManagementService: FilmManagementService, private router: Router) { }

  ngOnInit() {
  }

  @HostListener("window:beforeunload", ["$event"])
  
  canDeactivate() {
    return this.registerForm.submitted || !this.registerForm.dirty;
  }

  register(registerForm) {
    const objUser = {
      TaiKhoan: registerForm.username,
      MatKhau: registerForm.password,
      SSID: './assets/img/user-avt.jpg',
      HoTen: registerForm.fullname,
      Email: registerForm.email,
      SoDT: registerForm.phone,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    };
    const uri = "QuanLyNguoiDung/ThemNguoiDung"
    this.filmManagementService.POST(uri, objUser).subscribe((data: any) => {
      if (data === "Tài khoản đã tồn tại") {
        swal({
          title: "ACCOUNT ALREADY EXISTS!",
          icon: "warning",
          buttons: "OK"
        });
      }
      else {
        swal({
          title: "SIGNED UP SUCCESSFULLY!",
          icon: "success",
          buttons: "You can log in with this account now!"
        }).then(() => {
          this.router.navigate(["/home"])
        });
      }
    })
  }

}
