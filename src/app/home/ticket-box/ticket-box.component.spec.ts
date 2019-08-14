import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBoxComponent } from './ticket-box.component';

describe('TicketBoxComponent', () => {
  let component: TicketBoxComponent;
  let fixture: ComponentFixture<TicketBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
