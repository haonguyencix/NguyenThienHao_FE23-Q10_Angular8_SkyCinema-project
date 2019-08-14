import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingItemComponent } from './showing-item.component';

describe('ShowingItemComponent', () => {
  let component: ShowingItemComponent;
  let fixture: ComponentFixture<ShowingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
