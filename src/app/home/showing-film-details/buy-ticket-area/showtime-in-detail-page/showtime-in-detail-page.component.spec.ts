import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeInDetailPageComponent } from './showtime-in-detail-page.component';

describe('ShowtimeInDetailPageComponent', () => {
  let component: ShowtimeInDetailPageComponent;
  let fixture: ComponentFixture<ShowtimeInDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimeInDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeInDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
