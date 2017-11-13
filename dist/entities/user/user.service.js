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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model");
const response_data_1 = require("../response-data");
const class_validator_1 = require("class-validator");
let UserService = class UserService {
    constructor() {
        this.repository = typeorm_1.getRepository(user_model_1.User);
    }
    create(props) {
        let response = new response_data_1.ResponseData();
        return class_validator_1.validate(props).then(errors => {
            // if (errors.length > 0) {
            //   errors.forEach(function(val) {
            //     response.mensagens.push(val.value);
            //   });
            //   response.status = false;
            //   response.objeto = props;
            // } else {
            //   response.mensagens.push("OK!");
            response.objeto = this.repository.create(props);
            // }
            return response;
        });
    }
    readOne(id) {
        let promise = new Promise((resolve, reject) => {
            resolve(this.repository.findOneById(id));
            let response = new response_data_1.ResponseData();
            response.mensagens.push("Id não encontrado.");
            response.status = false;
            reject(response);
        });
        return promise;
    }
    readOneByEmail(email) {
        let promise = new Promise((resolve, reject) => {
            resolve(this.repository.findOne({ email: email }));
            let response = new response_data_1.ResponseData();
            response.mensagens.push("email não encontrado.");
            response.status = false;
            reject(response);
        });
        return promise;
    }
    update(props) {
        return this.repository.preload(props);
    }
    drop(id) {
        let user;
        this.readOne(id).then((res) => (user = res));
        return this.repository.remove(user);
    }
    readAll() {
        return this.repository
            .find();
    }
    findOneByToken(token) {
        return this.repository.findOne({ token: token });
    }
};
UserService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
