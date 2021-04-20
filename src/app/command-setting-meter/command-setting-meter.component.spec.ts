import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSettingMeterComponent } from './command-setting-meter.component';

describe('CommandSettingMeterComponent', () => {
  let component: CommandSettingMeterComponent;
  let fixture: ComponentFixture<CommandSettingMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandSettingMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSettingMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
