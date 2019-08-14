import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-box',
  templateUrl: './ticket-box.component.html',
  styleUrls: ['./ticket-box.component.scss']
})
export class TicketBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isChanged: string = '1';
  isActivated: string = '1';
  changeStep(id){
    this.isChanged = id;
    this.isActivated = id;
  }

  ngOnDestroy(){
    // localStorage.removeItem('logo');
    // localStorage.removeItem('theatre');
    // localStorage.removeItem('date');
    // localStorage.removeItem('detail');
  }

}
