import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsManagerComponent } from './sms-manager.component';

describe('SmsManagerComponent', () => {
  let component: SmsManagerComponent;
  let fixture: ComponentFixture<SmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
