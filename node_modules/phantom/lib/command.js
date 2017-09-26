"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
let NEXT_ID = 1;

class Command {

    constructor(target, name) {
        let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        this.id = NEXT_ID++;
        this.target = target;
        this.name = name;
        this.params = params;
        this.deferred = null;
    }
}
exports.default = Command;