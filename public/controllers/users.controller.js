"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const user_1 = require("../service/user");
let UsersController = class UsersController extends tsoa_1.Controller {
    constructor() {
        super();
        /**
         * Success Response
         *
         * @param param0
         * @returns
         */
        this.renderResponse = ({ status = http_status_codes_1.default.OK, message, data, error } = {}) => {
            return Object.assign(Object.assign(Object.assign({ status }, (message ? { message } : {})), (data ? { data } : {})), (error ? { error } : {}));
        };
        this.UserService = new user_1.User();
    }
    /**
     * Get all users
     */
    searchForms() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = this.UserService.getUsers();
            return this.renderResponse({ data: users });
        });
    }
    /**
     * Get user by id
     * @path {number} id - Required
     */
    getForm(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.UserService.getUserById(id);
            return this.renderResponse({ data: result });
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('all'),
    (0, tsoa_1.SuccessResponse)(http_status_codes_1.default.OK, 'Return array of users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "searchForms", null);
__decorate([
    (0, tsoa_1.Get)('{id}'),
    (0, tsoa_1.SuccessResponse)(http_status_codes_1.default.OK, 'Return user'),
    __param(0, (0, tsoa_1.Path)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getForm", null);
UsersController = __decorate([
    (0, tsoa_1.Tags)('Users'),
    (0, tsoa_1.Route)('users'),
    __metadata("design:paramtypes", [])
], UsersController);
exports.UsersController = UsersController;
