import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrouterComponent } from './addrouter.component';

describe('AddrouterComponent', () => {
  let component: AddrouterComponent;
  let fixture: ComponentFixture<AddrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
