import { TestBed } from '@angular/core/testing';

import { SocketioSendmsgService } from './socketio-sendmsg.service';

describe('SocketioSendmsgService', () => {
  let service: SocketioSendmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketioSendmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
