import { NextFunction, Request, Response } from "express";
import { products } from "./data";

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // flaky BE
  if (Math.random() < 0.5) {
    return res.status(500).end();
  }

  const keys = Object.getOwnPropertyNames(req.query);

  // general case
  if (keys.length === 0) {
    return res.status(200).json({ products });
  }

  // super basic filtering
  const firstKey = keys[0];
  const firstVal = req.query[firstKey];
  const result = products.filter((p) => Reflect.get(p, firstKey) === firstVal);
  if (result.length > 0) {
    return res.status(200).json({ products: result });
  }
  return res.status(404).end();
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
