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

export const filterPriceCodec = t.type({
  roomId: t.number,
});
export interface IFilterPrice extends t.TypeOf<typeof filterPriceCodec> {}

//-------------------------------------------------

export const getCoWorkUserChooseCodec = t.type({
  id: t.number,
});
export interface IGetCoWorkUserChoose
  extends t.TypeOf<typeof getCoWorkUserChooseCodec> {}

//-------------------------------------------------

export const getUserConfirmBookingCodec = t.type({
  startTime: t.string,
  time: t.string,
  roomId: t.number,
  coWorkId: t.number,
  userExId: t.number,
});
export interface IGetUserConfirmBooking
  extends t.TypeOf<typeof getUserConfirmBookingCodec> {}

//-------------------------------------------------
