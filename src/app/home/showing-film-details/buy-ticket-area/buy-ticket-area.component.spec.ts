import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketAreaComponent } from './buy-ticket-area.component';

describe('BuyTicketAreaComponent', () => {
  let component: BuyTicketAreaComponent;
  let fixture: ComponentFixture<BuyTicketAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTicketAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTicketAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
