import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeaturesComponent } from './viewfeatures.component';

describe('ViewfeaturesComponent', () => {
  let component: ViewfeaturesComponent;
  let fixture: ComponentFixture<ViewfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
