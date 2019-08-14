import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmManagementService } from 'src/app/_core/services/film-management.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() film;
  @Output() sharingDataEvent = new EventEmitter;
  subFilmShowtime = new Subscription;
  filmShowtime: any;

  constructor(private filmManagementService: FilmManagementService, private router: Router) { }

  ngOnInit() {
    this.getShowtimeFromAPI();
  }

  getShowtimeFromAPI() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.film.MaPhim}`
    this.subFilmShowtime = this.filmManagementService.GET(uri).subscribe((data: any) => {
      if (data != null) {
        this.filmShowtime = data;
      }
    })
  }

  goToTicketBoxPage(showtimeId) {
    this.router.navigate(["/home/ticket-box", showtimeId]).then(() => { window.scrollTo(0, 0) });;
    this.sharingDataEvent.emit(this.filmShowtime);
  }

  ngOnDestroy() {
    this.subFilmShowtime.unsubscribe();
  }
}