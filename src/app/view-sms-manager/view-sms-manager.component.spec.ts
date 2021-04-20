import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSmsManagerComponent } from './view-sms-manager.component';

describe('ViewSmsManagerComponent', () => {
  let component: ViewSmsManagerComponent;
  let fixture: ComponentFixture<ViewSmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSmsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
