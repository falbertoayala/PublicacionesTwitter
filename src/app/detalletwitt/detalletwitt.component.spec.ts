import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletwittComponent } from './detalletwitt.component';

describe('DetalletwittComponent', () => {
  let component: DetalletwittComponent;
  let fixture: ComponentFixture<DetalletwittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalletwittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletwittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
