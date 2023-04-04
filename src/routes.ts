import {
  createCoWorkDetailHandler,
  createRoomInternalHandler,
  createUserExternalHandler,
  createUserInternalHandler,
  getCoWorkUserChooseHandler,
  getCoworkByUserIdHandler,
  getRoomByCoWorkIdHandler,
  updateCoWorkDetailHandler,
  updateRoomInternalHandler,
  getVerifyCodeByUserConfirmBookingHandler,
  showBookDetailInternalByCoWorkHandler,
  getStatusUserBookInternalHandler,
  createFacilityHandler,
  getCoworksHandler,
  createTimeOpenCloseHandler,
  getCalendarBookingByCoWorkIdHandler,
  loginUserExternalHandler,
  updateCalendarBookingByCoWorkIdHandler,
  getCoWorkOpen24HoursHandler,
  forgetPasswordUserExternalHandler,
  forgetPasswordUserInternalHandler,
  getFacilitiesHandler,
  deleteCoWorkHandler,
  bookDurationRoomHandler,
  loginUserInternalHandler,
  getOpenDayHandler,
  getBookRoomByPartnerIdHandler,
  showtheRoomBookedbyUserExternalHandler,
  updateStatusHandler,
  getBookRoomByPartnerIdAndStatusHandler,
  deleteRoomHandler,
} from "./kowingPlace/kowingPlace.handler";
import { checkToken } from "./kowingPlace/kowingPlace.middleWare";
// import { createCoWorkDetail } from "./kowingPlace/kowingPlace.resolver";
export interface IAppRoutes {
  path: string;
  method: string;
  action: (req: any, res: any) => any;
  middleWare?: (req: any, res: any, next: any) => any;
}
export const AppRoutes: IAppRoutes[] = [
  {
    path: "/server/boeing",
    method: "get",
    action: (req: any, res: any) => res.send("hello 7470"),
  },
  {
    path: "/kowing/createUserExternal",
    method: "post",
    action: createUserExternalHandler,
  },

  {
    path: "/kowing/getCoWorkUserChoose",
    method: "post",
    action: getCoWorkUserChooseHandler,
  },
  {
    path: "/kowing/getVerifyCodeByUserConfirmBooking",
    method: "post",
    action: getVerifyCodeByUserConfirmBookingHandler,
    middleWare: checkToken,
  },
  {
    path: "/kowing/createUserInternal",
    method: "post",
    action: createUserInternalHandler,
  },
  {
    path: "/kowing/createRoomInternal",
    method: "post",
    action: createRoomInternalHandler,
  },
  {
    path: "/kowing/createCoWorkDetail",
    method: "post",
    action: createCoWorkDetailHandler,
    middleWare: checkToken,
  },
  {
    path: "/kowing/updateCoWorkDetail",
    method: "post",
    action: updateCoWorkDetailHandler,
    middleWare: checkToken,
  },
  {
    path: "/kowing/updateRoomInternal",
    method: "post",
    action: updateRoomInternalHandler,
    middleWare: checkToken,
  },
  {
    path: "/kowing/getRoomByCoWorkId",
    method: "post",
    action: getRoomByCoWorkIdHandler,
  },
  {
    path: "/kowing/getCoworkByUserId",
    method: "post",
    action: getCoworkByUserIdHandler,
  },
  {
    path: "/kowing/showBookDetailInternalByCoWork",
    method: "post",
    action: showBookDetailInternalByCoWorkHandler,
  },
  {
    path: "/kowing/createFacility",
    method: "post",
    action: createFacilityHandler,
  },
  {
    path: "/kowing/getFacilities",
    method: "post",
    action: getFacilitiesHandler,
  },
  {
    path: "/kowing/getStatusUserBookInternal",
    method: "post",
    action: getStatusUserBookInternalHandler,
  },
  {
    path: "/kowing/getCoworks",
    method: "post",
    action: getCoworksHandler,
  },
  {
    path: "/kowing/createTimeOpenClose",
    method: "post",
    action: createTimeOpenCloseHandler,
    middleWare: checkToken,
  },
  {
    path: "/kowing/getCalendarBookingByCoWorkId",
    method: "post",
    action: getCalendarBookingByCoWorkIdHandler,
  },
  {
    path: "/kowing/loginUserExternal",
    method: "post",
    action: loginUserExternalHandler,
  },
  {
    path: "/kowing/updateCalendarBookingByCoWorkId",
    method: "post",
    action: updateCalendarBookingByCoWorkIdHandler,
    middleWare: checkToken,
  },
  {
    path: "/kowing/getCoWorkOpen24Hours",
    method: "post",
    action: getCoWorkOpen24HoursHandler,
  },
  {
    path: "/kowing/forgetPasswordUserExternal",
    method: "post",
    action: forgetPasswordUserExternalHandler,
  },
  {
    path: "/kowing/forgetPasswordUserInternal",
    method: "post",
    action: forgetPasswordUserInternalHandler,
  },
  {
    path: "/kowing/deleteCoWork",
    method: "post",
    action: deleteCoWorkHandler,
  },
  {
    path: "/kowing/bookDurationRoom",
    method: "post",
    action: bookDurationRoomHandler,
  },
  {
    path: "/kowing/loginUserInternal",
    method: "post",
    action: loginUserInternalHandler,
  },
  {
    path: "/kowing/getOpenDay",
    method: "post",
    action: getOpenDayHandler,
  },
  {
    path: "/kowing/getBookRoomByPartnerId",
    method: "post",
    action: getBookRoomByPartnerIdHandler,
  },
  {
    path: "/kowing/showtheRoomBookedbyUserExternal",
    method: "post",
    action: showtheRoomBookedbyUserExternalHandler,
  },
  {
    path: "/kowing/updateStatus",
    method: "post",
    action: updateStatusHandler,
  },
  {
    path: "/kowing/getReserveByStat",
    method: "post",
    action: getBookRoomByPartnerIdAndStatusHandler,
  },
  {
    path: "/kowing/deleteRoom",
    method: "post",
    action: deleteRoomHandler,
  },
];
