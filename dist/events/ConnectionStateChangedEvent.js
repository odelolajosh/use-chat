"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionStateChangedEvent = void 0;
const enums_1 = require("../enums");
class ConnectionStateChangedEvent {
    constructor(status) {
        this.type = enums_1.ChatEventType.ConnectionStateChanged;
        this.status = status;
    }
}
exports.ConnectionStateChangedEvent = ConnectionStateChangedEvent;
//# sourceMappingURL=ConnectionStateChangedEvent.js.map