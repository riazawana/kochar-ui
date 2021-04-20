import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSettingComponent } from './command-setting.component';

describe('CommandSettingComponent', () => {
  let component: CommandSettingComponent;
  let fixture: ComponentFixture<CommandSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
