import { Request, Response } from "express";
import {
  createCoWorkDetail,
  createRoomInternal,
  createUserExternal,
  createUserInternal,
  getCoWork24Hrs,
  getCoWorkUserChoose,
  getCowork,
  getCoworkByUserId,
  getRoomByCoWorkId,
  updateCoWorkDetail,
  updateRoomInternal,
  getVerifyCodeByUserConfirmBooking,
  showBookDetailInternalByCoWork,
  getStatusUserBookInternal,
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

export const getCoworkHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCowork();
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
export const getVerifyCodeByUserConfirmBookingHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getVerifyCodeByUserConfirmBooking(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

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

export const updateRoomInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await updateRoomInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getRoomByCoWorkIdHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await getRoomByCoWorkId(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getCoworkByUserIdHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await getCoworkByUserId(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const showBookDetailInternalByCoWorkHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await showBookDetailInternalByCoWork(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getStatusUserBookInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getStatusUserBookInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
