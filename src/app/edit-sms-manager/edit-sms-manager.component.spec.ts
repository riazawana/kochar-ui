import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmsManagerComponent } from './edit-sms-manager.component';

describe('EditSmsManagerComponent', () => {
  let component: EditSmsManagerComponent;
  let fixture: ComponentFixture<EditSmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSmsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
