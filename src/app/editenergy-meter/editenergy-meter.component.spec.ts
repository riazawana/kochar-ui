import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditenergyMeterComponent } from './editenergy-meter.component';

describe('EditenergyMeterComponent', () => {
  let component: EditenergyMeterComponent;
  let fixture: ComponentFixture<EditenergyMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditenergyMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditenergyMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
