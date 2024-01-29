import express from "express";
import { getProduct, getProducts } from "./controller";

export const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
