
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BookRoomScalarFieldEnum = makeEnum({
  id: 'id',
  coWorkId: 'coWorkId',
  startTime: 'startTime',
  roomRateId: 'roomRateId',
  status: 'status',
  createAt: 'createAt',
  updateAt: 'updateAt',
  userExternalId: 'userExternalId',
  vertifyBookingCodeId: 'vertifyBookingCodeId'
});

exports.Prisma.BranchToRoomScalarFieldEnum = makeEnum({
  id: 'id',
  coWorkId: 'coWorkId',
  roomId: 'roomId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.CoWorkScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  location: 'location',
  tel: 'tel',
  picture: 'picture',
  userInternalId: 'userInternalId'
});

exports.Prisma.DurationCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  duration: 'duration',
  createAt: 'createAt',
  updateAt: 'updateAt',
  openCloseId: 'openCloseId'
});

exports.Prisma.FacilityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.FacilityToCoWorkScalarFieldEnum = makeEnum({
  id: 'id',
  coWorkId: 'coWorkId',
  facilityId: 'facilityId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.OpenCloseScalarFieldEnum = makeEnum({
  id: 'id',
  openTimeMon: 'openTimeMon',
  closeTimeMon: 'closeTimeMon',
  isOpenMon: 'isOpenMon',
  isOpen24hoursMon: 'isOpen24hoursMon',
  openTimeTue: 'openTimeTue',
  closeTimeTue: 'closeTimeTue',
  isOpenTue: 'isOpenTue',
  isOpen24hoursTue: 'isOpen24hoursTue',
  openTimeWed: 'openTimeWed',
  closeTimeWed: 'closeTimeWed',
  isOpenWed: 'isOpenWed',
  isOpen24hoursWed: 'isOpen24hoursWed',
  openTimeThurs: 'openTimeThurs',
  closeTimeThurs: 'closeTimeThurs',
  isOpenThurs: 'isOpenThurs',
  isOpen24hoursThurs: 'isOpen24hoursThurs',
  openTimeFri: 'openTimeFri',
  closeTimeFri: 'closeTimeFri',
  isOpenFri: 'isOpenFri',
  isOpen24hoursFri: 'isOpen24hoursFri',
  openTimeSat: 'openTimeSat',
  closeTimeSat: 'closeTimeSat',
  isOpenSat: 'isOpenSat',
  isOpen24hoursSat: 'isOpen24hoursSat',
  openTimeSun: 'openTimeSun',
  closeTimeSun: 'closeTimeSun',
  isOpenSun: 'isOpenSun',
  isOpen24hoursSun: 'isOpen24hoursSun',
  coWorkId: 'coWorkId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RoomRateScalarFieldEnum = makeEnum({
  id: 'id',
  price: 'price',
  createAt: 'createAt',
  updateAt: 'updateAt',
  durationCategoryId: 'durationCategoryId',
  roomId: 'roomId'
});

exports.Prisma.RoomScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  capacity: 'capacity',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserExternalScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  tel: 'tel',
  password: 'password',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.UserInternalScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  tel: 'tel',
  password: 'password',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.VertifyBookingCodeScalarFieldEnum = makeEnum({
  id: 'id',
  verifyCode: 'verifyCode',
  bookdate: 'bookdate',
  createAt: 'createAt',
  updateAt: 'updateAt'
});


exports.Prisma.ModelName = makeEnum({
  UserExternal: 'UserExternal',
  CoWork: 'CoWork',
  UserInternal: 'UserInternal',
  Room: 'Room',
  RoomRate: 'RoomRate',
  durationCategory: 'durationCategory',
  Facility: 'Facility',
  FacilityToCoWork: 'FacilityToCoWork',
  BranchToRoom: 'BranchToRoom',
  BookRoom: 'BookRoom',
  OpenClose: 'OpenClose',
  VertifyBookingCode: 'VertifyBookingCode'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
