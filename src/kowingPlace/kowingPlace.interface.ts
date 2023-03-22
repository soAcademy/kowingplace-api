import { number } from "fp-ts";
import * as t from "io-ts";

export const createUserExternalCodec = t.type({
  name: t.string,
  email: t.string,
  tel: t.string,
  password: t.string,
});
export interface ICreateUserExternal
  extends t.TypeOf<typeof createUserExternalCodec> {}
//-------------------------------------------------

export const getCoWorkUserChooseCodec = t.type({
  id: t.number,
});
export interface IGetCoWorkUserChoose
  extends t.TypeOf<typeof getCoWorkUserChooseCodec> {}

//-------------------------------------------------

export const getVerifyCodeByUserConfirmBookingCodec = t.type({
  startTime: t.string,
  roomId: t.number,
  coWorkId: t.number,
  userExId: t.number,
});
export interface IGetUserConfirmBooking
  extends t.TypeOf<typeof getVerifyCodeByUserConfirmBookingCodec> {}

//-------------------------------------------------

export const createUserInternalCodec = t.type({
  name: t.string,
  email: t.string,
  tel: t.string,
  password: t.string,
});
export interface ICreateUserInternal
  extends t.TypeOf<typeof createUserInternalCodec> {}

//-------------------------------------------------

export const showBookDetailInternalByCoWorkCodec = t.type({
  coWorkId: t.number,
});
export interface IShowBookDetailInternalByCoWork
  extends t.TypeOf<typeof showBookDetailInternalByCoWorkCodec> {}

//-------------------------------------------------

export const createRoomInternalCodec = t.type({
  name: t.string,
  capacity: t.number,
  coworkId: t.number,
  rates: t.array(
    t.type({
      price: t.number,
      durationId: t.number,
    })
  ),
});
export interface ICreateRoomInternal
  extends t.TypeOf<typeof createRoomInternalCodec> {}

//-------------------------------------------------

export const updateRoomInternalCodec = t.type({
  branchToRoomId: t.number,
  coWorkId: t.number,
  name: t.string,
  capacity: t.number,
  rates: t.array(
    t.type({
      price: t.number,
      duration: t.number,
      // roomRateId:number
    })
  ),
  //{ price: number; durationId: number; roomRateId: number }[]
});
export interface IUpdateRoomInternal
  extends t.TypeOf<typeof updateRoomInternalCodec> {}

//-------------------------------------------------

export const createFacilityInCodec = t.type({
  name: t.string,
});
export interface ICreateFacilityIn
  extends t.TypeOf<typeof createFacilityInCodec> {}

//-------------------------------------------------

export const createCoWorkDetailCodec = t.type({
  name: t.string,
  description: t.string,
  location: t.string,
  tel: t.string,
  picture: t.string,
  userInternalId: t.number,
});
export interface ICreateCoWorkDetail
  extends t.TypeOf<typeof createCoWorkDetailCodec> {}

//-------------------------------------------------

export const updateCoWorkDetailCodec = t.type({
  name: t.string,
  description: t.string,
  location: t.string,
  tel: t.string,
  picture: t.string,
  userInternalId: t.number,
  coWorkId: t.number,
});
export interface IUpdateCoWorkDetail
  extends t.TypeOf<typeof updateCoWorkDetailCodec> {}

//-------------------------------------------------

export const getStatusUserBookInternalCodec = t.type({
  coWorkId: t.number,
});
export interface IGetStatusUserBookInternal
  extends t.TypeOf<typeof getStatusUserBookInternalCodec> {}

//-------------------------------------------------

export const createFacilityCodec = t.type({
  name: t.string,
});
export interface ICreateFacility extends t.TypeOf<typeof createFacilityCodec> {}

//-------------------------------------------------

export const getRoomByCoWorkIdCodec = t.type({
  coWorkId: t.number,
});
export interface IGgetRoomByCoWorkIdCodec
  extends t.TypeOf<typeof getRoomByCoWorkIdCodec> {}

//-------------------------------------------------

export const getCoworkByUserIdCodec = t.type({
  userInternalId: t.number,
});
export interface IGetCoworkByUserId
  extends t.TypeOf<typeof getCoworkByUserIdCodec> {}

//-------------------------------------------------
