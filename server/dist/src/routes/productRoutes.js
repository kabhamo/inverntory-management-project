"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
const productRoutes = (0, express_1.Router)();
productRoutes.get("/", productsController_1.getProducts);
productRoutes.post("/", productsController_1.createProduct);
exports.default = productRoutes;
