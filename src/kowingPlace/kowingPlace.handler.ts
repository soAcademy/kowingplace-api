import { Request, Response } from "express";
import {
  createCoWorkDetail,
  createRoomInternal,
  createUserExternal,
  createUserInternal,
  getCoWorkUserChoose,
  getCoworks,
  getCoworkByUserId,
  getRoomByCoWorkId,
  updateCoWorkDetail,
  updateRoomInternal,
  getVerifyCodeByUserConfirmBooking,
  showBookDetailInternalByCoWork,
  getStatusUserBookInternal,
  createFacility,
  createTimeOpenClose,
  getCalendarBookingByCoWorkId,
  updateCalendarBookingByCoWorkId,
  getCoWorkOpen24Hours,
  forgetPasswordUserExternal,
  forgetPasswordUserInternal,
  getFacilities,
  deleteCoWork,
  bookDurationRoom,
  getOpenDay,
  getBookRoomByPartnerId,
  updateStatus,
  showtheRoomBookedbyUserExternal,
  getBookRoomByPartnerIdAndStatus,
  deleteRoom,
  // showtheRoomBookedbyUserExternal,
} from "./kowingPlace.resolver";
import {
  createTimeOpenCloseCodec,
  updateCoWorkDetailCodec,
} from "./kowingPlace.interface";
import { loginUserExternal, loginUserInternal } from "./kowingPlace.service";

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

// export const getCoWork24HrsHandler = async (req: Request, res: Response) => {
//   try {
//     const result = await getCoWork24Hrs();
//     res.status(200).json(result);
//   } catch (e) {
//     res.status(500).json({
//       error: String(e),
//     });
//   }
// };

export const getCoworksHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCoworks();
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

export const getFacilitiesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getFacilities();
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
  const args = req?.body;
  console.log("args", args);

  try {
    updateCoWorkDetailCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await updateCoWorkDetail(args))
      : res.status(500).json({
          error: "Invalid parameter codec",
        });
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
  console.log("args", args);

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
export const createFacilityHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createFacility(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createTimeOpenCloseHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log(args);
  try {
    createTimeOpenCloseCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await createTimeOpenClose(args))
      : res.status(500).json({
          error: "Invalid parameter codec",
        });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getCalendarBookingByCoWorkIdHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getCalendarBookingByCoWorkId(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
export const loginUserExternalHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await loginUserExternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};
export const loginUserInternalHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await loginUserInternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateCalendarBookingByCoWorkIdHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await updateCalendarBookingByCoWorkId(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};
export const getCoWorkOpen24HoursHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getCoWorkOpen24Hours();
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};
export const forgetPasswordUserExternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await forgetPasswordUserExternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const forgetPasswordUserInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await forgetPasswordUserInternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};
export const deleteCoWorkHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await deleteCoWork(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};
export const bookDurationRoomHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await bookDurationRoom(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getOpenDayHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);

  try {
    const result = await getOpenDay(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getBookRoomByPartnerIdHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log(args);

  try {
    const result = await getBookRoomByPartnerId(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateStatusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);

  try {
    const result = await updateStatus(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const showtheRoomBookedbyUserExternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);

  try {
    const result = await showtheRoomBookedbyUserExternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getBookRoomByPartnerIdAndStatusHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);
  try {
    const result = await getBookRoomByPartnerIdAndStatus(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteRoomHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  try {
    const result = await deleteRoom(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};
