import {
  createUserExternalHandler,
  createUserInternalHandler,
  filterPriceHandler,
  getCoWork24HrsHandler,
  getCoWorkUserChooseHandler,
  getCoworkRecommentHandler,
  getUserConfirmBookingHandler,
} from "./kowingPlace/kowingPlace.handler";

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
  {
    path: "/kowing/filterPrice",
    method: "post",
    action: filterPriceHandler, //OK
  },
  //-------------- internal part ----------------
  {
    path: "/kowing/createUserInternal",
    method: "post",
    action: createUserInternalHandler, //OK
  },
  // {
  //   path: "/kowing/",
  //   method: "post",
  //   action: ,
  // },
];
