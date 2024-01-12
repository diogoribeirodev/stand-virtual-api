import { RequestHandler } from "express";
import { db } from "../server/db";

export const getCar: RequestHandler = async (req, res, next) => {
  try {
    const car = await db.car.findUniqueOrThrow({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      car,
    });
  } catch (error) {
    next(error);
  }
};

export const getCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await db.car.findMany({
      where: {
        fuel: (req.query.fuel as string) || undefined,
        category: (req.query.category as string) || undefined,
        store_id: Number(req.query.store) || undefined,
        new: req.query.new === "true" ? true : undefined,
      },
    });
    return res.status(200).json({
      cars,
    });
  } catch (error) {
    next(error);
  }
};
