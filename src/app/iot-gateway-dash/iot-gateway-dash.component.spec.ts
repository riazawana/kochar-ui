import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotGatewayDashComponent } from './iot-gateway-dash.component';

describe('IotGatewayDashComponent', () => {
  let component: IotGatewayDashComponent;
  let fixture: ComponentFixture<IotGatewayDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotGatewayDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotGatewayDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
