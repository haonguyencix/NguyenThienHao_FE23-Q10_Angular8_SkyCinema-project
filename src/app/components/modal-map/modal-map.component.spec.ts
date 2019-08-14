import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMapComponent } from './modal-map.component';

describe('ModalMapComponent', () => {
  let component: ModalMapComponent;
  let fixture: ComponentFixture<ModalMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
