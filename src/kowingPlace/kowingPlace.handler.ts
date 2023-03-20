import { Request, Response } from "express";
import {
  createUserExternal,
  getCoWork24Hrs,
  getCoWorkUserChoose,
  getCoworkRecomment,
  getUserConfirmBooking,
} from "./kowingPlace.resolver";

export const createUserExternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createUserExternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getCoWork24HrsHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCoWork24Hrs();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getCoworkRecommentHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getCoworkRecomment();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getCoWorkUserChooseHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getCoWorkUserChoose(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getUserConfirmBookingHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getUserConfirmBooking(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
