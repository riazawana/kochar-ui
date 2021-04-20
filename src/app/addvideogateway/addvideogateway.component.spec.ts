import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvideogatewayComponent } from './addvideogateway.component';

describe('AddvideogatewayComponent', () => {
  let component: AddvideogatewayComponent;
  let fixture: ComponentFixture<AddvideogatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvideogatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvideogatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
