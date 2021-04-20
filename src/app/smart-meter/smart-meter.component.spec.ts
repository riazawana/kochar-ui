import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMeterComponent } from './smart-meter.component';

describe('SmartMeterComponent', () => {
  let component: SmartMeterComponent;
  let fixture: ComponentFixture<SmartMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
