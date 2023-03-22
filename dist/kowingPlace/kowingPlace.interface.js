"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoworkByUserIdCodec = exports.getRoomByCoWorkIdCodec = exports.createFacilityCodec = exports.getStatusUserBookInternalCodec = exports.updateCoWorkDetailCodec = exports.createCoWorkDetailCodec = exports.createFacilityInCodec = exports.updateRoomInternalCodec = exports.createRoomInternalCodec = exports.showBookDetailInternalByCoWorkCodec = exports.createUserInternalCodec = exports.getVerifyCodeByUserConfirmBookingCodec = exports.getCoWorkUserChooseCodec = exports.createUserExternalCodec = void 0;
const t = __importStar(require("io-ts"));
exports.createUserExternalCodec = t.type({
    name: t.string,
    email: t.string,
    tel: t.string,
    password: t.string,
});
//-------------------------------------------------
exports.getCoWorkUserChooseCodec = t.type({
    id: t.number,
});
//-------------------------------------------------
exports.getVerifyCodeByUserConfirmBookingCodec = t.type({
    startTime: t.string,
    roomId: t.number,
    coWorkId: t.number,
    userExId: t.number,
});
//-------------------------------------------------
exports.createUserInternalCodec = t.type({
    name: t.string,
    email: t.string,
    tel: t.string,
    password: t.string,
});
//-------------------------------------------------
exports.showBookDetailInternalByCoWorkCodec = t.type({
    coWorkId: t.number,
});
//-------------------------------------------------
exports.createRoomInternalCodec = t.type({
    name: t.string,
    capacity: t.number,
    coworkId: t.number,
    rates: t.array(t.type({
        price: t.number,
        durationId: t.number,
    })),
});
//-------------------------------------------------
exports.updateRoomInternalCodec = t.type({
    branchToRoomId: t.number,
    coWorkId: t.number,
    name: t.string,
    capacity: t.number,
    rates: t.array(t.type({
        price: t.number,
        duration: t.number,
        // roomRateId:number
    })),
    //{ price: number; durationId: number; roomRateId: number }[]
});
//-------------------------------------------------
exports.createFacilityInCodec = t.type({
    name: t.string,
});
//-------------------------------------------------
exports.createCoWorkDetailCodec = t.type({
    name: t.string,
    description: t.string,
    location: t.string,
    tel: t.string,
    picture: t.string,
    userInternalId: t.number,
});
//-------------------------------------------------
exports.updateCoWorkDetailCodec = t.type({
    name: t.string,
    description: t.string,
    location: t.string,
    tel: t.string,
    picture: t.string,
    userInternalId: t.number,
    coWorkId: t.number,
});
//-------------------------------------------------
exports.getStatusUserBookInternalCodec = t.type({
    bookRoomId: t.number,
});
//-------------------------------------------------
exports.createFacilityCodec = t.type({
    name: t.string,
});
//-------------------------------------------------
exports.getRoomByCoWorkIdCodec = t.type({
    coWorkId: t.number,
});
//-------------------------------------------------
exports.getCoworkByUserIdCodec = t.type({
    userInternalId: t.number,
});
//-------------------------------------------------
