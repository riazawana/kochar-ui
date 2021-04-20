import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrolemodulemappingComponent } from './viewrolemodulemapping.component';

describe('ViewrolemodulemappingComponent', () => {
  let component: ViewrolemodulemappingComponent;
  let fixture: ComponentFixture<ViewrolemodulemappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrolemodulemappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrolemodulemappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
