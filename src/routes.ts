import {
  createCoWorkDetailHandler,
  createRoomInternalHandler,
  createUserExternalHandler,
  createUserInternalHandler,
  getCoWork24HrsHandler,
  getCoWorkUserChooseHandler,
  getCoworkByUserIdHandler,
  getCoworkHandler,
  getRoomByCoWorkIdHandler,
  updateCoWorkDetailHandler,
  updateRoomInternalHandler,
  getVerifyCodeByUserConfirmBookingHandler,
  showBookDetailInternalByCoWorkHandler,
  getStatusUserBookInternalHandler,
} from "./kowingPlace/kowingPlace.handler";
import { createCoWorkDetail } from "./kowingPlace/kowingPlace.resolver";

export const AppRoutes = [
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
    path: "/kowing/getCoWork24Hrs",
    method: "post",
    action: getCoWork24HrsHandler, //OK
  },
  {
    path: "/kowing/getCowork",
    method: "post",
    action: getCoworkHandler, //OK
  },
  {
    path: "/kowing/getCoWorkUserChoose",
    method: "post",
    action: getCoWorkUserChooseHandler, //Ok
  },
  {
    path: "/kowing/getVerifyCodeByUserConfirmBooking",
    method: "post",
    action: getVerifyCodeByUserConfirmBookingHandler,
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
    path: "/kowing/getStatusUserBookInternal",
    method: "post",
    action: getStatusUserBookInternalHandler, //OK
  },
];
