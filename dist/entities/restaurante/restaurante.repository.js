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
const restaurante_model_1 = require("./restaurante.model");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
let RestauranteRepository = class RestauranteRepository {
    readAll() {
        return this.repository.find();
    }
};
__decorate([
    typeorm_typedi_extensions_1.OrmRepository(restaurante_model_1.Restaurante),
    __metadata("design:type", typeorm_1.Repository)
], RestauranteRepository.prototype, "repository", void 0);
RestauranteRepository = __decorate([
    typedi_1.Service()
], RestauranteRepository);
exports.RestauranteRepository = RestauranteRepository;
