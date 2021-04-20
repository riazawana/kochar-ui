import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenergyComponent } from './viewenergy.component';

describe('ViewenergyComponent', () => {
  let component: ViewenergyComponent;
  let fixture: ComponentFixture<ViewenergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewenergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewenergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
