"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseController_1 = require("../controllers/expenseController");
const expensesRoutes = (0, express_1.Router)();
expensesRoutes.get("/", expenseController_1.getExpensesByCategory);
exports.default = expensesRoutes;
