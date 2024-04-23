import { ChatEventType, ConnectionState } from "../enums";
import { ChatEvent } from "./ChatEvent";
export declare class ConnectionStateChangedEvent implements ChatEvent<ChatEventType.ConnectionStateChanged> {
    readonly type = ChatEventType.ConnectionStateChanged;
    status: ConnectionState;
    constructor(status: ConnectionState);
}
