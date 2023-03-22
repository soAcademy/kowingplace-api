"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const kowingPlace_handler_1 = require("./kowingPlace/kowingPlace.handler");
exports.AppRoutes = [
    {
        path: "/server/boeing",
        method: "get",
        action: (req, res) => res.send("hello 7470"),
    },
    {
        path: "/kowing/createUserExternal",
        method: "post",
        action: kowingPlace_handler_1.createUserExternalHandler, //OK
    },
    {
        path: "/kowing/getCoWork24Hrs",
        method: "post",
        action: kowingPlace_handler_1.getCoWork24HrsHandler, //OK
    },
    {
        path: "/kowing/getCoWorkUserChoose",
        method: "post",
        action: kowingPlace_handler_1.getCoWorkUserChooseHandler, //Ok
    },
    {
        path: "/kowing/getVerifyCodeByUserConfirmBooking",
        method: "post",
        action: kowingPlace_handler_1.getVerifyCodeByUserConfirmBookingHandler,
    },
    {
        path: "/kowing/createUserInternal",
        method: "post",
        action: kowingPlace_handler_1.createUserInternalHandler, //OK
    },
    {
        path: "/kowing/createRoomInternal",
        method: "post",
        action: kowingPlace_handler_1.createRoomInternalHandler, //Ok
    },
    {
        path: "/kowing/createCoWorkDetail",
        method: "post",
        action: kowingPlace_handler_1.createCoWorkDetailHandler, //Ok
    },
    {
        path: "/kowing/updateCoWorkDetail",
        method: "post",
        action: kowingPlace_handler_1.updateCoWorkDetailHandler, //Ok
    },
    {
        path: "/kowing/updateRoomInternal",
        method: "post",
        action: kowingPlace_handler_1.updateRoomInternalHandler, //OK
    },
    {
        path: "/kowing/getRoomByCoWorkId",
        method: "post",
        action: kowingPlace_handler_1.getRoomByCoWorkIdHandler, //Ok
    },
    {
        path: "/kowing/getCoworkByUserId",
        method: "post",
        action: kowingPlace_handler_1.getCoworkByUserIdHandler, //OK
    },
    {
        path: "/kowing/showBookDetailInternalByCoWork",
        method: "post",
        action: kowingPlace_handler_1.showBookDetailInternalByCoWorkHandler, //OK
    },
    {
        path: "/kowing/createFacility",
        method: "post",
        action: kowingPlace_handler_1.createFacilityHandler, //OK
    },
    {
        path: "/kowing/getStatusUserBookInternal",
        method: "post",
        action: kowingPlace_handler_1.getStatusUserBookInternalHandler, //Ok
    },
    {
        path: "/kowing/getCoworks",
        method: "post",
        action: kowingPlace_handler_1.getCoworksHandler, //OK  //with random
    },
    {
        path: "/kowing/createOpenClose",
        method: "post",
        action: kowingPlace_handler_1.createOpenCloseHandler,
    },
];
