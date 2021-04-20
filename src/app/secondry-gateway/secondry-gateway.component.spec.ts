import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondryGatewayComponent } from './secondry-gateway.component';

describe('SecondryGatewayComponent', () => {
  let component: SecondryGatewayComponent;
  let fixture: ComponentFixture<SecondryGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondryGatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondryGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
