import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeaturesComponent } from './addfeatures.component';

describe('AddfeaturesComponent', () => {
  let component: AddfeaturesComponent;
  let fixture: ComponentFixture<AddfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
