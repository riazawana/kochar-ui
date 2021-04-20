import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartMeterComponent } from './add-smart-meter.component';

describe('AddSmartMeterComponent', () => {
  let component: AddSmartMeterComponent;
  let fixture: ComponentFixture<AddSmartMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSmartMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmartMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
