import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAnalysisComponent } from './router-analysis.component';

describe('RouterAnalysisComponent', () => {
  let component: RouterAnalysisComponent;
  let fixture: ComponentFixture<RouterAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
