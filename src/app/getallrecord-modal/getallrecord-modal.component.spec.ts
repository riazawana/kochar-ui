import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallrecordModalComponent } from './getallrecord-modal.component';

describe('GetallrecordModalComponent', () => {
  let component: GetallrecordModalComponent;
  let fixture: ComponentFixture<GetallrecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallrecordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallrecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
