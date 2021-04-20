import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSettingSmartmeterComponent } from './command-setting-smartmeter.component';

describe('CommandSettingSmartmeterComponent', () => {
  let component: CommandSettingSmartmeterComponent;
  let fixture: ComponentFixture<CommandSettingSmartmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandSettingSmartmeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSettingSmartmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
