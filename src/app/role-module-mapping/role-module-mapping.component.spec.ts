import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleModuleMappingComponent } from './role-module-mapping.component';

describe('RoleModuleMappingComponent', () => {
  let component: RoleModuleMappingComponent;
  let fixture: ComponentFixture<RoleModuleMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleModuleMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleModuleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
