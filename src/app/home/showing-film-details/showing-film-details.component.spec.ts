import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingFilmDetailsComponent } from './showing-film-details.component';

describe('ShowingFilmDetailsComponent', () => {
  let component: ShowingFilmDetailsComponent;
  let fixture: ComponentFixture<ShowingFilmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingFilmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingFilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
