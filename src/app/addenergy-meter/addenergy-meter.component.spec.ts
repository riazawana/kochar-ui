import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenergyMeterComponent } from './addenergy-meter.component';

describe('AddenergyMeterComponent', () => {
  let component: AddenergyMeterComponent;
  let fixture: ComponentFixture<AddenergyMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddenergyMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenergyMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
