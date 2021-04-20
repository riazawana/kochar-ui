import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvideogatewayComponent } from './viewvideogateway.component';

describe('ViewvideogatewayComponent', () => {
  let component: ViewvideogatewayComponent;
  let fixture: ComponentFixture<ViewvideogatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvideogatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvideogatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
