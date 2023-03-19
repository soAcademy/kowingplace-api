
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.10.1",
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
  branchToRoomId: 'branchToRoomId',
  startTime: 'startTime',
  roomRateId: 'roomRateId',
  status: 'status',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.BranchScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  location: 'location',
  tel: 'tel',
  picture: 'picture',
  userInternalId: 'userInternalId'
});

exports.Prisma.BranchToRoomScalarFieldEnum = makeEnum({
  id: 'id',
  branchId: 'branchId',
  roomId: 'roomId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.FacilityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.FacilityToRoomScalarFieldEnum = makeEnum({
  id: 'id',
  roomId: 'roomId',
  facilityId: 'facilityId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.OpenCloseScalarFieldEnum = makeEnum({
  id: 'id',
  open: 'open',
  close: 'close',
  allDay: 'allDay',
  branchId: 'branchId',
  day: 'day',
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
  time: 'time',
  roomId: 'roomId',
  createAt: 'createAt',
  updateAt: 'updateAt'
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


exports.Prisma.ModelName = makeEnum({
  UserExternal: 'UserExternal',
  Branch: 'Branch',
  UserInternal: 'UserInternal',
  Room: 'Room',
  RoomRate: 'RoomRate',
  Facility: 'Facility',
  FacilityToRoom: 'FacilityToRoom',
  BranchToRoom: 'BranchToRoom',
  BookRoom: 'BookRoom',
  OpenClose: 'OpenClose'
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
