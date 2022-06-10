import { NextFunction, Request, Response } from "express";
import { products } from "./data";

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Math.random() > 0.75
    ? res.status(200).json({ products })
    : res.status(404).end();
};

export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  const product = products.find((p) => p.id === id);
  if (product) {
    return res.status(200).json({ product });
  } else {
    return res.status(404).end();
  }
};
