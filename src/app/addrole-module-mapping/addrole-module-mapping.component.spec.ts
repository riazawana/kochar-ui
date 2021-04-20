import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroleModuleMappingComponent } from './addrole-module-mapping.component';

describe('AddroleModuleMappingComponent', () => {
  let component: AddroleModuleMappingComponent;
  let fixture: ComponentFixture<AddroleModuleMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddroleModuleMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroleModuleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
