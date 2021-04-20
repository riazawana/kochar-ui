import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogatewayComponent } from './videogateway.component';

describe('VideogatewayComponent', () => {
  let component: VideogatewayComponent;
  let fixture: ComponentFixture<VideogatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
