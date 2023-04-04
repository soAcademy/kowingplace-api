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
    action: createUserExternalHandler, //OK
  },

  {
    path: "/kowing/getCoWorkUserChoose",
    method: "post",
    action: getCoWorkUserChooseHandler, //OK
  },
  {
    path: "/kowing/getVerifyCodeByUserConfirmBooking",
    method: "post",
    action: getVerifyCodeByUserConfirmBookingHandler, //OK
    middleWare: checkToken,
  },
  {
    path: "/kowing/createUserInternal",
    method: "post",
    action: createUserInternalHandler, //OK
  },
  {
    path: "/kowing/createRoomInternal",
    method: "post",
    action: createRoomInternalHandler,
  },
  {
    path: "/kowing/createCoWorkDetail",
    method: "post",
    action: createCoWorkDetailHandler, //Ok
    middleWare: checkToken,
  },
  {
    path: "/kowing/updateCoWorkDetail",
    method: "post",
    action: updateCoWorkDetailHandler, //Ok
    middleWare: checkToken,
  },
  {
    path: "/kowing/updateRoomInternal",
    method: "post",
    action: updateRoomInternalHandler, //OK
    middleWare: checkToken,
  },
  {
    path: "/kowing/getRoomByCoWorkId",
    method: "post",
    action: getRoomByCoWorkIdHandler, //Ok
  },
  {
    path: "/kowing/getCoworkByUserId",
    method: "post",
    action: getCoworkByUserIdHandler, //OK
  },
  {
    path: "/kowing/showBookDetailInternalByCoWork",
    method: "post",
    action: showBookDetailInternalByCoWorkHandler, //OK
  },
  {
    path: "/kowing/createFacility",
    method: "post",
    action: createFacilityHandler, //OK
  },
  {
    path: "/kowing/getFacilities",
    method: "post",
    action: getFacilitiesHandler, //OK
  },
  {
    path: "/kowing/getStatusUserBookInternal",
    method: "post",
    action: getStatusUserBookInternalHandler, //Ok
  },
  {
    path: "/kowing/getCoworks",
    method: "post",
    action: getCoworksHandler, //OK
  },
  {
    path: "/kowing/createTimeOpenClose",
    method: "post",
    action: createTimeOpenCloseHandler, //OK
    middleWare: checkToken,
  },
  {
    path: "/kowing/getCalendarBookingByCoWorkId",
    method: "post",
    action: getCalendarBookingByCoWorkIdHandler, //OK
  },
  {
    path: "/kowing/loginUserExternal",
    method: "post",
    action: loginUserExternalHandler, //OK
  },
  {
    path: "/kowing/updateCalendarBookingByCoWorkId",
    method: "post",
    action: updateCalendarBookingByCoWorkIdHandler, //OK
    middleWare: checkToken,
  },
  {
    path: "/kowing/getCoWorkOpen24Hours",
    method: "post",
    action: getCoWorkOpen24HoursHandler, //OK
  },
  {
    path: "/kowing/forgetPasswordUserExternal",
    method: "post",
    action: forgetPasswordUserExternalHandler, //OK
  },
  {
    path: "/kowing/forgetPasswordUserInternal",
    method: "post",
    action: forgetPasswordUserInternalHandler, //OK
  },
  {
    path: "/kowing/deleteCoWork",
    method: "post",
    action: deleteCoWorkHandler, //OK
  },
  {
    path: "/kowing/bookDurationRoom",
    method: "post",
    action: bookDurationRoomHandler, //OK
  },
  {
    path: "/kowing/loginUserInternal",
    method: "post",
    action: loginUserInternalHandler, //OK
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
    action: showtheRoomBookedbyUserExternalHandler, //OK
  },
  {
    path: "/kowing/updateStatus",
    method: "post",
    action: updateStatusHandler, //OK
  },
  {
    path: "/kowing/getReserveByStat",
    method: "post",
    action: getBookRoomByPartnerIdAndStatusHandler, //OK
  },
];
