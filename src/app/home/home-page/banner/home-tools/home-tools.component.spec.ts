import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeToolsComponent } from './home-tools.component';

describe('HomeToolsComponent', () => {
  let component: HomeToolsComponent;
  let fixture: ComponentFixture<HomeToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
