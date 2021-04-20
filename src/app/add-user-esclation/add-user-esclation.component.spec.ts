import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserEsclationComponent } from './add-user-esclation.component';

describe('AddUserEsclationComponent', () => {
  let component: AddUserEsclationComponent;
  let fixture: ComponentFixture<AddUserEsclationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserEsclationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserEsclationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
