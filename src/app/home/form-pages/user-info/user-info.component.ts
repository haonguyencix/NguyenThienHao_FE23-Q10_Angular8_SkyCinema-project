import { Component, OnInit } from '@angular/core';
import swal from '../../../../../node_modules/sweetalert/dist/sweetalert.min.js';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userLogin: any;
  avtUrl: any = '';

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('userLogin') !== null) {
      let _userLogin = JSON.parse(localStorage.getItem('userLogin'));
      this.userLogin = _userLogin;
    }
  }

  isChanged: string = 'info';
  isActivated: string = 'info';

  changeTab(tabId) {
    this.isChanged = tabId;
    this.isActivated = tabId;
  }

  // Để chơi không xài được @@
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.avtUrl = reader.result;
        console.log(this.avtUrl);
        swal({
          title: "The function of adding or editing avatar hasn't been updated!",
          icon: "error",
          buttons: "OK"
        })
      }
    }
  }
}
