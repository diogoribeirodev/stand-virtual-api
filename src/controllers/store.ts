import { RequestHandler } from "express";
import { db } from "../server/db";

export const getStore: RequestHandler = async (req, res, next) => {
  try {
    const store = await db.store.findUniqueOrThrow({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      store,
    });
  } catch (error) {
    next(error);
  }
};

export const getStores: RequestHandler = async (req, res, next) => {
  try {
    const stores = await db.store.findMany();
    return res.status(200).json({
      stores,
    });
  } catch (error) {
    next(error);
  }
};
