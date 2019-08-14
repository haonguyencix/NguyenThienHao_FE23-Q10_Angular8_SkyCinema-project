import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent implements OnInit {

  BookingStatus: boolean = false;
  @Output() tickEvent = new EventEmitter;
  @Input() seat;
  constructor() { }

  ngOnInit() {
  }

  tick(){
    this.BookingStatus = !this.BookingStatus;
    const seatObj = {
      BookingStatus: this.BookingStatus,
      seat: this.seat
    }
    this.tickEvent.emit(seatObj);
  }

}
