//check token หมดอายุหรือยัง
import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(403).json({ message: "need token", isDeleteToken: true });
  } else {
    try {
      const decoded = jwt.verify(
        token as string,
        process.env.SECRET_KEY as string
      );
    } catch (err) {
      //หมดอายุ
      return res
        .status(401)
        .json({ message: "invalid token", isDeleteToken: true });
    }
  }
  return next();
};
