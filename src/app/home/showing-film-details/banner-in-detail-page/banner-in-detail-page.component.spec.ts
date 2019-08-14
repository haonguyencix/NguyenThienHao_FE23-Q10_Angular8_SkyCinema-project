import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInDetailPageComponent } from './banner-in-detail-page.component';

describe('BannerInDetailPageComponent', () => {
  let component: BannerInDetailPageComponent;
  let fixture: ComponentFixture<BannerInDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
