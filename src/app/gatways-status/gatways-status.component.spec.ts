import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatwaysStatusComponent } from './gatways-status.component';

describe('GatwaysStatusComponent', () => {
  let component: GatwaysStatusComponent;
  let fixture: ComponentFixture<GatwaysStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatwaysStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatwaysStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
