import { Router } from "express";
import { createProduct ,getProducts } from "../controllers/productsController";

const productRoutes = Router()

productRoutes.get("/", getProducts);
productRoutes.post("/", createProduct);

export default productRoutes