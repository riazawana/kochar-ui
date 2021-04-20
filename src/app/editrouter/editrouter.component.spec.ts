import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrouterComponent } from './editrouter.component';

describe('EditrouterComponent', () => {
  let component: EditrouterComponent;
  let fixture: ComponentFixture<EditrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
