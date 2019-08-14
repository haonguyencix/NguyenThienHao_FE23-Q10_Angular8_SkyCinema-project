import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comming-item',
  templateUrl: './comming-item.component.html',
  styleUrls: ['./comming-item.component.scss']
})
export class CommingItemComponent implements OnInit {

  @Input() commingFilm;
  constructor() { }

  ngOnInit() {
  }

}
