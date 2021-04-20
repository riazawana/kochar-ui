import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddzoneComponent } from './addzone.component';

describe('AddzoneComponent', () => {
  let component: AddzoneComponent;
  let fixture: ComponentFixture<AddzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
