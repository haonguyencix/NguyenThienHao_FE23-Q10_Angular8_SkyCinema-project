import { Component, OnInit } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import swal from '../../../../../node_modules/sweetalert/dist/sweetalert.min.js';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {

  total: number = 0;
  totalTicket: number = 0;
  id: any;
  subTicketbox = new Subscription;
  bookedList: any = [];
  seatList: any;
  isLogo: string;
  isTheatreInfo: any;
  isDate: any;
  filmDetail: any;
  hoverStatus: boolean = false;

  noteArray: any = [
    { NoteContent: '', BgColorNote: '#00334d', BorderNote: '2px solid gray', StatusNote: "Casual" },
    { NoteContent: '', BgColorNote: '#DC3545', BorderNote: '2px solid #c6c6c6', StatusNote: "VIP" },
    { NoteContent: '', BgColorNote: '#008FBE', BorderNote: '2px solid #c6c6c6', StatusNote: "Selecting" },
    { NoteContent: 'X', BgColorNote: '#808080', BorderNote: '2px solid #A5A5A5', StatusNote: "Sold" }
  ];

  constructor(private filmManagementService: FilmManagementService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.startTimmingThreshold(60 * 5 - 1);
  }

  ngOnInit() {
    this.getParamsFromURL();
    this.getTicketBoxFromAPI();
    if (localStorage.getItem('logo') !== null) {
      this.isLogo = JSON.parse(localStorage.getItem('logo'));
    }
    if (localStorage.getItem('theatre') !== null) {
      this.isTheatreInfo = JSON.parse(localStorage.getItem('theatre'));
    }
    if (localStorage.getItem('date') !== null) {
      this.isDate = JSON.parse(localStorage.getItem('date'));
    }
    if (localStorage.getItem('detail') !== null) {
      this.filmDetail = JSON.parse(localStorage.getItem('detail'));
    }
  }

  getParamsFromURL() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getTicketBoxFromAPI() {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.id}`
    this.subTicketbox = this.filmManagementService.GET(uri).subscribe((data: any) => {
      if (data != null) {
        this.seatList = data;
      }
    })
  }

  tickEvent(seatObj) {
    if (seatObj.BookingStatus) {
      this.bookedList.push(seatObj.seat);
      console.log(this.bookedList);
      this.total += seatObj.seat.GiaVe;
      this.totalTicket++;
    } else {
      let index = this.bookedList.findIndex(item => {
        return item.MaGhe === seatObj.seat.MaGhe;
      });
      this.bookedList.splice(index, 1);
      this.total -= seatObj.seat.GiaVe;
      this.totalTicket--;
    }
  }

  continue() {
    if (localStorage.getItem('userLogin') !== null) {
      const uri = "QuanLyDatVe/DatVe";
      let userLogin = JSON.parse(localStorage.getItem('userLogin'));
      let ticket = {
        MaLichChieu: this.id,
        TaiKhoanNguoiDung: userLogin.TaiKhoan,
        DanhSachVe: this.bookedList,
      }
      if (ticket.DanhSachVe.length === 0) {
        swal({
          title: "NO SEATS HAVE BEEN BOOKED!",
          icon: "error",
          buttons: "OK"
        })
      } else {
        swal({
          title: "ARE YOU SURE?",
          text: "You have been booked " + this.totalTicket + " ticket(s) at " + this.isTheatreInfo.name + "\n" + "Please ensure all your information is correct!",
          icon: "info",
          buttons: true,
          dangerMode: true,
        })
          .then((willBook) => {
            if (willBook) {
              this.filmManagementService.POST(uri, ticket).subscribe((data: any) => {
                if (data === "Đặt vé thành công!") {
                  swal({
                    title: "SUCCESSFUL!",
                    icon: "success",
                    buttons: "OK"
                  }).then(() => {
                    this.router.navigate(["/home"])
                  })
                }
              })
            } else {
              swal("STILL HERE!");
            }
          });
      }
    } else {
      swal({
        title: "YOU MUST SIGN IN!",
        icon: "error",
        buttons: true,
        dangerMode: true,
      }).then((willSignIn) => {
        if (willSignIn) {
          swal("LET'S SIGN IN!", {
            icon: "success",
            buttons: "OK"
          }).then(() => {
            this.router.navigate(["/home/form-pages/login-page"])
          })
        } else {
          swal("YOU CAN'T CONTINUE BOOKING TICKET!");
        }
      })
    };
  }

  minutes: any = '05';
  seconds: any = '00';
  interval: any;
  startTimmingThreshold(duration) {
    let timer = duration;
    this.interval = setInterval(() => {
      this.minutes = Math.round((timer / 60) - 0.5);
      this.seconds = timer % 60;

      this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

      --timer;
      if (timer === 60) {
        swal({
          title: "IN 1 MINUTE!",
          icon: "warning",
          buttons: "OK",
          timer: 2000,
        });
      }
      if (timer === -1) {
        clearInterval(this.interval);
        swal({
          title: "TIME'S UP!",
          text: "Do you want to book again ?",
          icon: "info",
          buttons: true,
          dangerMode: true,
        })
          .then((willBookAgain) => {
            if (willBookAgain) {
              swal("PLEASE BOOKING TICKET IN 5 MINUTES!", {
                icon: "success",
                buttons: "OK"
              }).then(() => {
                location.reload();
              })
            } else {
              window.history.back();
            }
          })
      }
    }, 1000);
  }

  ngOnDestroy() {
    this.subTicketbox.unsubscribe();
    clearInterval(this.interval);
  }

}
