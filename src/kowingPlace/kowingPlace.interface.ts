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
