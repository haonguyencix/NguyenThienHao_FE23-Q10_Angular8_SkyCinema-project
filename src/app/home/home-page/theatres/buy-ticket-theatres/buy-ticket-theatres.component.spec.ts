import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketTheatresComponent } from './buy-ticket-theatres.component';

describe('BuyTicketTheatresComponent', () => {
  let component: BuyTicketTheatresComponent;
  let fixture: ComponentFixture<BuyTicketTheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTicketTheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTicketTheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
