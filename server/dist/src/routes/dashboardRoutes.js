"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const dashboardRoutes = (0, express_1.Router)();
dashboardRoutes.get("/", dashboardController_1.getDashboardMetrics);
exports.default = dashboardRoutes;
