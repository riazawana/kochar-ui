import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDetailComponent } from './router-detail.component';

describe('RouterDetailComponent', () => {
  let component: RouterDetailComponent;
  let fixture: ComponentFixture<RouterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
