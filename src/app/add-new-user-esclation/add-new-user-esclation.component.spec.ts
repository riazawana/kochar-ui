import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserEsclationComponent } from './add-new-user-esclation.component';

describe('AddNewUserEsclationComponent', () => {
  let component: AddNewUserEsclationComponent;
  let fixture: ComponentFixture<AddNewUserEsclationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUserEsclationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserEsclationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
