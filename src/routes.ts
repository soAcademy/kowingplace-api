import {
  createCoWorkDetailHandler,
  createRoomInternalHandler,
  createUserExternalHandler,
  createUserInternalHandler,
  getCoWork24HrsHandler,
  getCoWorkUserChooseHandler,
  getCoworkRecommentHandler,
  getUserConfirmBookingHandler,
  updateCoWorkDetailHandler,
} from "./kowingPlace/kowingPlace.handler";
import { createCoWorkDetail } from "./kowingPlace/kowingPlace.resolver";

export const AppRoutes = [
  {
    path: "/server/boeing",
    method: "get",
    action: (req: any, res: any) => res.send("hello 7470"),
  },
  //-------------- external part ----------------
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
    path: "/kowing/getCoworkRecomment",
    method: "post",
    action: getCoworkRecommentHandler,
  },
  {
    path: "/kowing/getCoWorkUserChoose",
    method: "post",
    action: getCoWorkUserChooseHandler,
  },
  {
    path: "/kowing/getUserConfirmBooking",
    method: "post",
    action: getUserConfirmBookingHandler,
  },

  //-------------- internal part ----------------
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
    action: createCoWorkDetailHandler,
  },
  {
    path: "/kowing/updateCoWorkDetail",
    method: "post",
    action: updateCoWorkDetailHandler,
  },
];
