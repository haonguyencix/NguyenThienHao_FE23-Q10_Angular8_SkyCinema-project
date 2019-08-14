import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassTabComponent } from './change-pass-tab.component';

describe('ChangePassTabComponent', () => {
  let component: ChangePassTabComponent;
  let fixture: ComponentFixture<ChangePassTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
