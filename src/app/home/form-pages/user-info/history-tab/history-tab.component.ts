import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.scss']
})
export class HistoryTabComponent implements OnInit {

  pageIndex: number = 1;
  historyArray: Array<object> = [];

  constructor(private filmManagementService: FilmManagementService) { }

  ngOnInit() {
    if (localStorage.getItem('userLogin') !== null) {
      let userLogin = JSON.parse(localStorage.getItem('userLogin'));
      const uri = `QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${userLogin.TaiKhoan}`
      this.filmManagementService.POST(uri).subscribe((data: any) => {
        if (data.DanhSachVeDaDat !== null) {
          this.historyArray = data.DanhSachVeDaDat;
          console.log(this.historyArray);
        }
      })
    }
  }

}
