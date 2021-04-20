import { Injectable } from '@angular/core';
import {SocketioService} from "./socketio.service";
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class SocketioSendmsgService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: SocketioService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .pipe(map((response: any): any => {
        return response;
      }));


      // this.messages = <Subject<any>>wsService.connect().pipe(map(
      //   (response: MessageEvent): any => {
      //     let data = JSON.parse(response.data);
      //     return data;
      //   }));

   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

}