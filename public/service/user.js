"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const user_json_1 = __importDefault(require("../data/user.json"));
class User {
    constructor() {
        //Get all users 
        this.getUsers = () => {
            return user_json_1.default !== null && user_json_1.default !== void 0 ? user_json_1.default : [];
        };
        //Get user by id
        this.getUserById = (id) => {
            const result = user_json_1.default.find((user) => {
                return user.id === id;
            });
            return result;
        };
    }
}
exports.User = User;
