import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmsManagerComponent } from './add-sms-manager.component';

describe('AddSmsManagerComponent', () => {
  let component: AddSmsManagerComponent;
  let fixture: ComponentFixture<AddSmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSmsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
