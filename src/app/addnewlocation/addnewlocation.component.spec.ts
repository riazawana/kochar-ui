import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewlocationComponent } from './addnewlocation.component';

describe('AddnewlocationComponent', () => {
  let component: AddnewlocationComponent;
  let fixture: ComponentFixture<AddnewlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
