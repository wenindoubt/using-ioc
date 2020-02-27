"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_1 = require("aws-sdk/clients/dynamodb");
var bottlejs_1 = __importDefault(require("bottlejs"));
var ResumeRepo_1 = require("./repo/lib/ResumeRepo");
bottlejs_1.default.config = { strict: true }; // this method will throw an error if an injected dependency is undefined
var bottle = new bottlejs_1.default();
bottle.constant('DDB_OPTIONS', { region: 'us-west-2', convertEmptyValues: true });
bottle.constant('RESUME_TABLE', 'Resume');
bottle.service('DDB', dynamodb_1.DocumentClient, 'DDB_OPTIONS');
bottle.service('ResumeRepo', ResumeRepo_1.ResumeRepo, 'DDB', 'RESUME_TABLE');
exports.default = bottle;
//# sourceMappingURL=bootstrap.js.map