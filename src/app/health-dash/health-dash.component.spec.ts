import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDashComponent } from './health-dash.component';

describe('HealthDashComponent', () => {
  let component: HealthDashComponent;
  let fixture: ComponentFixture<HealthDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
