"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDto1 = void 0;
const swagger_1 = require("@nestjs/swagger");
const cats_schema_1 = require("../../cats/cats.schema");
class LoginRequestDto1 extends (0, swagger_1.PickType)(cats_schema_1.Cat, [
    'email',
    'password',
]) {
}
exports.LoginRequestDto1 = LoginRequestDto1;
//# sourceMappingURL=login.request.dto.js.map