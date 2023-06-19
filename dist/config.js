"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.Config = {
    pageSize: 10,
    generatedPasswordLength: 32,
    generatedApiKeyLength: 32,
    jwtSecret: process.env.JWT_SECRET,
    docUser: process.env.DOC_USER,
    docPassword: process.env.DOC_PASSWORD,
    didExpirationTime: 60 * 60 * 24 * 365,
};
//# sourceMappingURL=config.js.map