import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfeaturesComponent } from './editfeatures.component';

describe('EditfeaturesComponent', () => {
  let component: EditfeaturesComponent;
  let fixture: ComponentFixture<EditfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
