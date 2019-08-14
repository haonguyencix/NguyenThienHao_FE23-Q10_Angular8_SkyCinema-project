import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-ticket-area',
  templateUrl: './buy-ticket-area.component.html',
  styleUrls: ['./buy-ticket-area.component.scss']
})
export class BuyTicketAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isChanged: string = 'st';
  isActivated: string = 'st';
  
  changeTab(tabId){
    this.isChanged = tabId;
    this.isActivated = tabId;
    window.scrollTo({
      top: 450,
      behavior: 'smooth'
    })
  }

}
