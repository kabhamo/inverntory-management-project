import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseController";

const expensesRoutes = Router()

expensesRoutes.get("/", getExpensesByCategory)

export default expensesRoutes