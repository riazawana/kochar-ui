import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationDetailsComponent } from './escalation-details.component';

describe('EscalationDetailsComponent', () => {
  let component: EscalationDetailsComponent;
  let fixture: ComponentFixture<EscalationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
