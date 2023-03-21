import { Request, Response } from "express";
import {
  createCoWorkDetail,
  createRoomInternal,
  createUserExternal,
  createUserInternal,
  getCoWork24Hrs,
  getCoWorkUserChoose,
  getCoworkRecomment,
  getUserConfirmBooking,
  updateCoWorkDetail,
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

//----------------- internal -------------------

export const createUserInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createUserInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createRoomInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createRoomInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createCoWorkDetailHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createCoWorkDetail(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const updateCoWorkDetailHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await updateCoWorkDetail(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
