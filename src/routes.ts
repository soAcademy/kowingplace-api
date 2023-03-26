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
  loginUserInternalHandler,
  updateCalendarBookingByCoWorkIdHandler,
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
  },
  {
    path: "/kowing/createUserInternal",
    method: "post",
    action: createUserInternalHandler, //OK
  },
  {
    path: "/kowing/createRoomInternal",
    method: "post",
    action: createRoomInternalHandler, //Ok
  },
  {
    path: "/kowing/createCoWorkDetail",
    method: "post",
    action: createCoWorkDetailHandler, //Ok
  },
  {
    path: "/kowing/updateCoWorkDetail",
    method: "post",
    action: updateCoWorkDetailHandler, //Ok
  },
  {
    path: "/kowing/updateRoomInternal",
    method: "post",
    action: updateRoomInternalHandler, //OK
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
    path: "/kowing/getStatusUserBookInternal",
    method: "post",
    action: getStatusUserBookInternalHandler, //Ok
  },
  {
    path: "/kowing/getCoworks",
    method: "post",
    action: getCoworksHandler, //OK  //with random
    middleWare: checkToken,
  },
  {
    path: "/kowing/createTimeOpenClose",
    method: "post",
    action: createTimeOpenCloseHandler,
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
  },
];
