import { ChatEventType, ConnectionState } from "../enums";
import { ChatEvent } from "./ChatEvent";

export class ConnectionStateChangedEvent
  implements ChatEvent<ChatEventType.ConnectionStateChanged> {
  readonly type = ChatEventType.ConnectionStateChanged;
  status: ConnectionState;
  
  constructor(status: ConnectionState) {
    this.status = status;
  }
}
