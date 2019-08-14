import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingItemComponent } from './comming-item.component';

describe('CommingItemComponent', () => {
  let component: CommingItemComponent;
  let fixture: ComponentFixture<CommingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
