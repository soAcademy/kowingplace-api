
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model UserExternal
 * 
 */
export type UserExternal = {
  id: number
  name: string
  email: string
  tel: string
  password: string
  createAt: Date
  updateAt: Date
}

/**
 * Model CoWork
 * 
 */
export type CoWork = {
  id: number
  name: string
  description: string
  location: string
  tel: number
  picture: string
  userInternalId: number
}

/**
 * Model UserInternal
 * 
 */
export type UserInternal = {
  id: number
  name: string
  email: string
  tel: number
  password: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Room
 * 
 */
export type Room = {
  id: number
  name: string
  capacity: number
  createAt: Date
  updateAt: Date
}

/**
 * Model RoomRate
 * 
 */
export type RoomRate = {
  id: number
  price: number
  time: string
  roomId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Facility
 * 
 */
export type Facility = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model FacilityToRoom
 * 
 */
export type FacilityToRoom = {
  id: number
  roomId: number
  facilityId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model BranchToRoom
 * 
 */
export type BranchToRoom = {
  id: number
  coWorkId: number
  roomId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model BookRoom
 * 
 */
export type BookRoom = {
  id: number
  branchToRoomId: number | null
  startTime: Date
  roomRateId: number
  status: string
  createAt: Date
  updateAt: Date
  userExternalId: number
  vertifyBookingCodeId: number
}

/**
 * Model OpenClose
 * 
 */
export type OpenClose = {
  id: number
  openTimeMon: number
  closeTimeMon: number
  isOpenMon: boolean
  isOpen24hoursMon: boolean
  openTimeTue: number
  closeTimeTue: number
  isOpenTue: boolean
  isOpen24hoursTue: boolean
  openTimeWed: number
  closeTimeWed: number
  isOpenWed: boolean
  isOpen24hoursWed: boolean
  openTimeThurs: number
  closeTimeThurs: number
  isOpenThurs: boolean
  isOpen24hoursThurs: boolean
  openTimeFri: number
  closeTimeFri: number
  isOpenFri: boolean
  isOpen24hoursFri: boolean
  openTimeSat: number
  closeTimeSat: number
  isOpenSat: boolean
  isOpen24hoursSat: boolean
  openTimeSun: number
  closeTimeSun: number
  isOpenSun: boolean
  isOpen24hoursSun: boolean
  coWorkId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model VertifyBookingCode
 * 
 */
export type VertifyBookingCode = {
  id: number
  verifyCode: string
  bookdate: Date
  createAt: Date
  updateAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserExternals
 * const userExternals = await prisma.userExternal.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserExternals
   * const userExternals = await prisma.userExternal.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.userExternal`: Exposes CRUD operations for the **UserExternal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExternals
    * const userExternals = await prisma.userExternal.findMany()
    * ```
    */
  get userExternal(): Prisma.UserExternalDelegate<GlobalReject>;

  /**
   * `prisma.coWork`: Exposes CRUD operations for the **CoWork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoWorks
    * const coWorks = await prisma.coWork.findMany()
    * ```
    */
  get coWork(): Prisma.CoWorkDelegate<GlobalReject>;

  /**
   * `prisma.userInternal`: Exposes CRUD operations for the **UserInternal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInternals
    * const userInternals = await prisma.userInternal.findMany()
    * ```
    */
  get userInternal(): Prisma.UserInternalDelegate<GlobalReject>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<GlobalReject>;

  /**
   * `prisma.roomRate`: Exposes CRUD operations for the **RoomRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomRates
    * const roomRates = await prisma.roomRate.findMany()
    * ```
    */
  get roomRate(): Prisma.RoomRateDelegate<GlobalReject>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<GlobalReject>;

  /**
   * `prisma.facilityToRoom`: Exposes CRUD operations for the **FacilityToRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityToRooms
    * const facilityToRooms = await prisma.facilityToRoom.findMany()
    * ```
    */
  get facilityToRoom(): Prisma.FacilityToRoomDelegate<GlobalReject>;

  /**
   * `prisma.branchToRoom`: Exposes CRUD operations for the **BranchToRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BranchToRooms
    * const branchToRooms = await prisma.branchToRoom.findMany()
    * ```
    */
  get branchToRoom(): Prisma.BranchToRoomDelegate<GlobalReject>;

  /**
   * `prisma.bookRoom`: Exposes CRUD operations for the **BookRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookRooms
    * const bookRooms = await prisma.bookRoom.findMany()
    * ```
    */
  get bookRoom(): Prisma.BookRoomDelegate<GlobalReject>;

  /**
   * `prisma.openClose`: Exposes CRUD operations for the **OpenClose** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpenCloses
    * const openCloses = await prisma.openClose.findMany()
    * ```
    */
  get openClose(): Prisma.OpenCloseDelegate<GlobalReject>;

  /**
   * `prisma.vertifyBookingCode`: Exposes CRUD operations for the **VertifyBookingCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VertifyBookingCodes
    * const vertifyBookingCodes = await prisma.vertifyBookingCode.findMany()
    * ```
    */
  get vertifyBookingCode(): Prisma.VertifyBookingCodeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserExternal: 'UserExternal',
    CoWork: 'CoWork',
    UserInternal: 'UserInternal',
    Room: 'Room',
    RoomRate: 'RoomRate',
    Facility: 'Facility',
    FacilityToRoom: 'FacilityToRoom',
    BranchToRoom: 'BranchToRoom',
    BookRoom: 'BookRoom',
    OpenClose: 'OpenClose',
    VertifyBookingCode: 'VertifyBookingCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserExternalCountOutputType
   */


  export type UserExternalCountOutputType = {
    BookRoom: number
  }

  export type UserExternalCountOutputTypeSelect = {
    BookRoom?: boolean
  }

  export type UserExternalCountOutputTypeGetPayload<S extends boolean | null | undefined | UserExternalCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserExternalCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserExternalCountOutputTypeArgs)
    ? UserExternalCountOutputType 
    : S extends { select: any } & (UserExternalCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserExternalCountOutputType ? UserExternalCountOutputType[P] : never
  } 
      : UserExternalCountOutputType




  // Custom InputTypes

  /**
   * UserExternalCountOutputType without action
   */
  export type UserExternalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserExternalCountOutputType
     */
    select?: UserExternalCountOutputTypeSelect | null
  }



  /**
   * Count Type CoWorkCountOutputType
   */


  export type CoWorkCountOutputType = {
    BranchToRoom: number
  }

  export type CoWorkCountOutputTypeSelect = {
    BranchToRoom?: boolean
  }

  export type CoWorkCountOutputTypeGetPayload<S extends boolean | null | undefined | CoWorkCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CoWorkCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CoWorkCountOutputTypeArgs)
    ? CoWorkCountOutputType 
    : S extends { select: any } & (CoWorkCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CoWorkCountOutputType ? CoWorkCountOutputType[P] : never
  } 
      : CoWorkCountOutputType




  // Custom InputTypes

  /**
   * CoWorkCountOutputType without action
   */
  export type CoWorkCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CoWorkCountOutputType
     */
    select?: CoWorkCountOutputTypeSelect | null
  }



  /**
   * Count Type UserInternalCountOutputType
   */


  export type UserInternalCountOutputType = {
    coWork: number
  }

  export type UserInternalCountOutputTypeSelect = {
    coWork?: boolean
  }

  export type UserInternalCountOutputTypeGetPayload<S extends boolean | null | undefined | UserInternalCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserInternalCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserInternalCountOutputTypeArgs)
    ? UserInternalCountOutputType 
    : S extends { select: any } & (UserInternalCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserInternalCountOutputType ? UserInternalCountOutputType[P] : never
  } 
      : UserInternalCountOutputType




  // Custom InputTypes

  /**
   * UserInternalCountOutputType without action
   */
  export type UserInternalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserInternalCountOutputType
     */
    select?: UserInternalCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomCountOutputType
   */


  export type RoomCountOutputType = {
    RoomPrice: number
    FacilityToRoom: number
    BranchToRoom: number
  }

  export type RoomCountOutputTypeSelect = {
    RoomPrice?: boolean
    FacilityToRoom?: boolean
    BranchToRoom?: boolean
  }

  export type RoomCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomCountOutputTypeArgs)
    ? RoomCountOutputType 
    : S extends { select: any } & (RoomCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomCountOutputType ? RoomCountOutputType[P] : never
  } 
      : RoomCountOutputType




  // Custom InputTypes

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomRateCountOutputType
   */


  export type RoomRateCountOutputType = {
    BookRoom: number
  }

  export type RoomRateCountOutputTypeSelect = {
    BookRoom?: boolean
  }

  export type RoomRateCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomRateCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomRateCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomRateCountOutputTypeArgs)
    ? RoomRateCountOutputType 
    : S extends { select: any } & (RoomRateCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomRateCountOutputType ? RoomRateCountOutputType[P] : never
  } 
      : RoomRateCountOutputType




  // Custom InputTypes

  /**
   * RoomRateCountOutputType without action
   */
  export type RoomRateCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomRateCountOutputType
     */
    select?: RoomRateCountOutputTypeSelect | null
  }



  /**
   * Count Type FacilityCountOutputType
   */


  export type FacilityCountOutputType = {
    FacilityToRoom: number
  }

  export type FacilityCountOutputTypeSelect = {
    FacilityToRoom?: boolean
  }

  export type FacilityCountOutputTypeGetPayload<S extends boolean | null | undefined | FacilityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FacilityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FacilityCountOutputTypeArgs)
    ? FacilityCountOutputType 
    : S extends { select: any } & (FacilityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FacilityCountOutputType ? FacilityCountOutputType[P] : never
  } 
      : FacilityCountOutputType




  // Custom InputTypes

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect | null
  }



  /**
   * Count Type BranchToRoomCountOutputType
   */


  export type BranchToRoomCountOutputType = {
    BookRoom: number
  }

  export type BranchToRoomCountOutputTypeSelect = {
    BookRoom?: boolean
  }

  export type BranchToRoomCountOutputTypeGetPayload<S extends boolean | null | undefined | BranchToRoomCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BranchToRoomCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BranchToRoomCountOutputTypeArgs)
    ? BranchToRoomCountOutputType 
    : S extends { select: any } & (BranchToRoomCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BranchToRoomCountOutputType ? BranchToRoomCountOutputType[P] : never
  } 
      : BranchToRoomCountOutputType




  // Custom InputTypes

  /**
   * BranchToRoomCountOutputType without action
   */
  export type BranchToRoomCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoomCountOutputType
     */
    select?: BranchToRoomCountOutputTypeSelect | null
  }



  /**
   * Count Type VertifyBookingCodeCountOutputType
   */


  export type VertifyBookingCodeCountOutputType = {
    BookRoom: number
  }

  export type VertifyBookingCodeCountOutputTypeSelect = {
    BookRoom?: boolean
  }

  export type VertifyBookingCodeCountOutputTypeGetPayload<S extends boolean | null | undefined | VertifyBookingCodeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VertifyBookingCodeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VertifyBookingCodeCountOutputTypeArgs)
    ? VertifyBookingCodeCountOutputType 
    : S extends { select: any } & (VertifyBookingCodeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VertifyBookingCodeCountOutputType ? VertifyBookingCodeCountOutputType[P] : never
  } 
      : VertifyBookingCodeCountOutputType




  // Custom InputTypes

  /**
   * VertifyBookingCodeCountOutputType without action
   */
  export type VertifyBookingCodeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCodeCountOutputType
     */
    select?: VertifyBookingCodeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model UserExternal
   */


  export type AggregateUserExternal = {
    _count: UserExternalCountAggregateOutputType | null
    _avg: UserExternalAvgAggregateOutputType | null
    _sum: UserExternalSumAggregateOutputType | null
    _min: UserExternalMinAggregateOutputType | null
    _max: UserExternalMaxAggregateOutputType | null
  }

  export type UserExternalAvgAggregateOutputType = {
    id: number | null
  }

  export type UserExternalSumAggregateOutputType = {
    id: number | null
  }

  export type UserExternalMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserExternalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserExternalCountAggregateOutputType = {
    id: number
    name: number
    email: number
    tel: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserExternalAvgAggregateInputType = {
    id?: true
  }

  export type UserExternalSumAggregateInputType = {
    id?: true
  }

  export type UserExternalMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserExternalMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserExternalCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserExternalAggregateArgs = {
    /**
     * Filter which UserExternal to aggregate.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExternals
    **/
    _count?: true | UserExternalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserExternalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserExternalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExternalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExternalMaxAggregateInputType
  }

  export type GetUserExternalAggregateType<T extends UserExternalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExternal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExternal[P]>
      : GetScalarType<T[P], AggregateUserExternal[P]>
  }




  export type UserExternalGroupByArgs = {
    where?: UserExternalWhereInput
    orderBy?: Enumerable<UserExternalOrderByWithAggregationInput>
    by: UserExternalScalarFieldEnum[]
    having?: UserExternalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExternalCountAggregateInputType | true
    _avg?: UserExternalAvgAggregateInputType
    _sum?: UserExternalSumAggregateInputType
    _min?: UserExternalMinAggregateInputType
    _max?: UserExternalMaxAggregateInputType
  }


  export type UserExternalGroupByOutputType = {
    id: number
    name: string
    email: string
    tel: string
    password: string
    createAt: Date
    updateAt: Date
    _count: UserExternalCountAggregateOutputType | null
    _avg: UserExternalAvgAggregateOutputType | null
    _sum: UserExternalSumAggregateOutputType | null
    _min: UserExternalMinAggregateOutputType | null
    _max: UserExternalMaxAggregateOutputType | null
  }

  type GetUserExternalGroupByPayload<T extends UserExternalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserExternalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExternalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExternalGroupByOutputType[P]>
            : GetScalarType<T[P], UserExternalGroupByOutputType[P]>
        }
      >
    >


  export type UserExternalSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    BookRoom?: boolean | UserExternal$BookRoomArgs
    _count?: boolean | UserExternalCountOutputTypeArgs
  }


  export type UserExternalInclude = {
    BookRoom?: boolean | UserExternal$BookRoomArgs
    _count?: boolean | UserExternalCountOutputTypeArgs
  }

  export type UserExternalGetPayload<S extends boolean | null | undefined | UserExternalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserExternal :
    S extends undefined ? never :
    S extends { include: any } & (UserExternalArgs | UserExternalFindManyArgs)
    ? UserExternal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserExternalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserExternalArgs | UserExternalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserExternalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserExternal ? UserExternal[P] : never
  } 
      : UserExternal


  type UserExternalCountArgs = 
    Omit<UserExternalFindManyArgs, 'select' | 'include'> & {
      select?: UserExternalCountAggregateInputType | true
    }

  export interface UserExternalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserExternal that matches the filter.
     * @param {UserExternalFindUniqueArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserExternalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserExternalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserExternal'> extends True ? Prisma__UserExternalClient<UserExternalGetPayload<T>> : Prisma__UserExternalClient<UserExternalGetPayload<T> | null, null>

    /**
     * Find one UserExternal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserExternalFindUniqueOrThrowArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserExternalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserExternalFindUniqueOrThrowArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Find the first UserExternal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalFindFirstArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserExternalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserExternalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserExternal'> extends True ? Prisma__UserExternalClient<UserExternalGetPayload<T>> : Prisma__UserExternalClient<UserExternalGetPayload<T> | null, null>

    /**
     * Find the first UserExternal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalFindFirstOrThrowArgs} args - Arguments to find a UserExternal
     * @example
     * // Get one UserExternal
     * const userExternal = await prisma.userExternal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserExternalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserExternalFindFirstOrThrowArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Find zero or more UserExternals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExternals
     * const userExternals = await prisma.userExternal.findMany()
     * 
     * // Get first 10 UserExternals
     * const userExternals = await prisma.userExternal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExternalWithIdOnly = await prisma.userExternal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserExternalFindManyArgs>(
      args?: SelectSubset<T, UserExternalFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserExternalGetPayload<T>>>

    /**
     * Create a UserExternal.
     * @param {UserExternalCreateArgs} args - Arguments to create a UserExternal.
     * @example
     * // Create one UserExternal
     * const UserExternal = await prisma.userExternal.create({
     *   data: {
     *     // ... data to create a UserExternal
     *   }
     * })
     * 
    **/
    create<T extends UserExternalCreateArgs>(
      args: SelectSubset<T, UserExternalCreateArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Create many UserExternals.
     *     @param {UserExternalCreateManyArgs} args - Arguments to create many UserExternals.
     *     @example
     *     // Create many UserExternals
     *     const userExternal = await prisma.userExternal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserExternalCreateManyArgs>(
      args?: SelectSubset<T, UserExternalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserExternal.
     * @param {UserExternalDeleteArgs} args - Arguments to delete one UserExternal.
     * @example
     * // Delete one UserExternal
     * const UserExternal = await prisma.userExternal.delete({
     *   where: {
     *     // ... filter to delete one UserExternal
     *   }
     * })
     * 
    **/
    delete<T extends UserExternalDeleteArgs>(
      args: SelectSubset<T, UserExternalDeleteArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Update one UserExternal.
     * @param {UserExternalUpdateArgs} args - Arguments to update one UserExternal.
     * @example
     * // Update one UserExternal
     * const userExternal = await prisma.userExternal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserExternalUpdateArgs>(
      args: SelectSubset<T, UserExternalUpdateArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Delete zero or more UserExternals.
     * @param {UserExternalDeleteManyArgs} args - Arguments to filter UserExternals to delete.
     * @example
     * // Delete a few UserExternals
     * const { count } = await prisma.userExternal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserExternalDeleteManyArgs>(
      args?: SelectSubset<T, UserExternalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExternals
     * const userExternal = await prisma.userExternal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserExternalUpdateManyArgs>(
      args: SelectSubset<T, UserExternalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExternal.
     * @param {UserExternalUpsertArgs} args - Arguments to update or create a UserExternal.
     * @example
     * // Update or create a UserExternal
     * const userExternal = await prisma.userExternal.upsert({
     *   create: {
     *     // ... data to create a UserExternal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExternal we want to update
     *   }
     * })
    **/
    upsert<T extends UserExternalUpsertArgs>(
      args: SelectSubset<T, UserExternalUpsertArgs>
    ): Prisma__UserExternalClient<UserExternalGetPayload<T>>

    /**
     * Count the number of UserExternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalCountArgs} args - Arguments to filter UserExternals to count.
     * @example
     * // Count the number of UserExternals
     * const count = await prisma.userExternal.count({
     *   where: {
     *     // ... the filter for the UserExternals we want to count
     *   }
     * })
    **/
    count<T extends UserExternalCountArgs>(
      args?: Subset<T, UserExternalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExternalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExternalAggregateArgs>(args: Subset<T, UserExternalAggregateArgs>): Prisma.PrismaPromise<GetUserExternalAggregateType<T>>

    /**
     * Group by UserExternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExternalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExternalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExternalGroupByArgs['orderBy'] }
        : { orderBy?: UserExternalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExternalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExternalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExternal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserExternalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    BookRoom<T extends UserExternal$BookRoomArgs= {}>(args?: Subset<T, UserExternal$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserExternal base type for findUnique actions
   */
  export type UserExternalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where: UserExternalWhereUniqueInput
  }

  /**
   * UserExternal findUnique
   */
  export interface UserExternalFindUniqueArgs extends UserExternalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserExternal findUniqueOrThrow
   */
  export type UserExternalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where: UserExternalWhereUniqueInput
  }


  /**
   * UserExternal base type for findFirst actions
   */
  export type UserExternalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExternals.
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExternals.
     */
    distinct?: Enumerable<UserExternalScalarFieldEnum>
  }

  /**
   * UserExternal findFirst
   */
  export interface UserExternalFindFirstArgs extends UserExternalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserExternal findFirstOrThrow
   */
  export type UserExternalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternal to fetch.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExternals.
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExternals.
     */
    distinct?: Enumerable<UserExternalScalarFieldEnum>
  }


  /**
   * UserExternal findMany
   */
  export type UserExternalFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter, which UserExternals to fetch.
     */
    where?: UserExternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExternals to fetch.
     */
    orderBy?: Enumerable<UserExternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExternals.
     */
    cursor?: UserExternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExternals.
     */
    skip?: number
    distinct?: Enumerable<UserExternalScalarFieldEnum>
  }


  /**
   * UserExternal create
   */
  export type UserExternalCreateArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * The data needed to create a UserExternal.
     */
    data: XOR<UserExternalCreateInput, UserExternalUncheckedCreateInput>
  }


  /**
   * UserExternal createMany
   */
  export type UserExternalCreateManyArgs = {
    /**
     * The data used to create many UserExternals.
     */
    data: Enumerable<UserExternalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserExternal update
   */
  export type UserExternalUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * The data needed to update a UserExternal.
     */
    data: XOR<UserExternalUpdateInput, UserExternalUncheckedUpdateInput>
    /**
     * Choose, which UserExternal to update.
     */
    where: UserExternalWhereUniqueInput
  }


  /**
   * UserExternal updateMany
   */
  export type UserExternalUpdateManyArgs = {
    /**
     * The data used to update UserExternals.
     */
    data: XOR<UserExternalUpdateManyMutationInput, UserExternalUncheckedUpdateManyInput>
    /**
     * Filter which UserExternals to update
     */
    where?: UserExternalWhereInput
  }


  /**
   * UserExternal upsert
   */
  export type UserExternalUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * The filter to search for the UserExternal to update in case it exists.
     */
    where: UserExternalWhereUniqueInput
    /**
     * In case the UserExternal found by the `where` argument doesn't exist, create a new UserExternal with this data.
     */
    create: XOR<UserExternalCreateInput, UserExternalUncheckedCreateInput>
    /**
     * In case the UserExternal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExternalUpdateInput, UserExternalUncheckedUpdateInput>
  }


  /**
   * UserExternal delete
   */
  export type UserExternalDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
    /**
     * Filter which UserExternal to delete.
     */
    where: UserExternalWhereUniqueInput
  }


  /**
   * UserExternal deleteMany
   */
  export type UserExternalDeleteManyArgs = {
    /**
     * Filter which UserExternals to delete
     */
    where?: UserExternalWhereInput
  }


  /**
   * UserExternal.BookRoom
   */
  export type UserExternal$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * UserExternal without action
   */
  export type UserExternalArgs = {
    /**
     * Select specific fields to fetch from the UserExternal
     */
    select?: UserExternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExternalInclude | null
  }



  /**
   * Model CoWork
   */


  export type AggregateCoWork = {
    _count: CoWorkCountAggregateOutputType | null
    _avg: CoWorkAvgAggregateOutputType | null
    _sum: CoWorkSumAggregateOutputType | null
    _min: CoWorkMinAggregateOutputType | null
    _max: CoWorkMaxAggregateOutputType | null
  }

  export type CoWorkAvgAggregateOutputType = {
    id: number | null
    tel: number | null
    userInternalId: number | null
  }

  export type CoWorkSumAggregateOutputType = {
    id: number | null
    tel: number | null
    userInternalId: number | null
  }

  export type CoWorkMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    location: string | null
    tel: number | null
    picture: string | null
    userInternalId: number | null
  }

  export type CoWorkMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    location: string | null
    tel: number | null
    picture: string | null
    userInternalId: number | null
  }

  export type CoWorkCountAggregateOutputType = {
    id: number
    name: number
    description: number
    location: number
    tel: number
    picture: number
    userInternalId: number
    _all: number
  }


  export type CoWorkAvgAggregateInputType = {
    id?: true
    tel?: true
    userInternalId?: true
  }

  export type CoWorkSumAggregateInputType = {
    id?: true
    tel?: true
    userInternalId?: true
  }

  export type CoWorkMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    tel?: true
    picture?: true
    userInternalId?: true
  }

  export type CoWorkMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    tel?: true
    picture?: true
    userInternalId?: true
  }

  export type CoWorkCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    location?: true
    tel?: true
    picture?: true
    userInternalId?: true
    _all?: true
  }

  export type CoWorkAggregateArgs = {
    /**
     * Filter which CoWork to aggregate.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoWorks
    **/
    _count?: true | CoWorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoWorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoWorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoWorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoWorkMaxAggregateInputType
  }

  export type GetCoWorkAggregateType<T extends CoWorkAggregateArgs> = {
        [P in keyof T & keyof AggregateCoWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoWork[P]>
      : GetScalarType<T[P], AggregateCoWork[P]>
  }




  export type CoWorkGroupByArgs = {
    where?: CoWorkWhereInput
    orderBy?: Enumerable<CoWorkOrderByWithAggregationInput>
    by: CoWorkScalarFieldEnum[]
    having?: CoWorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoWorkCountAggregateInputType | true
    _avg?: CoWorkAvgAggregateInputType
    _sum?: CoWorkSumAggregateInputType
    _min?: CoWorkMinAggregateInputType
    _max?: CoWorkMaxAggregateInputType
  }


  export type CoWorkGroupByOutputType = {
    id: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternalId: number
    _count: CoWorkCountAggregateOutputType | null
    _avg: CoWorkAvgAggregateOutputType | null
    _sum: CoWorkSumAggregateOutputType | null
    _min: CoWorkMinAggregateOutputType | null
    _max: CoWorkMaxAggregateOutputType | null
  }

  type GetCoWorkGroupByPayload<T extends CoWorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CoWorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoWorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoWorkGroupByOutputType[P]>
            : GetScalarType<T[P], CoWorkGroupByOutputType[P]>
        }
      >
    >


  export type CoWorkSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    location?: boolean
    tel?: boolean
    picture?: boolean
    userInternalId?: boolean
    userInternal?: boolean | UserInternalArgs
    BranchToRoom?: boolean | CoWork$BranchToRoomArgs
    OpenClose?: boolean | OpenCloseArgs
    _count?: boolean | CoWorkCountOutputTypeArgs
  }


  export type CoWorkInclude = {
    userInternal?: boolean | UserInternalArgs
    BranchToRoom?: boolean | CoWork$BranchToRoomArgs
    OpenClose?: boolean | OpenCloseArgs
    _count?: boolean | CoWorkCountOutputTypeArgs
  }

  export type CoWorkGetPayload<S extends boolean | null | undefined | CoWorkArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CoWork :
    S extends undefined ? never :
    S extends { include: any } & (CoWorkArgs | CoWorkFindManyArgs)
    ? CoWork  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'userInternal' ? UserInternalGetPayload<S['include'][P]> :
        P extends 'BranchToRoom' ? Array < BranchToRoomGetPayload<S['include'][P]>>  :
        P extends 'OpenClose' ? OpenCloseGetPayload<S['include'][P]> | null :
        P extends '_count' ? CoWorkCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CoWorkArgs | CoWorkFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'userInternal' ? UserInternalGetPayload<S['select'][P]> :
        P extends 'BranchToRoom' ? Array < BranchToRoomGetPayload<S['select'][P]>>  :
        P extends 'OpenClose' ? OpenCloseGetPayload<S['select'][P]> | null :
        P extends '_count' ? CoWorkCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CoWork ? CoWork[P] : never
  } 
      : CoWork


  type CoWorkCountArgs = 
    Omit<CoWorkFindManyArgs, 'select' | 'include'> & {
      select?: CoWorkCountAggregateInputType | true
    }

  export interface CoWorkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CoWork that matches the filter.
     * @param {CoWorkFindUniqueArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoWorkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CoWorkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CoWork'> extends True ? Prisma__CoWorkClient<CoWorkGetPayload<T>> : Prisma__CoWorkClient<CoWorkGetPayload<T> | null, null>

    /**
     * Find one CoWork that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CoWorkFindUniqueOrThrowArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoWorkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CoWorkFindUniqueOrThrowArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Find the first CoWork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkFindFirstArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoWorkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CoWorkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CoWork'> extends True ? Prisma__CoWorkClient<CoWorkGetPayload<T>> : Prisma__CoWorkClient<CoWorkGetPayload<T> | null, null>

    /**
     * Find the first CoWork that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkFindFirstOrThrowArgs} args - Arguments to find a CoWork
     * @example
     * // Get one CoWork
     * const coWork = await prisma.coWork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoWorkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoWorkFindFirstOrThrowArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Find zero or more CoWorks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoWorks
     * const coWorks = await prisma.coWork.findMany()
     * 
     * // Get first 10 CoWorks
     * const coWorks = await prisma.coWork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coWorkWithIdOnly = await prisma.coWork.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoWorkFindManyArgs>(
      args?: SelectSubset<T, CoWorkFindManyArgs>
    ): Prisma.PrismaPromise<Array<CoWorkGetPayload<T>>>

    /**
     * Create a CoWork.
     * @param {CoWorkCreateArgs} args - Arguments to create a CoWork.
     * @example
     * // Create one CoWork
     * const CoWork = await prisma.coWork.create({
     *   data: {
     *     // ... data to create a CoWork
     *   }
     * })
     * 
    **/
    create<T extends CoWorkCreateArgs>(
      args: SelectSubset<T, CoWorkCreateArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Create many CoWorks.
     *     @param {CoWorkCreateManyArgs} args - Arguments to create many CoWorks.
     *     @example
     *     // Create many CoWorks
     *     const coWork = await prisma.coWork.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoWorkCreateManyArgs>(
      args?: SelectSubset<T, CoWorkCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoWork.
     * @param {CoWorkDeleteArgs} args - Arguments to delete one CoWork.
     * @example
     * // Delete one CoWork
     * const CoWork = await prisma.coWork.delete({
     *   where: {
     *     // ... filter to delete one CoWork
     *   }
     * })
     * 
    **/
    delete<T extends CoWorkDeleteArgs>(
      args: SelectSubset<T, CoWorkDeleteArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Update one CoWork.
     * @param {CoWorkUpdateArgs} args - Arguments to update one CoWork.
     * @example
     * // Update one CoWork
     * const coWork = await prisma.coWork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoWorkUpdateArgs>(
      args: SelectSubset<T, CoWorkUpdateArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Delete zero or more CoWorks.
     * @param {CoWorkDeleteManyArgs} args - Arguments to filter CoWorks to delete.
     * @example
     * // Delete a few CoWorks
     * const { count } = await prisma.coWork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoWorkDeleteManyArgs>(
      args?: SelectSubset<T, CoWorkDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoWorks
     * const coWork = await prisma.coWork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoWorkUpdateManyArgs>(
      args: SelectSubset<T, CoWorkUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoWork.
     * @param {CoWorkUpsertArgs} args - Arguments to update or create a CoWork.
     * @example
     * // Update or create a CoWork
     * const coWork = await prisma.coWork.upsert({
     *   create: {
     *     // ... data to create a CoWork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoWork we want to update
     *   }
     * })
    **/
    upsert<T extends CoWorkUpsertArgs>(
      args: SelectSubset<T, CoWorkUpsertArgs>
    ): Prisma__CoWorkClient<CoWorkGetPayload<T>>

    /**
     * Count the number of CoWorks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkCountArgs} args - Arguments to filter CoWorks to count.
     * @example
     * // Count the number of CoWorks
     * const count = await prisma.coWork.count({
     *   where: {
     *     // ... the filter for the CoWorks we want to count
     *   }
     * })
    **/
    count<T extends CoWorkCountArgs>(
      args?: Subset<T, CoWorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoWorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoWorkAggregateArgs>(args: Subset<T, CoWorkAggregateArgs>): Prisma.PrismaPromise<GetCoWorkAggregateType<T>>

    /**
     * Group by CoWork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoWorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoWorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoWorkGroupByArgs['orderBy'] }
        : { orderBy?: CoWorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoWorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CoWork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CoWorkClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    userInternal<T extends UserInternalArgs= {}>(args?: Subset<T, UserInternalArgs>): Prisma__UserInternalClient<UserInternalGetPayload<T> | Null>;

    BranchToRoom<T extends CoWork$BranchToRoomArgs= {}>(args?: Subset<T, CoWork$BranchToRoomArgs>): Prisma.PrismaPromise<Array<BranchToRoomGetPayload<T>>| Null>;

    OpenClose<T extends OpenCloseArgs= {}>(args?: Subset<T, OpenCloseArgs>): Prisma__OpenCloseClient<OpenCloseGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CoWork base type for findUnique actions
   */
  export type CoWorkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where: CoWorkWhereUniqueInput
  }

  /**
   * CoWork findUnique
   */
  export interface CoWorkFindUniqueArgs extends CoWorkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CoWork findUniqueOrThrow
   */
  export type CoWorkFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where: CoWorkWhereUniqueInput
  }


  /**
   * CoWork base type for findFirst actions
   */
  export type CoWorkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoWorks.
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoWorks.
     */
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }

  /**
   * CoWork findFirst
   */
  export interface CoWorkFindFirstArgs extends CoWorkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CoWork findFirstOrThrow
   */
  export type CoWorkFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWork to fetch.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoWorks.
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoWorks.
     */
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }


  /**
   * CoWork findMany
   */
  export type CoWorkFindManyArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter, which CoWorks to fetch.
     */
    where?: CoWorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoWorks to fetch.
     */
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoWorks.
     */
    cursor?: CoWorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoWorks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoWorks.
     */
    skip?: number
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }


  /**
   * CoWork create
   */
  export type CoWorkCreateArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * The data needed to create a CoWork.
     */
    data: XOR<CoWorkCreateInput, CoWorkUncheckedCreateInput>
  }


  /**
   * CoWork createMany
   */
  export type CoWorkCreateManyArgs = {
    /**
     * The data used to create many CoWorks.
     */
    data: Enumerable<CoWorkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CoWork update
   */
  export type CoWorkUpdateArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * The data needed to update a CoWork.
     */
    data: XOR<CoWorkUpdateInput, CoWorkUncheckedUpdateInput>
    /**
     * Choose, which CoWork to update.
     */
    where: CoWorkWhereUniqueInput
  }


  /**
   * CoWork updateMany
   */
  export type CoWorkUpdateManyArgs = {
    /**
     * The data used to update CoWorks.
     */
    data: XOR<CoWorkUpdateManyMutationInput, CoWorkUncheckedUpdateManyInput>
    /**
     * Filter which CoWorks to update
     */
    where?: CoWorkWhereInput
  }


  /**
   * CoWork upsert
   */
  export type CoWorkUpsertArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * The filter to search for the CoWork to update in case it exists.
     */
    where: CoWorkWhereUniqueInput
    /**
     * In case the CoWork found by the `where` argument doesn't exist, create a new CoWork with this data.
     */
    create: XOR<CoWorkCreateInput, CoWorkUncheckedCreateInput>
    /**
     * In case the CoWork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoWorkUpdateInput, CoWorkUncheckedUpdateInput>
  }


  /**
   * CoWork delete
   */
  export type CoWorkDeleteArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    /**
     * Filter which CoWork to delete.
     */
    where: CoWorkWhereUniqueInput
  }


  /**
   * CoWork deleteMany
   */
  export type CoWorkDeleteManyArgs = {
    /**
     * Filter which CoWorks to delete
     */
    where?: CoWorkWhereInput
  }


  /**
   * CoWork.BranchToRoom
   */
  export type CoWork$BranchToRoomArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    where?: BranchToRoomWhereInput
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    cursor?: BranchToRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * CoWork without action
   */
  export type CoWorkArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
  }



  /**
   * Model UserInternal
   */


  export type AggregateUserInternal = {
    _count: UserInternalCountAggregateOutputType | null
    _avg: UserInternalAvgAggregateOutputType | null
    _sum: UserInternalSumAggregateOutputType | null
    _min: UserInternalMinAggregateOutputType | null
    _max: UserInternalMaxAggregateOutputType | null
  }

  export type UserInternalAvgAggregateOutputType = {
    id: number | null
    tel: number | null
  }

  export type UserInternalSumAggregateOutputType = {
    id: number | null
    tel: number | null
  }

  export type UserInternalMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: number | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserInternalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tel: number | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserInternalCountAggregateOutputType = {
    id: number
    name: number
    email: number
    tel: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserInternalAvgAggregateInputType = {
    id?: true
    tel?: true
  }

  export type UserInternalSumAggregateInputType = {
    id?: true
    tel?: true
  }

  export type UserInternalMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserInternalMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserInternalCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tel?: true
    password?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserInternalAggregateArgs = {
    /**
     * Filter which UserInternal to aggregate.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInternals
    **/
    _count?: true | UserInternalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInternalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInternalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInternalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInternalMaxAggregateInputType
  }

  export type GetUserInternalAggregateType<T extends UserInternalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInternal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInternal[P]>
      : GetScalarType<T[P], AggregateUserInternal[P]>
  }




  export type UserInternalGroupByArgs = {
    where?: UserInternalWhereInput
    orderBy?: Enumerable<UserInternalOrderByWithAggregationInput>
    by: UserInternalScalarFieldEnum[]
    having?: UserInternalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInternalCountAggregateInputType | true
    _avg?: UserInternalAvgAggregateInputType
    _sum?: UserInternalSumAggregateInputType
    _min?: UserInternalMinAggregateInputType
    _max?: UserInternalMaxAggregateInputType
  }


  export type UserInternalGroupByOutputType = {
    id: number
    name: string
    email: string
    tel: number
    password: string
    createAt: Date
    updateAt: Date
    _count: UserInternalCountAggregateOutputType | null
    _avg: UserInternalAvgAggregateOutputType | null
    _sum: UserInternalSumAggregateOutputType | null
    _min: UserInternalMinAggregateOutputType | null
    _max: UserInternalMaxAggregateOutputType | null
  }

  type GetUserInternalGroupByPayload<T extends UserInternalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserInternalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInternalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInternalGroupByOutputType[P]>
            : GetScalarType<T[P], UserInternalGroupByOutputType[P]>
        }
      >
    >


  export type UserInternalSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    coWork?: boolean | UserInternal$coWorkArgs
    _count?: boolean | UserInternalCountOutputTypeArgs
  }


  export type UserInternalInclude = {
    coWork?: boolean | UserInternal$coWorkArgs
    _count?: boolean | UserInternalCountOutputTypeArgs
  }

  export type UserInternalGetPayload<S extends boolean | null | undefined | UserInternalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserInternal :
    S extends undefined ? never :
    S extends { include: any } & (UserInternalArgs | UserInternalFindManyArgs)
    ? UserInternal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coWork' ? Array < CoWorkGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserInternalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserInternalArgs | UserInternalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coWork' ? Array < CoWorkGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserInternalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserInternal ? UserInternal[P] : never
  } 
      : UserInternal


  type UserInternalCountArgs = 
    Omit<UserInternalFindManyArgs, 'select' | 'include'> & {
      select?: UserInternalCountAggregateInputType | true
    }

  export interface UserInternalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserInternal that matches the filter.
     * @param {UserInternalFindUniqueArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserInternalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserInternalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserInternal'> extends True ? Prisma__UserInternalClient<UserInternalGetPayload<T>> : Prisma__UserInternalClient<UserInternalGetPayload<T> | null, null>

    /**
     * Find one UserInternal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserInternalFindUniqueOrThrowArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserInternalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserInternalFindUniqueOrThrowArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Find the first UserInternal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalFindFirstArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserInternalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserInternalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserInternal'> extends True ? Prisma__UserInternalClient<UserInternalGetPayload<T>> : Prisma__UserInternalClient<UserInternalGetPayload<T> | null, null>

    /**
     * Find the first UserInternal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalFindFirstOrThrowArgs} args - Arguments to find a UserInternal
     * @example
     * // Get one UserInternal
     * const userInternal = await prisma.userInternal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserInternalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserInternalFindFirstOrThrowArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Find zero or more UserInternals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInternals
     * const userInternals = await prisma.userInternal.findMany()
     * 
     * // Get first 10 UserInternals
     * const userInternals = await prisma.userInternal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInternalWithIdOnly = await prisma.userInternal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserInternalFindManyArgs>(
      args?: SelectSubset<T, UserInternalFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserInternalGetPayload<T>>>

    /**
     * Create a UserInternal.
     * @param {UserInternalCreateArgs} args - Arguments to create a UserInternal.
     * @example
     * // Create one UserInternal
     * const UserInternal = await prisma.userInternal.create({
     *   data: {
     *     // ... data to create a UserInternal
     *   }
     * })
     * 
    **/
    create<T extends UserInternalCreateArgs>(
      args: SelectSubset<T, UserInternalCreateArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Create many UserInternals.
     *     @param {UserInternalCreateManyArgs} args - Arguments to create many UserInternals.
     *     @example
     *     // Create many UserInternals
     *     const userInternal = await prisma.userInternal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserInternalCreateManyArgs>(
      args?: SelectSubset<T, UserInternalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInternal.
     * @param {UserInternalDeleteArgs} args - Arguments to delete one UserInternal.
     * @example
     * // Delete one UserInternal
     * const UserInternal = await prisma.userInternal.delete({
     *   where: {
     *     // ... filter to delete one UserInternal
     *   }
     * })
     * 
    **/
    delete<T extends UserInternalDeleteArgs>(
      args: SelectSubset<T, UserInternalDeleteArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Update one UserInternal.
     * @param {UserInternalUpdateArgs} args - Arguments to update one UserInternal.
     * @example
     * // Update one UserInternal
     * const userInternal = await prisma.userInternal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserInternalUpdateArgs>(
      args: SelectSubset<T, UserInternalUpdateArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Delete zero or more UserInternals.
     * @param {UserInternalDeleteManyArgs} args - Arguments to filter UserInternals to delete.
     * @example
     * // Delete a few UserInternals
     * const { count } = await prisma.userInternal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserInternalDeleteManyArgs>(
      args?: SelectSubset<T, UserInternalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInternals
     * const userInternal = await prisma.userInternal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserInternalUpdateManyArgs>(
      args: SelectSubset<T, UserInternalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInternal.
     * @param {UserInternalUpsertArgs} args - Arguments to update or create a UserInternal.
     * @example
     * // Update or create a UserInternal
     * const userInternal = await prisma.userInternal.upsert({
     *   create: {
     *     // ... data to create a UserInternal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInternal we want to update
     *   }
     * })
    **/
    upsert<T extends UserInternalUpsertArgs>(
      args: SelectSubset<T, UserInternalUpsertArgs>
    ): Prisma__UserInternalClient<UserInternalGetPayload<T>>

    /**
     * Count the number of UserInternals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalCountArgs} args - Arguments to filter UserInternals to count.
     * @example
     * // Count the number of UserInternals
     * const count = await prisma.userInternal.count({
     *   where: {
     *     // ... the filter for the UserInternals we want to count
     *   }
     * })
    **/
    count<T extends UserInternalCountArgs>(
      args?: Subset<T, UserInternalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInternalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInternalAggregateArgs>(args: Subset<T, UserInternalAggregateArgs>): Prisma.PrismaPromise<GetUserInternalAggregateType<T>>

    /**
     * Group by UserInternal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInternalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInternalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInternalGroupByArgs['orderBy'] }
        : { orderBy?: UserInternalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInternalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInternalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInternal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserInternalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coWork<T extends UserInternal$coWorkArgs= {}>(args?: Subset<T, UserInternal$coWorkArgs>): Prisma.PrismaPromise<Array<CoWorkGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserInternal base type for findUnique actions
   */
  export type UserInternalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where: UserInternalWhereUniqueInput
  }

  /**
   * UserInternal findUnique
   */
  export interface UserInternalFindUniqueArgs extends UserInternalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInternal findUniqueOrThrow
   */
  export type UserInternalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where: UserInternalWhereUniqueInput
  }


  /**
   * UserInternal base type for findFirst actions
   */
  export type UserInternalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInternals.
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInternals.
     */
    distinct?: Enumerable<UserInternalScalarFieldEnum>
  }

  /**
   * UserInternal findFirst
   */
  export interface UserInternalFindFirstArgs extends UserInternalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInternal findFirstOrThrow
   */
  export type UserInternalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternal to fetch.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInternals.
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInternals.
     */
    distinct?: Enumerable<UserInternalScalarFieldEnum>
  }


  /**
   * UserInternal findMany
   */
  export type UserInternalFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter, which UserInternals to fetch.
     */
    where?: UserInternalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInternals to fetch.
     */
    orderBy?: Enumerable<UserInternalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInternals.
     */
    cursor?: UserInternalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInternals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInternals.
     */
    skip?: number
    distinct?: Enumerable<UserInternalScalarFieldEnum>
  }


  /**
   * UserInternal create
   */
  export type UserInternalCreateArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * The data needed to create a UserInternal.
     */
    data: XOR<UserInternalCreateInput, UserInternalUncheckedCreateInput>
  }


  /**
   * UserInternal createMany
   */
  export type UserInternalCreateManyArgs = {
    /**
     * The data used to create many UserInternals.
     */
    data: Enumerable<UserInternalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserInternal update
   */
  export type UserInternalUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * The data needed to update a UserInternal.
     */
    data: XOR<UserInternalUpdateInput, UserInternalUncheckedUpdateInput>
    /**
     * Choose, which UserInternal to update.
     */
    where: UserInternalWhereUniqueInput
  }


  /**
   * UserInternal updateMany
   */
  export type UserInternalUpdateManyArgs = {
    /**
     * The data used to update UserInternals.
     */
    data: XOR<UserInternalUpdateManyMutationInput, UserInternalUncheckedUpdateManyInput>
    /**
     * Filter which UserInternals to update
     */
    where?: UserInternalWhereInput
  }


  /**
   * UserInternal upsert
   */
  export type UserInternalUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * The filter to search for the UserInternal to update in case it exists.
     */
    where: UserInternalWhereUniqueInput
    /**
     * In case the UserInternal found by the `where` argument doesn't exist, create a new UserInternal with this data.
     */
    create: XOR<UserInternalCreateInput, UserInternalUncheckedCreateInput>
    /**
     * In case the UserInternal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInternalUpdateInput, UserInternalUncheckedUpdateInput>
  }


  /**
   * UserInternal delete
   */
  export type UserInternalDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
    /**
     * Filter which UserInternal to delete.
     */
    where: UserInternalWhereUniqueInput
  }


  /**
   * UserInternal deleteMany
   */
  export type UserInternalDeleteManyArgs = {
    /**
     * Filter which UserInternals to delete
     */
    where?: UserInternalWhereInput
  }


  /**
   * UserInternal.coWork
   */
  export type UserInternal$coWorkArgs = {
    /**
     * Select specific fields to fetch from the CoWork
     */
    select?: CoWorkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoWorkInclude | null
    where?: CoWorkWhereInput
    orderBy?: Enumerable<CoWorkOrderByWithRelationInput>
    cursor?: CoWorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CoWorkScalarFieldEnum>
  }


  /**
   * UserInternal without action
   */
  export type UserInternalArgs = {
    /**
     * Select specific fields to fetch from the UserInternal
     */
    select?: UserInternalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInternalInclude | null
  }



  /**
   * Model Room
   */


  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createAt?: true
    updateAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createAt?: true
    updateAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type RoomAggregateArgs = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs = {
    where?: RoomWhereInput
    orderBy?: Enumerable<RoomOrderByWithAggregationInput>
    by: RoomScalarFieldEnum[]
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }


  export type RoomGroupByOutputType = {
    id: number
    name: string
    capacity: number
    createAt: Date
    updateAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    createAt?: boolean
    updateAt?: boolean
    RoomPrice?: boolean | Room$RoomPriceArgs
    FacilityToRoom?: boolean | Room$FacilityToRoomArgs
    BranchToRoom?: boolean | Room$BranchToRoomArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }


  export type RoomInclude = {
    RoomPrice?: boolean | Room$RoomPriceArgs
    FacilityToRoom?: boolean | Room$FacilityToRoomArgs
    BranchToRoom?: boolean | Room$BranchToRoomArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }

  export type RoomGetPayload<S extends boolean | null | undefined | RoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Room :
    S extends undefined ? never :
    S extends { include: any } & (RoomArgs | RoomFindManyArgs)
    ? Room  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'RoomPrice' ? Array < RoomRateGetPayload<S['include'][P]>>  :
        P extends 'FacilityToRoom' ? Array < FacilityToRoomGetPayload<S['include'][P]>>  :
        P extends 'BranchToRoom' ? Array < BranchToRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomArgs | RoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'RoomPrice' ? Array < RoomRateGetPayload<S['select'][P]>>  :
        P extends 'FacilityToRoom' ? Array < FacilityToRoomGetPayload<S['select'][P]>>  :
        P extends 'BranchToRoom' ? Array < BranchToRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Room ? Room[P] : never
  } 
      : Room


  type RoomCountArgs = 
    Omit<RoomFindManyArgs, 'select' | 'include'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find one Room that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomFindUniqueOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Room'> extends True ? Prisma__RoomClient<RoomGetPayload<T>> : Prisma__RoomClient<RoomGetPayload<T> | null, null>

    /**
     * Find the first Room that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomFindFirstOrThrowArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoomFindManyArgs>(
      args?: SelectSubset<T, RoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoomGetPayload<T>>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
    **/
    create<T extends RoomCreateArgs>(
      args: SelectSubset<T, RoomCreateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Create many Rooms.
     *     @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const room = await prisma.room.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomCreateManyArgs>(
      args?: SelectSubset<T, RoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
    **/
    delete<T extends RoomDeleteArgs>(
      args: SelectSubset<T, RoomDeleteArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomUpdateArgs>(
      args: SelectSubset<T, RoomUpdateArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomDeleteManyArgs>(
      args?: SelectSubset<T, RoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomUpdateManyArgs>(
      args: SelectSubset<T, RoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
    **/
    upsert<T extends RoomUpsertArgs>(
      args: SelectSubset<T, RoomUpsertArgs>
    ): Prisma__RoomClient<RoomGetPayload<T>>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    RoomPrice<T extends Room$RoomPriceArgs= {}>(args?: Subset<T, Room$RoomPriceArgs>): Prisma.PrismaPromise<Array<RoomRateGetPayload<T>>| Null>;

    FacilityToRoom<T extends Room$FacilityToRoomArgs= {}>(args?: Subset<T, Room$FacilityToRoomArgs>): Prisma.PrismaPromise<Array<FacilityToRoomGetPayload<T>>| Null>;

    BranchToRoom<T extends Room$BranchToRoomArgs= {}>(args?: Subset<T, Room$BranchToRoomArgs>): Prisma.PrismaPromise<Array<BranchToRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Room base type for findUnique actions
   */
  export type RoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUnique
   */
  export interface RoomFindUniqueArgs extends RoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room base type for findFirst actions
   */
  export type RoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }

  /**
   * Room findFirst
   */
  export interface RoomFindFirstArgs extends RoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room findMany
   */
  export type RoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: Enumerable<RoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * Room create
   */
  export type RoomCreateArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }


  /**
   * Room createMany
   */
  export type RoomCreateManyArgs = {
    /**
     * The data used to create many Rooms.
     */
    data: Enumerable<RoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Room update
   */
  export type RoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }


  /**
   * Room upsert
   */
  export type RoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }


  /**
   * Room delete
   */
  export type RoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }


  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }


  /**
   * Room.RoomPrice
   */
  export type Room$RoomPriceArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    where?: RoomRateWhereInput
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    cursor?: RoomRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * Room.FacilityToRoom
   */
  export type Room$FacilityToRoomArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    where?: FacilityToRoomWhereInput
    orderBy?: Enumerable<FacilityToRoomOrderByWithRelationInput>
    cursor?: FacilityToRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FacilityToRoomScalarFieldEnum>
  }


  /**
   * Room.BranchToRoom
   */
  export type Room$BranchToRoomArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    where?: BranchToRoomWhereInput
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    cursor?: BranchToRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * Room without action
   */
  export type RoomArgs = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomInclude | null
  }



  /**
   * Model RoomRate
   */


  export type AggregateRoomRate = {
    _count: RoomRateCountAggregateOutputType | null
    _avg: RoomRateAvgAggregateOutputType | null
    _sum: RoomRateSumAggregateOutputType | null
    _min: RoomRateMinAggregateOutputType | null
    _max: RoomRateMaxAggregateOutputType | null
  }

  export type RoomRateAvgAggregateOutputType = {
    id: number | null
    price: number | null
    roomId: number | null
  }

  export type RoomRateSumAggregateOutputType = {
    id: number | null
    price: number | null
    roomId: number | null
  }

  export type RoomRateMinAggregateOutputType = {
    id: number | null
    price: number | null
    time: string | null
    roomId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoomRateMaxAggregateOutputType = {
    id: number | null
    price: number | null
    time: string | null
    roomId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoomRateCountAggregateOutputType = {
    id: number
    price: number
    time: number
    roomId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type RoomRateAvgAggregateInputType = {
    id?: true
    price?: true
    roomId?: true
  }

  export type RoomRateSumAggregateInputType = {
    id?: true
    price?: true
    roomId?: true
  }

  export type RoomRateMinAggregateInputType = {
    id?: true
    price?: true
    time?: true
    roomId?: true
    createAt?: true
    updateAt?: true
  }

  export type RoomRateMaxAggregateInputType = {
    id?: true
    price?: true
    time?: true
    roomId?: true
    createAt?: true
    updateAt?: true
  }

  export type RoomRateCountAggregateInputType = {
    id?: true
    price?: true
    time?: true
    roomId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type RoomRateAggregateArgs = {
    /**
     * Filter which RoomRate to aggregate.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomRates
    **/
    _count?: true | RoomRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomRateMaxAggregateInputType
  }

  export type GetRoomRateAggregateType<T extends RoomRateAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomRate[P]>
      : GetScalarType<T[P], AggregateRoomRate[P]>
  }




  export type RoomRateGroupByArgs = {
    where?: RoomRateWhereInput
    orderBy?: Enumerable<RoomRateOrderByWithAggregationInput>
    by: RoomRateScalarFieldEnum[]
    having?: RoomRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomRateCountAggregateInputType | true
    _avg?: RoomRateAvgAggregateInputType
    _sum?: RoomRateSumAggregateInputType
    _min?: RoomRateMinAggregateInputType
    _max?: RoomRateMaxAggregateInputType
  }


  export type RoomRateGroupByOutputType = {
    id: number
    price: number
    time: string
    roomId: number
    createAt: Date
    updateAt: Date
    _count: RoomRateCountAggregateOutputType | null
    _avg: RoomRateAvgAggregateOutputType | null
    _sum: RoomRateSumAggregateOutputType | null
    _min: RoomRateMinAggregateOutputType | null
    _max: RoomRateMaxAggregateOutputType | null
  }

  type GetRoomRateGroupByPayload<T extends RoomRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomRateGroupByOutputType[P]>
            : GetScalarType<T[P], RoomRateGroupByOutputType[P]>
        }
      >
    >


  export type RoomRateSelect = {
    id?: boolean
    price?: boolean
    time?: boolean
    roomId?: boolean
    createAt?: boolean
    updateAt?: boolean
    room?: boolean | RoomArgs
    BookRoom?: boolean | RoomRate$BookRoomArgs
    _count?: boolean | RoomRateCountOutputTypeArgs
  }


  export type RoomRateInclude = {
    room?: boolean | RoomArgs
    BookRoom?: boolean | RoomRate$BookRoomArgs
    _count?: boolean | RoomRateCountOutputTypeArgs
  }

  export type RoomRateGetPayload<S extends boolean | null | undefined | RoomRateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomRate :
    S extends undefined ? never :
    S extends { include: any } & (RoomRateArgs | RoomRateFindManyArgs)
    ? RoomRate  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> :
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoomRateCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoomRateArgs | RoomRateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> :
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoomRateCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RoomRate ? RoomRate[P] : never
  } 
      : RoomRate


  type RoomRateCountArgs = 
    Omit<RoomRateFindManyArgs, 'select' | 'include'> & {
      select?: RoomRateCountAggregateInputType | true
    }

  export interface RoomRateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoomRate that matches the filter.
     * @param {RoomRateFindUniqueArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomRateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoomRateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoomRate'> extends True ? Prisma__RoomRateClient<RoomRateGetPayload<T>> : Prisma__RoomRateClient<RoomRateGetPayload<T> | null, null>

    /**
     * Find one RoomRate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomRateFindUniqueOrThrowArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomRateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoomRateFindUniqueOrThrowArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Find the first RoomRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateFindFirstArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomRateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoomRateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoomRate'> extends True ? Prisma__RoomRateClient<RoomRateGetPayload<T>> : Prisma__RoomRateClient<RoomRateGetPayload<T> | null, null>

    /**
     * Find the first RoomRate that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateFindFirstOrThrowArgs} args - Arguments to find a RoomRate
     * @example
     * // Get one RoomRate
     * const roomRate = await prisma.roomRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomRateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoomRateFindFirstOrThrowArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Find zero or more RoomRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomRates
     * const roomRates = await prisma.roomRate.findMany()
     * 
     * // Get first 10 RoomRates
     * const roomRates = await prisma.roomRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomRateWithIdOnly = await prisma.roomRate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoomRateFindManyArgs>(
      args?: SelectSubset<T, RoomRateFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoomRateGetPayload<T>>>

    /**
     * Create a RoomRate.
     * @param {RoomRateCreateArgs} args - Arguments to create a RoomRate.
     * @example
     * // Create one RoomRate
     * const RoomRate = await prisma.roomRate.create({
     *   data: {
     *     // ... data to create a RoomRate
     *   }
     * })
     * 
    **/
    create<T extends RoomRateCreateArgs>(
      args: SelectSubset<T, RoomRateCreateArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Create many RoomRates.
     *     @param {RoomRateCreateManyArgs} args - Arguments to create many RoomRates.
     *     @example
     *     // Create many RoomRates
     *     const roomRate = await prisma.roomRate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomRateCreateManyArgs>(
      args?: SelectSubset<T, RoomRateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomRate.
     * @param {RoomRateDeleteArgs} args - Arguments to delete one RoomRate.
     * @example
     * // Delete one RoomRate
     * const RoomRate = await prisma.roomRate.delete({
     *   where: {
     *     // ... filter to delete one RoomRate
     *   }
     * })
     * 
    **/
    delete<T extends RoomRateDeleteArgs>(
      args: SelectSubset<T, RoomRateDeleteArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Update one RoomRate.
     * @param {RoomRateUpdateArgs} args - Arguments to update one RoomRate.
     * @example
     * // Update one RoomRate
     * const roomRate = await prisma.roomRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomRateUpdateArgs>(
      args: SelectSubset<T, RoomRateUpdateArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Delete zero or more RoomRates.
     * @param {RoomRateDeleteManyArgs} args - Arguments to filter RoomRates to delete.
     * @example
     * // Delete a few RoomRates
     * const { count } = await prisma.roomRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomRateDeleteManyArgs>(
      args?: SelectSubset<T, RoomRateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomRates
     * const roomRate = await prisma.roomRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomRateUpdateManyArgs>(
      args: SelectSubset<T, RoomRateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomRate.
     * @param {RoomRateUpsertArgs} args - Arguments to update or create a RoomRate.
     * @example
     * // Update or create a RoomRate
     * const roomRate = await prisma.roomRate.upsert({
     *   create: {
     *     // ... data to create a RoomRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomRate we want to update
     *   }
     * })
    **/
    upsert<T extends RoomRateUpsertArgs>(
      args: SelectSubset<T, RoomRateUpsertArgs>
    ): Prisma__RoomRateClient<RoomRateGetPayload<T>>

    /**
     * Count the number of RoomRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateCountArgs} args - Arguments to filter RoomRates to count.
     * @example
     * // Count the number of RoomRates
     * const count = await prisma.roomRate.count({
     *   where: {
     *     // ... the filter for the RoomRates we want to count
     *   }
     * })
    **/
    count<T extends RoomRateCountArgs>(
      args?: Subset<T, RoomRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomRateAggregateArgs>(args: Subset<T, RoomRateAggregateArgs>): Prisma.PrismaPromise<GetRoomRateAggregateType<T>>

    /**
     * Group by RoomRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomRateGroupByArgs['orderBy'] }
        : { orderBy?: RoomRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoomRateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    BookRoom<T extends RoomRate$BookRoomArgs= {}>(args?: Subset<T, RoomRate$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RoomRate base type for findUnique actions
   */
  export type RoomRateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where: RoomRateWhereUniqueInput
  }

  /**
   * RoomRate findUnique
   */
  export interface RoomRateFindUniqueArgs extends RoomRateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoomRate findUniqueOrThrow
   */
  export type RoomRateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where: RoomRateWhereUniqueInput
  }


  /**
   * RoomRate base type for findFirst actions
   */
  export type RoomRateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomRates.
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomRates.
     */
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }

  /**
   * RoomRate findFirst
   */
  export interface RoomRateFindFirstArgs extends RoomRateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoomRate findFirstOrThrow
   */
  export type RoomRateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRate to fetch.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomRates.
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomRates.
     */
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * RoomRate findMany
   */
  export type RoomRateFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter, which RoomRates to fetch.
     */
    where?: RoomRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomRates to fetch.
     */
    orderBy?: Enumerable<RoomRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomRates.
     */
    cursor?: RoomRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomRates.
     */
    skip?: number
    distinct?: Enumerable<RoomRateScalarFieldEnum>
  }


  /**
   * RoomRate create
   */
  export type RoomRateCreateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * The data needed to create a RoomRate.
     */
    data: XOR<RoomRateCreateInput, RoomRateUncheckedCreateInput>
  }


  /**
   * RoomRate createMany
   */
  export type RoomRateCreateManyArgs = {
    /**
     * The data used to create many RoomRates.
     */
    data: Enumerable<RoomRateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoomRate update
   */
  export type RoomRateUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * The data needed to update a RoomRate.
     */
    data: XOR<RoomRateUpdateInput, RoomRateUncheckedUpdateInput>
    /**
     * Choose, which RoomRate to update.
     */
    where: RoomRateWhereUniqueInput
  }


  /**
   * RoomRate updateMany
   */
  export type RoomRateUpdateManyArgs = {
    /**
     * The data used to update RoomRates.
     */
    data: XOR<RoomRateUpdateManyMutationInput, RoomRateUncheckedUpdateManyInput>
    /**
     * Filter which RoomRates to update
     */
    where?: RoomRateWhereInput
  }


  /**
   * RoomRate upsert
   */
  export type RoomRateUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * The filter to search for the RoomRate to update in case it exists.
     */
    where: RoomRateWhereUniqueInput
    /**
     * In case the RoomRate found by the `where` argument doesn't exist, create a new RoomRate with this data.
     */
    create: XOR<RoomRateCreateInput, RoomRateUncheckedCreateInput>
    /**
     * In case the RoomRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomRateUpdateInput, RoomRateUncheckedUpdateInput>
  }


  /**
   * RoomRate delete
   */
  export type RoomRateDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
    /**
     * Filter which RoomRate to delete.
     */
    where: RoomRateWhereUniqueInput
  }


  /**
   * RoomRate deleteMany
   */
  export type RoomRateDeleteManyArgs = {
    /**
     * Filter which RoomRates to delete
     */
    where?: RoomRateWhereInput
  }


  /**
   * RoomRate.BookRoom
   */
  export type RoomRate$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * RoomRate without action
   */
  export type RoomRateArgs = {
    /**
     * Select specific fields to fetch from the RoomRate
     */
    select?: RoomRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomRateInclude | null
  }



  /**
   * Model Facility
   */


  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs = {
    where?: FacilityWhereInput
    orderBy?: Enumerable<FacilityOrderByWithAggregationInput>
    by: FacilityScalarFieldEnum[]
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }


  export type FacilityGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    FacilityToRoom?: boolean | Facility$FacilityToRoomArgs
    _count?: boolean | FacilityCountOutputTypeArgs
  }


  export type FacilityInclude = {
    FacilityToRoom?: boolean | Facility$FacilityToRoomArgs
    _count?: boolean | FacilityCountOutputTypeArgs
  }

  export type FacilityGetPayload<S extends boolean | null | undefined | FacilityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Facility :
    S extends undefined ? never :
    S extends { include: any } & (FacilityArgs | FacilityFindManyArgs)
    ? Facility  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'FacilityToRoom' ? Array < FacilityToRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? FacilityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FacilityArgs | FacilityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'FacilityToRoom' ? Array < FacilityToRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? FacilityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Facility ? Facility[P] : never
  } 
      : Facility


  type FacilityCountArgs = 
    Omit<FacilityFindManyArgs, 'select' | 'include'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacilityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FacilityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Facility'> extends True ? Prisma__FacilityClient<FacilityGetPayload<T>> : Prisma__FacilityClient<FacilityGetPayload<T> | null, null>

    /**
     * Find one Facility that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FacilityFindUniqueOrThrowArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacilityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FacilityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Facility'> extends True ? Prisma__FacilityClient<FacilityGetPayload<T>> : Prisma__FacilityClient<FacilityGetPayload<T> | null, null>

    /**
     * Find the first Facility that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacilityFindFirstOrThrowArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacilityFindManyArgs>(
      args?: SelectSubset<T, FacilityFindManyArgs>
    ): Prisma.PrismaPromise<Array<FacilityGetPayload<T>>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
    **/
    create<T extends FacilityCreateArgs>(
      args: SelectSubset<T, FacilityCreateArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Create many Facilities.
     *     @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     *     @example
     *     // Create many Facilities
     *     const facility = await prisma.facility.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacilityCreateManyArgs>(
      args?: SelectSubset<T, FacilityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
    **/
    delete<T extends FacilityDeleteArgs>(
      args: SelectSubset<T, FacilityDeleteArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacilityUpdateArgs>(
      args: SelectSubset<T, FacilityUpdateArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacilityDeleteManyArgs>(
      args?: SelectSubset<T, FacilityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacilityUpdateManyArgs>(
      args: SelectSubset<T, FacilityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
    **/
    upsert<T extends FacilityUpsertArgs>(
      args: SelectSubset<T, FacilityUpsertArgs>
    ): Prisma__FacilityClient<FacilityGetPayload<T>>

    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FacilityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    FacilityToRoom<T extends Facility$FacilityToRoomArgs= {}>(args?: Subset<T, Facility$FacilityToRoomArgs>): Prisma.PrismaPromise<Array<FacilityToRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Facility base type for findUnique actions
   */
  export type FacilityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUnique
   */
  export interface FacilityFindUniqueArgs extends FacilityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility base type for findFirst actions
   */
  export type FacilityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }

  /**
   * Facility findFirst
   */
  export interface FacilityFindFirstArgs extends FacilityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }


  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: Enumerable<FacilityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: Enumerable<FacilityScalarFieldEnum>
  }


  /**
   * Facility create
   */
  export type FacilityCreateArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }


  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs = {
    /**
     * The data used to create many Facilities.
     */
    data: Enumerable<FacilityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Facility update
   */
  export type FacilityUpdateArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }


  /**
   * Facility delete
   */
  export type FacilityDeleteArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }


  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
  }


  /**
   * Facility.FacilityToRoom
   */
  export type Facility$FacilityToRoomArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    where?: FacilityToRoomWhereInput
    orderBy?: Enumerable<FacilityToRoomOrderByWithRelationInput>
    cursor?: FacilityToRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FacilityToRoomScalarFieldEnum>
  }


  /**
   * Facility without action
   */
  export type FacilityArgs = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityInclude | null
  }



  /**
   * Model FacilityToRoom
   */


  export type AggregateFacilityToRoom = {
    _count: FacilityToRoomCountAggregateOutputType | null
    _avg: FacilityToRoomAvgAggregateOutputType | null
    _sum: FacilityToRoomSumAggregateOutputType | null
    _min: FacilityToRoomMinAggregateOutputType | null
    _max: FacilityToRoomMaxAggregateOutputType | null
  }

  export type FacilityToRoomAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
  }

  export type FacilityToRoomSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
  }

  export type FacilityToRoomMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityToRoomMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    facilityId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type FacilityToRoomCountAggregateOutputType = {
    id: number
    roomId: number
    facilityId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type FacilityToRoomAvgAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
  }

  export type FacilityToRoomSumAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
  }

  export type FacilityToRoomMinAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityToRoomMaxAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
    createAt?: true
    updateAt?: true
  }

  export type FacilityToRoomCountAggregateInputType = {
    id?: true
    roomId?: true
    facilityId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type FacilityToRoomAggregateArgs = {
    /**
     * Filter which FacilityToRoom to aggregate.
     */
    where?: FacilityToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToRooms to fetch.
     */
    orderBy?: Enumerable<FacilityToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityToRooms
    **/
    _count?: true | FacilityToRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityToRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilityToRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityToRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityToRoomMaxAggregateInputType
  }

  export type GetFacilityToRoomAggregateType<T extends FacilityToRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityToRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityToRoom[P]>
      : GetScalarType<T[P], AggregateFacilityToRoom[P]>
  }




  export type FacilityToRoomGroupByArgs = {
    where?: FacilityToRoomWhereInput
    orderBy?: Enumerable<FacilityToRoomOrderByWithAggregationInput>
    by: FacilityToRoomScalarFieldEnum[]
    having?: FacilityToRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityToRoomCountAggregateInputType | true
    _avg?: FacilityToRoomAvgAggregateInputType
    _sum?: FacilityToRoomSumAggregateInputType
    _min?: FacilityToRoomMinAggregateInputType
    _max?: FacilityToRoomMaxAggregateInputType
  }


  export type FacilityToRoomGroupByOutputType = {
    id: number
    roomId: number
    facilityId: number
    createAt: Date
    updateAt: Date
    _count: FacilityToRoomCountAggregateOutputType | null
    _avg: FacilityToRoomAvgAggregateOutputType | null
    _sum: FacilityToRoomSumAggregateOutputType | null
    _min: FacilityToRoomMinAggregateOutputType | null
    _max: FacilityToRoomMaxAggregateOutputType | null
  }

  type GetFacilityToRoomGroupByPayload<T extends FacilityToRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FacilityToRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityToRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityToRoomGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityToRoomGroupByOutputType[P]>
        }
      >
    >


  export type FacilityToRoomSelect = {
    id?: boolean
    roomId?: boolean
    facilityId?: boolean
    createAt?: boolean
    updateAt?: boolean
    room?: boolean | RoomArgs
    facilities?: boolean | FacilityArgs
  }


  export type FacilityToRoomInclude = {
    room?: boolean | RoomArgs
    facilities?: boolean | FacilityArgs
  }

  export type FacilityToRoomGetPayload<S extends boolean | null | undefined | FacilityToRoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FacilityToRoom :
    S extends undefined ? never :
    S extends { include: any } & (FacilityToRoomArgs | FacilityToRoomFindManyArgs)
    ? FacilityToRoom  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'room' ? RoomGetPayload<S['include'][P]> :
        P extends 'facilities' ? FacilityGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FacilityToRoomArgs | FacilityToRoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'room' ? RoomGetPayload<S['select'][P]> :
        P extends 'facilities' ? FacilityGetPayload<S['select'][P]> :  P extends keyof FacilityToRoom ? FacilityToRoom[P] : never
  } 
      : FacilityToRoom


  type FacilityToRoomCountArgs = 
    Omit<FacilityToRoomFindManyArgs, 'select' | 'include'> & {
      select?: FacilityToRoomCountAggregateInputType | true
    }

  export interface FacilityToRoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FacilityToRoom that matches the filter.
     * @param {FacilityToRoomFindUniqueArgs} args - Arguments to find a FacilityToRoom
     * @example
     * // Get one FacilityToRoom
     * const facilityToRoom = await prisma.facilityToRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacilityToRoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FacilityToRoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FacilityToRoom'> extends True ? Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>> : Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T> | null, null>

    /**
     * Find one FacilityToRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacilityToRoomFindUniqueOrThrowArgs} args - Arguments to find a FacilityToRoom
     * @example
     * // Get one FacilityToRoom
     * const facilityToRoom = await prisma.facilityToRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacilityToRoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FacilityToRoomFindUniqueOrThrowArgs>
    ): Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>>

    /**
     * Find the first FacilityToRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomFindFirstArgs} args - Arguments to find a FacilityToRoom
     * @example
     * // Get one FacilityToRoom
     * const facilityToRoom = await prisma.facilityToRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacilityToRoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FacilityToRoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FacilityToRoom'> extends True ? Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>> : Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T> | null, null>

    /**
     * Find the first FacilityToRoom that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomFindFirstOrThrowArgs} args - Arguments to find a FacilityToRoom
     * @example
     * // Get one FacilityToRoom
     * const facilityToRoom = await prisma.facilityToRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacilityToRoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacilityToRoomFindFirstOrThrowArgs>
    ): Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>>

    /**
     * Find zero or more FacilityToRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityToRooms
     * const facilityToRooms = await prisma.facilityToRoom.findMany()
     * 
     * // Get first 10 FacilityToRooms
     * const facilityToRooms = await prisma.facilityToRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityToRoomWithIdOnly = await prisma.facilityToRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacilityToRoomFindManyArgs>(
      args?: SelectSubset<T, FacilityToRoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<FacilityToRoomGetPayload<T>>>

    /**
     * Create a FacilityToRoom.
     * @param {FacilityToRoomCreateArgs} args - Arguments to create a FacilityToRoom.
     * @example
     * // Create one FacilityToRoom
     * const FacilityToRoom = await prisma.facilityToRoom.create({
     *   data: {
     *     // ... data to create a FacilityToRoom
     *   }
     * })
     * 
    **/
    create<T extends FacilityToRoomCreateArgs>(
      args: SelectSubset<T, FacilityToRoomCreateArgs>
    ): Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>>

    /**
     * Create many FacilityToRooms.
     *     @param {FacilityToRoomCreateManyArgs} args - Arguments to create many FacilityToRooms.
     *     @example
     *     // Create many FacilityToRooms
     *     const facilityToRoom = await prisma.facilityToRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacilityToRoomCreateManyArgs>(
      args?: SelectSubset<T, FacilityToRoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacilityToRoom.
     * @param {FacilityToRoomDeleteArgs} args - Arguments to delete one FacilityToRoom.
     * @example
     * // Delete one FacilityToRoom
     * const FacilityToRoom = await prisma.facilityToRoom.delete({
     *   where: {
     *     // ... filter to delete one FacilityToRoom
     *   }
     * })
     * 
    **/
    delete<T extends FacilityToRoomDeleteArgs>(
      args: SelectSubset<T, FacilityToRoomDeleteArgs>
    ): Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>>

    /**
     * Update one FacilityToRoom.
     * @param {FacilityToRoomUpdateArgs} args - Arguments to update one FacilityToRoom.
     * @example
     * // Update one FacilityToRoom
     * const facilityToRoom = await prisma.facilityToRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacilityToRoomUpdateArgs>(
      args: SelectSubset<T, FacilityToRoomUpdateArgs>
    ): Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>>

    /**
     * Delete zero or more FacilityToRooms.
     * @param {FacilityToRoomDeleteManyArgs} args - Arguments to filter FacilityToRooms to delete.
     * @example
     * // Delete a few FacilityToRooms
     * const { count } = await prisma.facilityToRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacilityToRoomDeleteManyArgs>(
      args?: SelectSubset<T, FacilityToRoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityToRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityToRooms
     * const facilityToRoom = await prisma.facilityToRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacilityToRoomUpdateManyArgs>(
      args: SelectSubset<T, FacilityToRoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacilityToRoom.
     * @param {FacilityToRoomUpsertArgs} args - Arguments to update or create a FacilityToRoom.
     * @example
     * // Update or create a FacilityToRoom
     * const facilityToRoom = await prisma.facilityToRoom.upsert({
     *   create: {
     *     // ... data to create a FacilityToRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityToRoom we want to update
     *   }
     * })
    **/
    upsert<T extends FacilityToRoomUpsertArgs>(
      args: SelectSubset<T, FacilityToRoomUpsertArgs>
    ): Prisma__FacilityToRoomClient<FacilityToRoomGetPayload<T>>

    /**
     * Count the number of FacilityToRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomCountArgs} args - Arguments to filter FacilityToRooms to count.
     * @example
     * // Count the number of FacilityToRooms
     * const count = await prisma.facilityToRoom.count({
     *   where: {
     *     // ... the filter for the FacilityToRooms we want to count
     *   }
     * })
    **/
    count<T extends FacilityToRoomCountArgs>(
      args?: Subset<T, FacilityToRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityToRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityToRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityToRoomAggregateArgs>(args: Subset<T, FacilityToRoomAggregateArgs>): Prisma.PrismaPromise<GetFacilityToRoomAggregateType<T>>

    /**
     * Group by FacilityToRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityToRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacilityToRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityToRoomGroupByArgs['orderBy'] }
        : { orderBy?: FacilityToRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacilityToRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityToRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityToRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FacilityToRoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    facilities<T extends FacilityArgs= {}>(args?: Subset<T, FacilityArgs>): Prisma__FacilityClient<FacilityGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FacilityToRoom base type for findUnique actions
   */
  export type FacilityToRoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * Filter, which FacilityToRoom to fetch.
     */
    where: FacilityToRoomWhereUniqueInput
  }

  /**
   * FacilityToRoom findUnique
   */
  export interface FacilityToRoomFindUniqueArgs extends FacilityToRoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FacilityToRoom findUniqueOrThrow
   */
  export type FacilityToRoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * Filter, which FacilityToRoom to fetch.
     */
    where: FacilityToRoomWhereUniqueInput
  }


  /**
   * FacilityToRoom base type for findFirst actions
   */
  export type FacilityToRoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * Filter, which FacilityToRoom to fetch.
     */
    where?: FacilityToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToRooms to fetch.
     */
    orderBy?: Enumerable<FacilityToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityToRooms.
     */
    cursor?: FacilityToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityToRooms.
     */
    distinct?: Enumerable<FacilityToRoomScalarFieldEnum>
  }

  /**
   * FacilityToRoom findFirst
   */
  export interface FacilityToRoomFindFirstArgs extends FacilityToRoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FacilityToRoom findFirstOrThrow
   */
  export type FacilityToRoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * Filter, which FacilityToRoom to fetch.
     */
    where?: FacilityToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToRooms to fetch.
     */
    orderBy?: Enumerable<FacilityToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityToRooms.
     */
    cursor?: FacilityToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityToRooms.
     */
    distinct?: Enumerable<FacilityToRoomScalarFieldEnum>
  }


  /**
   * FacilityToRoom findMany
   */
  export type FacilityToRoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * Filter, which FacilityToRooms to fetch.
     */
    where?: FacilityToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityToRooms to fetch.
     */
    orderBy?: Enumerable<FacilityToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityToRooms.
     */
    cursor?: FacilityToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityToRooms.
     */
    skip?: number
    distinct?: Enumerable<FacilityToRoomScalarFieldEnum>
  }


  /**
   * FacilityToRoom create
   */
  export type FacilityToRoomCreateArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * The data needed to create a FacilityToRoom.
     */
    data: XOR<FacilityToRoomCreateInput, FacilityToRoomUncheckedCreateInput>
  }


  /**
   * FacilityToRoom createMany
   */
  export type FacilityToRoomCreateManyArgs = {
    /**
     * The data used to create many FacilityToRooms.
     */
    data: Enumerable<FacilityToRoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FacilityToRoom update
   */
  export type FacilityToRoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * The data needed to update a FacilityToRoom.
     */
    data: XOR<FacilityToRoomUpdateInput, FacilityToRoomUncheckedUpdateInput>
    /**
     * Choose, which FacilityToRoom to update.
     */
    where: FacilityToRoomWhereUniqueInput
  }


  /**
   * FacilityToRoom updateMany
   */
  export type FacilityToRoomUpdateManyArgs = {
    /**
     * The data used to update FacilityToRooms.
     */
    data: XOR<FacilityToRoomUpdateManyMutationInput, FacilityToRoomUncheckedUpdateManyInput>
    /**
     * Filter which FacilityToRooms to update
     */
    where?: FacilityToRoomWhereInput
  }


  /**
   * FacilityToRoom upsert
   */
  export type FacilityToRoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * The filter to search for the FacilityToRoom to update in case it exists.
     */
    where: FacilityToRoomWhereUniqueInput
    /**
     * In case the FacilityToRoom found by the `where` argument doesn't exist, create a new FacilityToRoom with this data.
     */
    create: XOR<FacilityToRoomCreateInput, FacilityToRoomUncheckedCreateInput>
    /**
     * In case the FacilityToRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityToRoomUpdateInput, FacilityToRoomUncheckedUpdateInput>
  }


  /**
   * FacilityToRoom delete
   */
  export type FacilityToRoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
    /**
     * Filter which FacilityToRoom to delete.
     */
    where: FacilityToRoomWhereUniqueInput
  }


  /**
   * FacilityToRoom deleteMany
   */
  export type FacilityToRoomDeleteManyArgs = {
    /**
     * Filter which FacilityToRooms to delete
     */
    where?: FacilityToRoomWhereInput
  }


  /**
   * FacilityToRoom without action
   */
  export type FacilityToRoomArgs = {
    /**
     * Select specific fields to fetch from the FacilityToRoom
     */
    select?: FacilityToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacilityToRoomInclude | null
  }



  /**
   * Model BranchToRoom
   */


  export type AggregateBranchToRoom = {
    _count: BranchToRoomCountAggregateOutputType | null
    _avg: BranchToRoomAvgAggregateOutputType | null
    _sum: BranchToRoomSumAggregateOutputType | null
    _min: BranchToRoomMinAggregateOutputType | null
    _max: BranchToRoomMaxAggregateOutputType | null
  }

  export type BranchToRoomAvgAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
  }

  export type BranchToRoomSumAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
  }

  export type BranchToRoomMinAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BranchToRoomMaxAggregateOutputType = {
    id: number | null
    coWorkId: number | null
    roomId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BranchToRoomCountAggregateOutputType = {
    id: number
    coWorkId: number
    roomId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type BranchToRoomAvgAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
  }

  export type BranchToRoomSumAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
  }

  export type BranchToRoomMinAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
    createAt?: true
    updateAt?: true
  }

  export type BranchToRoomMaxAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
    createAt?: true
    updateAt?: true
  }

  export type BranchToRoomCountAggregateInputType = {
    id?: true
    coWorkId?: true
    roomId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type BranchToRoomAggregateArgs = {
    /**
     * Filter which BranchToRoom to aggregate.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BranchToRooms
    **/
    _count?: true | BranchToRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchToRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchToRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchToRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchToRoomMaxAggregateInputType
  }

  export type GetBranchToRoomAggregateType<T extends BranchToRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBranchToRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranchToRoom[P]>
      : GetScalarType<T[P], AggregateBranchToRoom[P]>
  }




  export type BranchToRoomGroupByArgs = {
    where?: BranchToRoomWhereInput
    orderBy?: Enumerable<BranchToRoomOrderByWithAggregationInput>
    by: BranchToRoomScalarFieldEnum[]
    having?: BranchToRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchToRoomCountAggregateInputType | true
    _avg?: BranchToRoomAvgAggregateInputType
    _sum?: BranchToRoomSumAggregateInputType
    _min?: BranchToRoomMinAggregateInputType
    _max?: BranchToRoomMaxAggregateInputType
  }


  export type BranchToRoomGroupByOutputType = {
    id: number
    coWorkId: number
    roomId: number
    createAt: Date
    updateAt: Date
    _count: BranchToRoomCountAggregateOutputType | null
    _avg: BranchToRoomAvgAggregateOutputType | null
    _sum: BranchToRoomSumAggregateOutputType | null
    _min: BranchToRoomMinAggregateOutputType | null
    _max: BranchToRoomMaxAggregateOutputType | null
  }

  type GetBranchToRoomGroupByPayload<T extends BranchToRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BranchToRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchToRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchToRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BranchToRoomGroupByOutputType[P]>
        }
      >
    >


  export type BranchToRoomSelect = {
    id?: boolean
    coWorkId?: boolean
    roomId?: boolean
    createAt?: boolean
    updateAt?: boolean
    coWork?: boolean | CoWorkArgs
    room?: boolean | RoomArgs
    BookRoom?: boolean | BranchToRoom$BookRoomArgs
    _count?: boolean | BranchToRoomCountOutputTypeArgs
  }


  export type BranchToRoomInclude = {
    coWork?: boolean | CoWorkArgs
    room?: boolean | RoomArgs
    BookRoom?: boolean | BranchToRoom$BookRoomArgs
    _count?: boolean | BranchToRoomCountOutputTypeArgs
  }

  export type BranchToRoomGetPayload<S extends boolean | null | undefined | BranchToRoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BranchToRoom :
    S extends undefined ? never :
    S extends { include: any } & (BranchToRoomArgs | BranchToRoomFindManyArgs)
    ? BranchToRoom  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['include'][P]> :
        P extends 'room' ? RoomGetPayload<S['include'][P]> :
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? BranchToRoomCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BranchToRoomArgs | BranchToRoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['select'][P]> :
        P extends 'room' ? RoomGetPayload<S['select'][P]> :
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? BranchToRoomCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BranchToRoom ? BranchToRoom[P] : never
  } 
      : BranchToRoom


  type BranchToRoomCountArgs = 
    Omit<BranchToRoomFindManyArgs, 'select' | 'include'> & {
      select?: BranchToRoomCountAggregateInputType | true
    }

  export interface BranchToRoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BranchToRoom that matches the filter.
     * @param {BranchToRoomFindUniqueArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BranchToRoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BranchToRoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BranchToRoom'> extends True ? Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>> : Prisma__BranchToRoomClient<BranchToRoomGetPayload<T> | null, null>

    /**
     * Find one BranchToRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BranchToRoomFindUniqueOrThrowArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BranchToRoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BranchToRoomFindUniqueOrThrowArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Find the first BranchToRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomFindFirstArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BranchToRoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BranchToRoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BranchToRoom'> extends True ? Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>> : Prisma__BranchToRoomClient<BranchToRoomGetPayload<T> | null, null>

    /**
     * Find the first BranchToRoom that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomFindFirstOrThrowArgs} args - Arguments to find a BranchToRoom
     * @example
     * // Get one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BranchToRoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BranchToRoomFindFirstOrThrowArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Find zero or more BranchToRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchToRooms
     * const branchToRooms = await prisma.branchToRoom.findMany()
     * 
     * // Get first 10 BranchToRooms
     * const branchToRooms = await prisma.branchToRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchToRoomWithIdOnly = await prisma.branchToRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BranchToRoomFindManyArgs>(
      args?: SelectSubset<T, BranchToRoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<BranchToRoomGetPayload<T>>>

    /**
     * Create a BranchToRoom.
     * @param {BranchToRoomCreateArgs} args - Arguments to create a BranchToRoom.
     * @example
     * // Create one BranchToRoom
     * const BranchToRoom = await prisma.branchToRoom.create({
     *   data: {
     *     // ... data to create a BranchToRoom
     *   }
     * })
     * 
    **/
    create<T extends BranchToRoomCreateArgs>(
      args: SelectSubset<T, BranchToRoomCreateArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Create many BranchToRooms.
     *     @param {BranchToRoomCreateManyArgs} args - Arguments to create many BranchToRooms.
     *     @example
     *     // Create many BranchToRooms
     *     const branchToRoom = await prisma.branchToRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BranchToRoomCreateManyArgs>(
      args?: SelectSubset<T, BranchToRoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BranchToRoom.
     * @param {BranchToRoomDeleteArgs} args - Arguments to delete one BranchToRoom.
     * @example
     * // Delete one BranchToRoom
     * const BranchToRoom = await prisma.branchToRoom.delete({
     *   where: {
     *     // ... filter to delete one BranchToRoom
     *   }
     * })
     * 
    **/
    delete<T extends BranchToRoomDeleteArgs>(
      args: SelectSubset<T, BranchToRoomDeleteArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Update one BranchToRoom.
     * @param {BranchToRoomUpdateArgs} args - Arguments to update one BranchToRoom.
     * @example
     * // Update one BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BranchToRoomUpdateArgs>(
      args: SelectSubset<T, BranchToRoomUpdateArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Delete zero or more BranchToRooms.
     * @param {BranchToRoomDeleteManyArgs} args - Arguments to filter BranchToRooms to delete.
     * @example
     * // Delete a few BranchToRooms
     * const { count } = await prisma.branchToRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BranchToRoomDeleteManyArgs>(
      args?: SelectSubset<T, BranchToRoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchToRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchToRooms
     * const branchToRoom = await prisma.branchToRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BranchToRoomUpdateManyArgs>(
      args: SelectSubset<T, BranchToRoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BranchToRoom.
     * @param {BranchToRoomUpsertArgs} args - Arguments to update or create a BranchToRoom.
     * @example
     * // Update or create a BranchToRoom
     * const branchToRoom = await prisma.branchToRoom.upsert({
     *   create: {
     *     // ... data to create a BranchToRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchToRoom we want to update
     *   }
     * })
    **/
    upsert<T extends BranchToRoomUpsertArgs>(
      args: SelectSubset<T, BranchToRoomUpsertArgs>
    ): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T>>

    /**
     * Count the number of BranchToRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomCountArgs} args - Arguments to filter BranchToRooms to count.
     * @example
     * // Count the number of BranchToRooms
     * const count = await prisma.branchToRoom.count({
     *   where: {
     *     // ... the filter for the BranchToRooms we want to count
     *   }
     * })
    **/
    count<T extends BranchToRoomCountArgs>(
      args?: Subset<T, BranchToRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchToRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BranchToRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchToRoomAggregateArgs>(args: Subset<T, BranchToRoomAggregateArgs>): Prisma.PrismaPromise<GetBranchToRoomAggregateType<T>>

    /**
     * Group by BranchToRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchToRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchToRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchToRoomGroupByArgs['orderBy'] }
        : { orderBy?: BranchToRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchToRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchToRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BranchToRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BranchToRoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coWork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    room<T extends RoomArgs= {}>(args?: Subset<T, RoomArgs>): Prisma__RoomClient<RoomGetPayload<T> | Null>;

    BookRoom<T extends BranchToRoom$BookRoomArgs= {}>(args?: Subset<T, BranchToRoom$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BranchToRoom base type for findUnique actions
   */
  export type BranchToRoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where: BranchToRoomWhereUniqueInput
  }

  /**
   * BranchToRoom findUnique
   */
  export interface BranchToRoomFindUniqueArgs extends BranchToRoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BranchToRoom findUniqueOrThrow
   */
  export type BranchToRoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where: BranchToRoomWhereUniqueInput
  }


  /**
   * BranchToRoom base type for findFirst actions
   */
  export type BranchToRoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchToRooms.
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchToRooms.
     */
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }

  /**
   * BranchToRoom findFirst
   */
  export interface BranchToRoomFindFirstArgs extends BranchToRoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BranchToRoom findFirstOrThrow
   */
  export type BranchToRoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRoom to fetch.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchToRooms.
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchToRooms.
     */
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * BranchToRoom findMany
   */
  export type BranchToRoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter, which BranchToRooms to fetch.
     */
    where?: BranchToRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchToRooms to fetch.
     */
    orderBy?: Enumerable<BranchToRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BranchToRooms.
     */
    cursor?: BranchToRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchToRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchToRooms.
     */
    skip?: number
    distinct?: Enumerable<BranchToRoomScalarFieldEnum>
  }


  /**
   * BranchToRoom create
   */
  export type BranchToRoomCreateArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * The data needed to create a BranchToRoom.
     */
    data: XOR<BranchToRoomCreateInput, BranchToRoomUncheckedCreateInput>
  }


  /**
   * BranchToRoom createMany
   */
  export type BranchToRoomCreateManyArgs = {
    /**
     * The data used to create many BranchToRooms.
     */
    data: Enumerable<BranchToRoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BranchToRoom update
   */
  export type BranchToRoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * The data needed to update a BranchToRoom.
     */
    data: XOR<BranchToRoomUpdateInput, BranchToRoomUncheckedUpdateInput>
    /**
     * Choose, which BranchToRoom to update.
     */
    where: BranchToRoomWhereUniqueInput
  }


  /**
   * BranchToRoom updateMany
   */
  export type BranchToRoomUpdateManyArgs = {
    /**
     * The data used to update BranchToRooms.
     */
    data: XOR<BranchToRoomUpdateManyMutationInput, BranchToRoomUncheckedUpdateManyInput>
    /**
     * Filter which BranchToRooms to update
     */
    where?: BranchToRoomWhereInput
  }


  /**
   * BranchToRoom upsert
   */
  export type BranchToRoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * The filter to search for the BranchToRoom to update in case it exists.
     */
    where: BranchToRoomWhereUniqueInput
    /**
     * In case the BranchToRoom found by the `where` argument doesn't exist, create a new BranchToRoom with this data.
     */
    create: XOR<BranchToRoomCreateInput, BranchToRoomUncheckedCreateInput>
    /**
     * In case the BranchToRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchToRoomUpdateInput, BranchToRoomUncheckedUpdateInput>
  }


  /**
   * BranchToRoom delete
   */
  export type BranchToRoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
    /**
     * Filter which BranchToRoom to delete.
     */
    where: BranchToRoomWhereUniqueInput
  }


  /**
   * BranchToRoom deleteMany
   */
  export type BranchToRoomDeleteManyArgs = {
    /**
     * Filter which BranchToRooms to delete
     */
    where?: BranchToRoomWhereInput
  }


  /**
   * BranchToRoom.BookRoom
   */
  export type BranchToRoom$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * BranchToRoom without action
   */
  export type BranchToRoomArgs = {
    /**
     * Select specific fields to fetch from the BranchToRoom
     */
    select?: BranchToRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchToRoomInclude | null
  }



  /**
   * Model BookRoom
   */


  export type AggregateBookRoom = {
    _count: BookRoomCountAggregateOutputType | null
    _avg: BookRoomAvgAggregateOutputType | null
    _sum: BookRoomSumAggregateOutputType | null
    _min: BookRoomMinAggregateOutputType | null
    _max: BookRoomMaxAggregateOutputType | null
  }

  export type BookRoomAvgAggregateOutputType = {
    id: number | null
    branchToRoomId: number | null
    roomRateId: number | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
  }

  export type BookRoomSumAggregateOutputType = {
    id: number | null
    branchToRoomId: number | null
    roomRateId: number | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
  }

  export type BookRoomMinAggregateOutputType = {
    id: number | null
    branchToRoomId: number | null
    startTime: Date | null
    roomRateId: number | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
  }

  export type BookRoomMaxAggregateOutputType = {
    id: number | null
    branchToRoomId: number | null
    startTime: Date | null
    roomRateId: number | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
    userExternalId: number | null
    vertifyBookingCodeId: number | null
  }

  export type BookRoomCountAggregateOutputType = {
    id: number
    branchToRoomId: number
    startTime: number
    roomRateId: number
    status: number
    createAt: number
    updateAt: number
    userExternalId: number
    vertifyBookingCodeId: number
    _all: number
  }


  export type BookRoomAvgAggregateInputType = {
    id?: true
    branchToRoomId?: true
    roomRateId?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
  }

  export type BookRoomSumAggregateInputType = {
    id?: true
    branchToRoomId?: true
    roomRateId?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
  }

  export type BookRoomMinAggregateInputType = {
    id?: true
    branchToRoomId?: true
    startTime?: true
    roomRateId?: true
    status?: true
    createAt?: true
    updateAt?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
  }

  export type BookRoomMaxAggregateInputType = {
    id?: true
    branchToRoomId?: true
    startTime?: true
    roomRateId?: true
    status?: true
    createAt?: true
    updateAt?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
  }

  export type BookRoomCountAggregateInputType = {
    id?: true
    branchToRoomId?: true
    startTime?: true
    roomRateId?: true
    status?: true
    createAt?: true
    updateAt?: true
    userExternalId?: true
    vertifyBookingCodeId?: true
    _all?: true
  }

  export type BookRoomAggregateArgs = {
    /**
     * Filter which BookRoom to aggregate.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookRooms
    **/
    _count?: true | BookRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookRoomMaxAggregateInputType
  }

  export type GetBookRoomAggregateType<T extends BookRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBookRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookRoom[P]>
      : GetScalarType<T[P], AggregateBookRoom[P]>
  }




  export type BookRoomGroupByArgs = {
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithAggregationInput>
    by: BookRoomScalarFieldEnum[]
    having?: BookRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookRoomCountAggregateInputType | true
    _avg?: BookRoomAvgAggregateInputType
    _sum?: BookRoomSumAggregateInputType
    _min?: BookRoomMinAggregateInputType
    _max?: BookRoomMaxAggregateInputType
  }


  export type BookRoomGroupByOutputType = {
    id: number
    branchToRoomId: number | null
    startTime: Date
    roomRateId: number
    status: string
    createAt: Date
    updateAt: Date
    userExternalId: number
    vertifyBookingCodeId: number
    _count: BookRoomCountAggregateOutputType | null
    _avg: BookRoomAvgAggregateOutputType | null
    _sum: BookRoomSumAggregateOutputType | null
    _min: BookRoomMinAggregateOutputType | null
    _max: BookRoomMaxAggregateOutputType | null
  }

  type GetBookRoomGroupByPayload<T extends BookRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BookRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BookRoomGroupByOutputType[P]>
        }
      >
    >


  export type BookRoomSelect = {
    id?: boolean
    branchToRoomId?: boolean
    startTime?: boolean
    roomRateId?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    userExternalId?: boolean
    vertifyBookingCodeId?: boolean
    branchToRoom?: boolean | BranchToRoomArgs
    roomRate?: boolean | RoomRateArgs
    UserExternal?: boolean | UserExternalArgs
    vertifyCode?: boolean | VertifyBookingCodeArgs
  }


  export type BookRoomInclude = {
    branchToRoom?: boolean | BranchToRoomArgs
    roomRate?: boolean | RoomRateArgs
    UserExternal?: boolean | UserExternalArgs
    vertifyCode?: boolean | VertifyBookingCodeArgs
  }

  export type BookRoomGetPayload<S extends boolean | null | undefined | BookRoomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BookRoom :
    S extends undefined ? never :
    S extends { include: any } & (BookRoomArgs | BookRoomFindManyArgs)
    ? BookRoom  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branchToRoom' ? BranchToRoomGetPayload<S['include'][P]> | null :
        P extends 'roomRate' ? RoomRateGetPayload<S['include'][P]> :
        P extends 'UserExternal' ? UserExternalGetPayload<S['include'][P]> :
        P extends 'vertifyCode' ? VertifyBookingCodeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BookRoomArgs | BookRoomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branchToRoom' ? BranchToRoomGetPayload<S['select'][P]> | null :
        P extends 'roomRate' ? RoomRateGetPayload<S['select'][P]> :
        P extends 'UserExternal' ? UserExternalGetPayload<S['select'][P]> :
        P extends 'vertifyCode' ? VertifyBookingCodeGetPayload<S['select'][P]> :  P extends keyof BookRoom ? BookRoom[P] : never
  } 
      : BookRoom


  type BookRoomCountArgs = 
    Omit<BookRoomFindManyArgs, 'select' | 'include'> & {
      select?: BookRoomCountAggregateInputType | true
    }

  export interface BookRoomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BookRoom that matches the filter.
     * @param {BookRoomFindUniqueArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookRoomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookRoomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BookRoom'> extends True ? Prisma__BookRoomClient<BookRoomGetPayload<T>> : Prisma__BookRoomClient<BookRoomGetPayload<T> | null, null>

    /**
     * Find one BookRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookRoomFindUniqueOrThrowArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookRoomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookRoomFindUniqueOrThrowArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Find the first BookRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomFindFirstArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookRoomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookRoomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BookRoom'> extends True ? Prisma__BookRoomClient<BookRoomGetPayload<T>> : Prisma__BookRoomClient<BookRoomGetPayload<T> | null, null>

    /**
     * Find the first BookRoom that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomFindFirstOrThrowArgs} args - Arguments to find a BookRoom
     * @example
     * // Get one BookRoom
     * const bookRoom = await prisma.bookRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookRoomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookRoomFindFirstOrThrowArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Find zero or more BookRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookRooms
     * const bookRooms = await prisma.bookRoom.findMany()
     * 
     * // Get first 10 BookRooms
     * const bookRooms = await prisma.bookRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookRoomWithIdOnly = await prisma.bookRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookRoomFindManyArgs>(
      args?: SelectSubset<T, BookRoomFindManyArgs>
    ): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>>

    /**
     * Create a BookRoom.
     * @param {BookRoomCreateArgs} args - Arguments to create a BookRoom.
     * @example
     * // Create one BookRoom
     * const BookRoom = await prisma.bookRoom.create({
     *   data: {
     *     // ... data to create a BookRoom
     *   }
     * })
     * 
    **/
    create<T extends BookRoomCreateArgs>(
      args: SelectSubset<T, BookRoomCreateArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Create many BookRooms.
     *     @param {BookRoomCreateManyArgs} args - Arguments to create many BookRooms.
     *     @example
     *     // Create many BookRooms
     *     const bookRoom = await prisma.bookRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookRoomCreateManyArgs>(
      args?: SelectSubset<T, BookRoomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookRoom.
     * @param {BookRoomDeleteArgs} args - Arguments to delete one BookRoom.
     * @example
     * // Delete one BookRoom
     * const BookRoom = await prisma.bookRoom.delete({
     *   where: {
     *     // ... filter to delete one BookRoom
     *   }
     * })
     * 
    **/
    delete<T extends BookRoomDeleteArgs>(
      args: SelectSubset<T, BookRoomDeleteArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Update one BookRoom.
     * @param {BookRoomUpdateArgs} args - Arguments to update one BookRoom.
     * @example
     * // Update one BookRoom
     * const bookRoom = await prisma.bookRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookRoomUpdateArgs>(
      args: SelectSubset<T, BookRoomUpdateArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Delete zero or more BookRooms.
     * @param {BookRoomDeleteManyArgs} args - Arguments to filter BookRooms to delete.
     * @example
     * // Delete a few BookRooms
     * const { count } = await prisma.bookRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookRoomDeleteManyArgs>(
      args?: SelectSubset<T, BookRoomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookRooms
     * const bookRoom = await prisma.bookRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookRoomUpdateManyArgs>(
      args: SelectSubset<T, BookRoomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookRoom.
     * @param {BookRoomUpsertArgs} args - Arguments to update or create a BookRoom.
     * @example
     * // Update or create a BookRoom
     * const bookRoom = await prisma.bookRoom.upsert({
     *   create: {
     *     // ... data to create a BookRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookRoom we want to update
     *   }
     * })
    **/
    upsert<T extends BookRoomUpsertArgs>(
      args: SelectSubset<T, BookRoomUpsertArgs>
    ): Prisma__BookRoomClient<BookRoomGetPayload<T>>

    /**
     * Count the number of BookRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomCountArgs} args - Arguments to filter BookRooms to count.
     * @example
     * // Count the number of BookRooms
     * const count = await prisma.bookRoom.count({
     *   where: {
     *     // ... the filter for the BookRooms we want to count
     *   }
     * })
    **/
    count<T extends BookRoomCountArgs>(
      args?: Subset<T, BookRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookRoomAggregateArgs>(args: Subset<T, BookRoomAggregateArgs>): Prisma.PrismaPromise<GetBookRoomAggregateType<T>>

    /**
     * Group by BookRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookRoomGroupByArgs['orderBy'] }
        : { orderBy?: BookRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BookRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookRoomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branchToRoom<T extends BranchToRoomArgs= {}>(args?: Subset<T, BranchToRoomArgs>): Prisma__BranchToRoomClient<BranchToRoomGetPayload<T> | Null>;

    roomRate<T extends RoomRateArgs= {}>(args?: Subset<T, RoomRateArgs>): Prisma__RoomRateClient<RoomRateGetPayload<T> | Null>;

    UserExternal<T extends UserExternalArgs= {}>(args?: Subset<T, UserExternalArgs>): Prisma__UserExternalClient<UserExternalGetPayload<T> | Null>;

    vertifyCode<T extends VertifyBookingCodeArgs= {}>(args?: Subset<T, VertifyBookingCodeArgs>): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BookRoom base type for findUnique actions
   */
  export type BookRoomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where: BookRoomWhereUniqueInput
  }

  /**
   * BookRoom findUnique
   */
  export interface BookRoomFindUniqueArgs extends BookRoomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BookRoom findUniqueOrThrow
   */
  export type BookRoomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where: BookRoomWhereUniqueInput
  }


  /**
   * BookRoom base type for findFirst actions
   */
  export type BookRoomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookRooms.
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookRooms.
     */
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }

  /**
   * BookRoom findFirst
   */
  export interface BookRoomFindFirstArgs extends BookRoomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BookRoom findFirstOrThrow
   */
  export type BookRoomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRoom to fetch.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookRooms.
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookRooms.
     */
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * BookRoom findMany
   */
  export type BookRoomFindManyArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter, which BookRooms to fetch.
     */
    where?: BookRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookRooms to fetch.
     */
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookRooms.
     */
    cursor?: BookRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookRooms.
     */
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * BookRoom create
   */
  export type BookRoomCreateArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * The data needed to create a BookRoom.
     */
    data: XOR<BookRoomCreateInput, BookRoomUncheckedCreateInput>
  }


  /**
   * BookRoom createMany
   */
  export type BookRoomCreateManyArgs = {
    /**
     * The data used to create many BookRooms.
     */
    data: Enumerable<BookRoomCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BookRoom update
   */
  export type BookRoomUpdateArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * The data needed to update a BookRoom.
     */
    data: XOR<BookRoomUpdateInput, BookRoomUncheckedUpdateInput>
    /**
     * Choose, which BookRoom to update.
     */
    where: BookRoomWhereUniqueInput
  }


  /**
   * BookRoom updateMany
   */
  export type BookRoomUpdateManyArgs = {
    /**
     * The data used to update BookRooms.
     */
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyInput>
    /**
     * Filter which BookRooms to update
     */
    where?: BookRoomWhereInput
  }


  /**
   * BookRoom upsert
   */
  export type BookRoomUpsertArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * The filter to search for the BookRoom to update in case it exists.
     */
    where: BookRoomWhereUniqueInput
    /**
     * In case the BookRoom found by the `where` argument doesn't exist, create a new BookRoom with this data.
     */
    create: XOR<BookRoomCreateInput, BookRoomUncheckedCreateInput>
    /**
     * In case the BookRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookRoomUpdateInput, BookRoomUncheckedUpdateInput>
  }


  /**
   * BookRoom delete
   */
  export type BookRoomDeleteArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    /**
     * Filter which BookRoom to delete.
     */
    where: BookRoomWhereUniqueInput
  }


  /**
   * BookRoom deleteMany
   */
  export type BookRoomDeleteManyArgs = {
    /**
     * Filter which BookRooms to delete
     */
    where?: BookRoomWhereInput
  }


  /**
   * BookRoom without action
   */
  export type BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
  }



  /**
   * Model OpenClose
   */


  export type AggregateOpenClose = {
    _count: OpenCloseCountAggregateOutputType | null
    _avg: OpenCloseAvgAggregateOutputType | null
    _sum: OpenCloseSumAggregateOutputType | null
    _min: OpenCloseMinAggregateOutputType | null
    _max: OpenCloseMaxAggregateOutputType | null
  }

  export type OpenCloseAvgAggregateOutputType = {
    id: number | null
    openTimeMon: number | null
    closeTimeMon: number | null
    openTimeTue: number | null
    closeTimeTue: number | null
    openTimeWed: number | null
    closeTimeWed: number | null
    openTimeThurs: number | null
    closeTimeThurs: number | null
    openTimeFri: number | null
    closeTimeFri: number | null
    openTimeSat: number | null
    closeTimeSat: number | null
    openTimeSun: number | null
    closeTimeSun: number | null
    coWorkId: number | null
  }

  export type OpenCloseSumAggregateOutputType = {
    id: number | null
    openTimeMon: number | null
    closeTimeMon: number | null
    openTimeTue: number | null
    closeTimeTue: number | null
    openTimeWed: number | null
    closeTimeWed: number | null
    openTimeThurs: number | null
    closeTimeThurs: number | null
    openTimeFri: number | null
    closeTimeFri: number | null
    openTimeSat: number | null
    closeTimeSat: number | null
    openTimeSun: number | null
    closeTimeSun: number | null
    coWorkId: number | null
  }

  export type OpenCloseMinAggregateOutputType = {
    id: number | null
    openTimeMon: number | null
    closeTimeMon: number | null
    isOpenMon: boolean | null
    isOpen24hoursMon: boolean | null
    openTimeTue: number | null
    closeTimeTue: number | null
    isOpenTue: boolean | null
    isOpen24hoursTue: boolean | null
    openTimeWed: number | null
    closeTimeWed: number | null
    isOpenWed: boolean | null
    isOpen24hoursWed: boolean | null
    openTimeThurs: number | null
    closeTimeThurs: number | null
    isOpenThurs: boolean | null
    isOpen24hoursThurs: boolean | null
    openTimeFri: number | null
    closeTimeFri: number | null
    isOpenFri: boolean | null
    isOpen24hoursFri: boolean | null
    openTimeSat: number | null
    closeTimeSat: number | null
    isOpenSat: boolean | null
    isOpen24hoursSat: boolean | null
    openTimeSun: number | null
    closeTimeSun: number | null
    isOpenSun: boolean | null
    isOpen24hoursSun: boolean | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenCloseMaxAggregateOutputType = {
    id: number | null
    openTimeMon: number | null
    closeTimeMon: number | null
    isOpenMon: boolean | null
    isOpen24hoursMon: boolean | null
    openTimeTue: number | null
    closeTimeTue: number | null
    isOpenTue: boolean | null
    isOpen24hoursTue: boolean | null
    openTimeWed: number | null
    closeTimeWed: number | null
    isOpenWed: boolean | null
    isOpen24hoursWed: boolean | null
    openTimeThurs: number | null
    closeTimeThurs: number | null
    isOpenThurs: boolean | null
    isOpen24hoursThurs: boolean | null
    openTimeFri: number | null
    closeTimeFri: number | null
    isOpenFri: boolean | null
    isOpen24hoursFri: boolean | null
    openTimeSat: number | null
    closeTimeSat: number | null
    isOpenSat: boolean | null
    isOpen24hoursSat: boolean | null
    openTimeSun: number | null
    closeTimeSun: number | null
    isOpenSun: boolean | null
    isOpen24hoursSun: boolean | null
    coWorkId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type OpenCloseCountAggregateOutputType = {
    id: number
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: number
    isOpen24hoursMon: number
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: number
    isOpen24hoursTue: number
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: number
    isOpen24hoursWed: number
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: number
    isOpen24hoursThurs: number
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: number
    isOpen24hoursFri: number
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: number
    isOpen24hoursSat: number
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: number
    isOpen24hoursSun: number
    coWorkId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type OpenCloseAvgAggregateInputType = {
    id?: true
    openTimeMon?: true
    closeTimeMon?: true
    openTimeTue?: true
    closeTimeTue?: true
    openTimeWed?: true
    closeTimeWed?: true
    openTimeThurs?: true
    closeTimeThurs?: true
    openTimeFri?: true
    closeTimeFri?: true
    openTimeSat?: true
    closeTimeSat?: true
    openTimeSun?: true
    closeTimeSun?: true
    coWorkId?: true
  }

  export type OpenCloseSumAggregateInputType = {
    id?: true
    openTimeMon?: true
    closeTimeMon?: true
    openTimeTue?: true
    closeTimeTue?: true
    openTimeWed?: true
    closeTimeWed?: true
    openTimeThurs?: true
    closeTimeThurs?: true
    openTimeFri?: true
    closeTimeFri?: true
    openTimeSat?: true
    closeTimeSat?: true
    openTimeSun?: true
    closeTimeSun?: true
    coWorkId?: true
  }

  export type OpenCloseMinAggregateInputType = {
    id?: true
    openTimeMon?: true
    closeTimeMon?: true
    isOpenMon?: true
    isOpen24hoursMon?: true
    openTimeTue?: true
    closeTimeTue?: true
    isOpenTue?: true
    isOpen24hoursTue?: true
    openTimeWed?: true
    closeTimeWed?: true
    isOpenWed?: true
    isOpen24hoursWed?: true
    openTimeThurs?: true
    closeTimeThurs?: true
    isOpenThurs?: true
    isOpen24hoursThurs?: true
    openTimeFri?: true
    closeTimeFri?: true
    isOpenFri?: true
    isOpen24hoursFri?: true
    openTimeSat?: true
    closeTimeSat?: true
    isOpenSat?: true
    isOpen24hoursSat?: true
    openTimeSun?: true
    closeTimeSun?: true
    isOpenSun?: true
    isOpen24hoursSun?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenCloseMaxAggregateInputType = {
    id?: true
    openTimeMon?: true
    closeTimeMon?: true
    isOpenMon?: true
    isOpen24hoursMon?: true
    openTimeTue?: true
    closeTimeTue?: true
    isOpenTue?: true
    isOpen24hoursTue?: true
    openTimeWed?: true
    closeTimeWed?: true
    isOpenWed?: true
    isOpen24hoursWed?: true
    openTimeThurs?: true
    closeTimeThurs?: true
    isOpenThurs?: true
    isOpen24hoursThurs?: true
    openTimeFri?: true
    closeTimeFri?: true
    isOpenFri?: true
    isOpen24hoursFri?: true
    openTimeSat?: true
    closeTimeSat?: true
    isOpenSat?: true
    isOpen24hoursSat?: true
    openTimeSun?: true
    closeTimeSun?: true
    isOpenSun?: true
    isOpen24hoursSun?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
  }

  export type OpenCloseCountAggregateInputType = {
    id?: true
    openTimeMon?: true
    closeTimeMon?: true
    isOpenMon?: true
    isOpen24hoursMon?: true
    openTimeTue?: true
    closeTimeTue?: true
    isOpenTue?: true
    isOpen24hoursTue?: true
    openTimeWed?: true
    closeTimeWed?: true
    isOpenWed?: true
    isOpen24hoursWed?: true
    openTimeThurs?: true
    closeTimeThurs?: true
    isOpenThurs?: true
    isOpen24hoursThurs?: true
    openTimeFri?: true
    closeTimeFri?: true
    isOpenFri?: true
    isOpen24hoursFri?: true
    openTimeSat?: true
    closeTimeSat?: true
    isOpenSat?: true
    isOpen24hoursSat?: true
    openTimeSun?: true
    closeTimeSun?: true
    isOpenSun?: true
    isOpen24hoursSun?: true
    coWorkId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type OpenCloseAggregateArgs = {
    /**
     * Filter which OpenClose to aggregate.
     */
    where?: OpenCloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloses to fetch.
     */
    orderBy?: Enumerable<OpenCloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpenCloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpenCloses
    **/
    _count?: true | OpenCloseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpenCloseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpenCloseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpenCloseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpenCloseMaxAggregateInputType
  }

  export type GetOpenCloseAggregateType<T extends OpenCloseAggregateArgs> = {
        [P in keyof T & keyof AggregateOpenClose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpenClose[P]>
      : GetScalarType<T[P], AggregateOpenClose[P]>
  }




  export type OpenCloseGroupByArgs = {
    where?: OpenCloseWhereInput
    orderBy?: Enumerable<OpenCloseOrderByWithAggregationInput>
    by: OpenCloseScalarFieldEnum[]
    having?: OpenCloseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpenCloseCountAggregateInputType | true
    _avg?: OpenCloseAvgAggregateInputType
    _sum?: OpenCloseSumAggregateInputType
    _min?: OpenCloseMinAggregateInputType
    _max?: OpenCloseMaxAggregateInputType
  }


  export type OpenCloseGroupByOutputType = {
    id: number
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: boolean
    isOpen24hoursMon: boolean
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: boolean
    isOpen24hoursTue: boolean
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: boolean
    isOpen24hoursWed: boolean
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: boolean
    isOpen24hoursThurs: boolean
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: boolean
    isOpen24hoursFri: boolean
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: boolean
    isOpen24hoursSat: boolean
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: boolean
    isOpen24hoursSun: boolean
    coWorkId: number
    createAt: Date
    updateAt: Date
    _count: OpenCloseCountAggregateOutputType | null
    _avg: OpenCloseAvgAggregateOutputType | null
    _sum: OpenCloseSumAggregateOutputType | null
    _min: OpenCloseMinAggregateOutputType | null
    _max: OpenCloseMaxAggregateOutputType | null
  }

  type GetOpenCloseGroupByPayload<T extends OpenCloseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OpenCloseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpenCloseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpenCloseGroupByOutputType[P]>
            : GetScalarType<T[P], OpenCloseGroupByOutputType[P]>
        }
      >
    >


  export type OpenCloseSelect = {
    id?: boolean
    openTimeMon?: boolean
    closeTimeMon?: boolean
    isOpenMon?: boolean
    isOpen24hoursMon?: boolean
    openTimeTue?: boolean
    closeTimeTue?: boolean
    isOpenTue?: boolean
    isOpen24hoursTue?: boolean
    openTimeWed?: boolean
    closeTimeWed?: boolean
    isOpenWed?: boolean
    isOpen24hoursWed?: boolean
    openTimeThurs?: boolean
    closeTimeThurs?: boolean
    isOpenThurs?: boolean
    isOpen24hoursThurs?: boolean
    openTimeFri?: boolean
    closeTimeFri?: boolean
    isOpenFri?: boolean
    isOpen24hoursFri?: boolean
    openTimeSat?: boolean
    closeTimeSat?: boolean
    isOpenSat?: boolean
    isOpen24hoursSat?: boolean
    openTimeSun?: boolean
    closeTimeSun?: boolean
    isOpenSun?: boolean
    isOpen24hoursSun?: boolean
    coWorkId?: boolean
    createAt?: boolean
    updateAt?: boolean
    coWork?: boolean | CoWorkArgs
  }


  export type OpenCloseInclude = {
    coWork?: boolean | CoWorkArgs
  }

  export type OpenCloseGetPayload<S extends boolean | null | undefined | OpenCloseArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OpenClose :
    S extends undefined ? never :
    S extends { include: any } & (OpenCloseArgs | OpenCloseFindManyArgs)
    ? OpenClose  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OpenCloseArgs | OpenCloseFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coWork' ? CoWorkGetPayload<S['select'][P]> :  P extends keyof OpenClose ? OpenClose[P] : never
  } 
      : OpenClose


  type OpenCloseCountArgs = 
    Omit<OpenCloseFindManyArgs, 'select' | 'include'> & {
      select?: OpenCloseCountAggregateInputType | true
    }

  export interface OpenCloseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OpenClose that matches the filter.
     * @param {OpenCloseFindUniqueArgs} args - Arguments to find a OpenClose
     * @example
     * // Get one OpenClose
     * const openClose = await prisma.openClose.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OpenCloseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OpenCloseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OpenClose'> extends True ? Prisma__OpenCloseClient<OpenCloseGetPayload<T>> : Prisma__OpenCloseClient<OpenCloseGetPayload<T> | null, null>

    /**
     * Find one OpenClose that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OpenCloseFindUniqueOrThrowArgs} args - Arguments to find a OpenClose
     * @example
     * // Get one OpenClose
     * const openClose = await prisma.openClose.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OpenCloseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OpenCloseFindUniqueOrThrowArgs>
    ): Prisma__OpenCloseClient<OpenCloseGetPayload<T>>

    /**
     * Find the first OpenClose that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseFindFirstArgs} args - Arguments to find a OpenClose
     * @example
     * // Get one OpenClose
     * const openClose = await prisma.openClose.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OpenCloseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OpenCloseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OpenClose'> extends True ? Prisma__OpenCloseClient<OpenCloseGetPayload<T>> : Prisma__OpenCloseClient<OpenCloseGetPayload<T> | null, null>

    /**
     * Find the first OpenClose that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseFindFirstOrThrowArgs} args - Arguments to find a OpenClose
     * @example
     * // Get one OpenClose
     * const openClose = await prisma.openClose.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OpenCloseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OpenCloseFindFirstOrThrowArgs>
    ): Prisma__OpenCloseClient<OpenCloseGetPayload<T>>

    /**
     * Find zero or more OpenCloses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpenCloses
     * const openCloses = await prisma.openClose.findMany()
     * 
     * // Get first 10 OpenCloses
     * const openCloses = await prisma.openClose.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openCloseWithIdOnly = await prisma.openClose.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OpenCloseFindManyArgs>(
      args?: SelectSubset<T, OpenCloseFindManyArgs>
    ): Prisma.PrismaPromise<Array<OpenCloseGetPayload<T>>>

    /**
     * Create a OpenClose.
     * @param {OpenCloseCreateArgs} args - Arguments to create a OpenClose.
     * @example
     * // Create one OpenClose
     * const OpenClose = await prisma.openClose.create({
     *   data: {
     *     // ... data to create a OpenClose
     *   }
     * })
     * 
    **/
    create<T extends OpenCloseCreateArgs>(
      args: SelectSubset<T, OpenCloseCreateArgs>
    ): Prisma__OpenCloseClient<OpenCloseGetPayload<T>>

    /**
     * Create many OpenCloses.
     *     @param {OpenCloseCreateManyArgs} args - Arguments to create many OpenCloses.
     *     @example
     *     // Create many OpenCloses
     *     const openClose = await prisma.openClose.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OpenCloseCreateManyArgs>(
      args?: SelectSubset<T, OpenCloseCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OpenClose.
     * @param {OpenCloseDeleteArgs} args - Arguments to delete one OpenClose.
     * @example
     * // Delete one OpenClose
     * const OpenClose = await prisma.openClose.delete({
     *   where: {
     *     // ... filter to delete one OpenClose
     *   }
     * })
     * 
    **/
    delete<T extends OpenCloseDeleteArgs>(
      args: SelectSubset<T, OpenCloseDeleteArgs>
    ): Prisma__OpenCloseClient<OpenCloseGetPayload<T>>

    /**
     * Update one OpenClose.
     * @param {OpenCloseUpdateArgs} args - Arguments to update one OpenClose.
     * @example
     * // Update one OpenClose
     * const openClose = await prisma.openClose.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OpenCloseUpdateArgs>(
      args: SelectSubset<T, OpenCloseUpdateArgs>
    ): Prisma__OpenCloseClient<OpenCloseGetPayload<T>>

    /**
     * Delete zero or more OpenCloses.
     * @param {OpenCloseDeleteManyArgs} args - Arguments to filter OpenCloses to delete.
     * @example
     * // Delete a few OpenCloses
     * const { count } = await prisma.openClose.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OpenCloseDeleteManyArgs>(
      args?: SelectSubset<T, OpenCloseDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenCloses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpenCloses
     * const openClose = await prisma.openClose.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OpenCloseUpdateManyArgs>(
      args: SelectSubset<T, OpenCloseUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpenClose.
     * @param {OpenCloseUpsertArgs} args - Arguments to update or create a OpenClose.
     * @example
     * // Update or create a OpenClose
     * const openClose = await prisma.openClose.upsert({
     *   create: {
     *     // ... data to create a OpenClose
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpenClose we want to update
     *   }
     * })
    **/
    upsert<T extends OpenCloseUpsertArgs>(
      args: SelectSubset<T, OpenCloseUpsertArgs>
    ): Prisma__OpenCloseClient<OpenCloseGetPayload<T>>

    /**
     * Count the number of OpenCloses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseCountArgs} args - Arguments to filter OpenCloses to count.
     * @example
     * // Count the number of OpenCloses
     * const count = await prisma.openClose.count({
     *   where: {
     *     // ... the filter for the OpenCloses we want to count
     *   }
     * })
    **/
    count<T extends OpenCloseCountArgs>(
      args?: Subset<T, OpenCloseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpenCloseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpenClose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpenCloseAggregateArgs>(args: Subset<T, OpenCloseAggregateArgs>): Prisma.PrismaPromise<GetOpenCloseAggregateType<T>>

    /**
     * Group by OpenClose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenCloseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpenCloseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpenCloseGroupByArgs['orderBy'] }
        : { orderBy?: OpenCloseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpenCloseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenCloseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OpenClose.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OpenCloseClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    coWork<T extends CoWorkArgs= {}>(args?: Subset<T, CoWorkArgs>): Prisma__CoWorkClient<CoWorkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OpenClose base type for findUnique actions
   */
  export type OpenCloseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * Filter, which OpenClose to fetch.
     */
    where: OpenCloseWhereUniqueInput
  }

  /**
   * OpenClose findUnique
   */
  export interface OpenCloseFindUniqueArgs extends OpenCloseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OpenClose findUniqueOrThrow
   */
  export type OpenCloseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * Filter, which OpenClose to fetch.
     */
    where: OpenCloseWhereUniqueInput
  }


  /**
   * OpenClose base type for findFirst actions
   */
  export type OpenCloseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * Filter, which OpenClose to fetch.
     */
    where?: OpenCloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloses to fetch.
     */
    orderBy?: Enumerable<OpenCloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenCloses.
     */
    cursor?: OpenCloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenCloses.
     */
    distinct?: Enumerable<OpenCloseScalarFieldEnum>
  }

  /**
   * OpenClose findFirst
   */
  export interface OpenCloseFindFirstArgs extends OpenCloseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OpenClose findFirstOrThrow
   */
  export type OpenCloseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * Filter, which OpenClose to fetch.
     */
    where?: OpenCloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloses to fetch.
     */
    orderBy?: Enumerable<OpenCloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenCloses.
     */
    cursor?: OpenCloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenCloses.
     */
    distinct?: Enumerable<OpenCloseScalarFieldEnum>
  }


  /**
   * OpenClose findMany
   */
  export type OpenCloseFindManyArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * Filter, which OpenCloses to fetch.
     */
    where?: OpenCloseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenCloses to fetch.
     */
    orderBy?: Enumerable<OpenCloseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpenCloses.
     */
    cursor?: OpenCloseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenCloses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenCloses.
     */
    skip?: number
    distinct?: Enumerable<OpenCloseScalarFieldEnum>
  }


  /**
   * OpenClose create
   */
  export type OpenCloseCreateArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * The data needed to create a OpenClose.
     */
    data: XOR<OpenCloseCreateInput, OpenCloseUncheckedCreateInput>
  }


  /**
   * OpenClose createMany
   */
  export type OpenCloseCreateManyArgs = {
    /**
     * The data used to create many OpenCloses.
     */
    data: Enumerable<OpenCloseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OpenClose update
   */
  export type OpenCloseUpdateArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * The data needed to update a OpenClose.
     */
    data: XOR<OpenCloseUpdateInput, OpenCloseUncheckedUpdateInput>
    /**
     * Choose, which OpenClose to update.
     */
    where: OpenCloseWhereUniqueInput
  }


  /**
   * OpenClose updateMany
   */
  export type OpenCloseUpdateManyArgs = {
    /**
     * The data used to update OpenCloses.
     */
    data: XOR<OpenCloseUpdateManyMutationInput, OpenCloseUncheckedUpdateManyInput>
    /**
     * Filter which OpenCloses to update
     */
    where?: OpenCloseWhereInput
  }


  /**
   * OpenClose upsert
   */
  export type OpenCloseUpsertArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * The filter to search for the OpenClose to update in case it exists.
     */
    where: OpenCloseWhereUniqueInput
    /**
     * In case the OpenClose found by the `where` argument doesn't exist, create a new OpenClose with this data.
     */
    create: XOR<OpenCloseCreateInput, OpenCloseUncheckedCreateInput>
    /**
     * In case the OpenClose was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpenCloseUpdateInput, OpenCloseUncheckedUpdateInput>
  }


  /**
   * OpenClose delete
   */
  export type OpenCloseDeleteArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
    /**
     * Filter which OpenClose to delete.
     */
    where: OpenCloseWhereUniqueInput
  }


  /**
   * OpenClose deleteMany
   */
  export type OpenCloseDeleteManyArgs = {
    /**
     * Filter which OpenCloses to delete
     */
    where?: OpenCloseWhereInput
  }


  /**
   * OpenClose without action
   */
  export type OpenCloseArgs = {
    /**
     * Select specific fields to fetch from the OpenClose
     */
    select?: OpenCloseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpenCloseInclude | null
  }



  /**
   * Model VertifyBookingCode
   */


  export type AggregateVertifyBookingCode = {
    _count: VertifyBookingCodeCountAggregateOutputType | null
    _avg: VertifyBookingCodeAvgAggregateOutputType | null
    _sum: VertifyBookingCodeSumAggregateOutputType | null
    _min: VertifyBookingCodeMinAggregateOutputType | null
    _max: VertifyBookingCodeMaxAggregateOutputType | null
  }

  export type VertifyBookingCodeAvgAggregateOutputType = {
    id: number | null
  }

  export type VertifyBookingCodeSumAggregateOutputType = {
    id: number | null
  }

  export type VertifyBookingCodeMinAggregateOutputType = {
    id: number | null
    verifyCode: string | null
    bookdate: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type VertifyBookingCodeMaxAggregateOutputType = {
    id: number | null
    verifyCode: string | null
    bookdate: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type VertifyBookingCodeCountAggregateOutputType = {
    id: number
    verifyCode: number
    bookdate: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type VertifyBookingCodeAvgAggregateInputType = {
    id?: true
  }

  export type VertifyBookingCodeSumAggregateInputType = {
    id?: true
  }

  export type VertifyBookingCodeMinAggregateInputType = {
    id?: true
    verifyCode?: true
    bookdate?: true
    createAt?: true
    updateAt?: true
  }

  export type VertifyBookingCodeMaxAggregateInputType = {
    id?: true
    verifyCode?: true
    bookdate?: true
    createAt?: true
    updateAt?: true
  }

  export type VertifyBookingCodeCountAggregateInputType = {
    id?: true
    verifyCode?: true
    bookdate?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type VertifyBookingCodeAggregateArgs = {
    /**
     * Filter which VertifyBookingCode to aggregate.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VertifyBookingCodes
    **/
    _count?: true | VertifyBookingCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VertifyBookingCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VertifyBookingCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VertifyBookingCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VertifyBookingCodeMaxAggregateInputType
  }

  export type GetVertifyBookingCodeAggregateType<T extends VertifyBookingCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVertifyBookingCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVertifyBookingCode[P]>
      : GetScalarType<T[P], AggregateVertifyBookingCode[P]>
  }




  export type VertifyBookingCodeGroupByArgs = {
    where?: VertifyBookingCodeWhereInput
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithAggregationInput>
    by: VertifyBookingCodeScalarFieldEnum[]
    having?: VertifyBookingCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VertifyBookingCodeCountAggregateInputType | true
    _avg?: VertifyBookingCodeAvgAggregateInputType
    _sum?: VertifyBookingCodeSumAggregateInputType
    _min?: VertifyBookingCodeMinAggregateInputType
    _max?: VertifyBookingCodeMaxAggregateInputType
  }


  export type VertifyBookingCodeGroupByOutputType = {
    id: number
    verifyCode: string
    bookdate: Date
    createAt: Date
    updateAt: Date
    _count: VertifyBookingCodeCountAggregateOutputType | null
    _avg: VertifyBookingCodeAvgAggregateOutputType | null
    _sum: VertifyBookingCodeSumAggregateOutputType | null
    _min: VertifyBookingCodeMinAggregateOutputType | null
    _max: VertifyBookingCodeMaxAggregateOutputType | null
  }

  type GetVertifyBookingCodeGroupByPayload<T extends VertifyBookingCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VertifyBookingCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VertifyBookingCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VertifyBookingCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VertifyBookingCodeGroupByOutputType[P]>
        }
      >
    >


  export type VertifyBookingCodeSelect = {
    id?: boolean
    verifyCode?: boolean
    bookdate?: boolean
    createAt?: boolean
    updateAt?: boolean
    BookRoom?: boolean | VertifyBookingCode$BookRoomArgs
    _count?: boolean | VertifyBookingCodeCountOutputTypeArgs
  }


  export type VertifyBookingCodeInclude = {
    BookRoom?: boolean | VertifyBookingCode$BookRoomArgs
    _count?: boolean | VertifyBookingCodeCountOutputTypeArgs
  }

  export type VertifyBookingCodeGetPayload<S extends boolean | null | undefined | VertifyBookingCodeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VertifyBookingCode :
    S extends undefined ? never :
    S extends { include: any } & (VertifyBookingCodeArgs | VertifyBookingCodeFindManyArgs)
    ? VertifyBookingCode  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['include'][P]>>  :
        P extends '_count' ? VertifyBookingCodeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VertifyBookingCodeArgs | VertifyBookingCodeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BookRoom' ? Array < BookRoomGetPayload<S['select'][P]>>  :
        P extends '_count' ? VertifyBookingCodeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof VertifyBookingCode ? VertifyBookingCode[P] : never
  } 
      : VertifyBookingCode


  type VertifyBookingCodeCountArgs = 
    Omit<VertifyBookingCodeFindManyArgs, 'select' | 'include'> & {
      select?: VertifyBookingCodeCountAggregateInputType | true
    }

  export interface VertifyBookingCodeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VertifyBookingCode that matches the filter.
     * @param {VertifyBookingCodeFindUniqueArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VertifyBookingCodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VertifyBookingCodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VertifyBookingCode'> extends True ? Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>> : Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T> | null, null>

    /**
     * Find one VertifyBookingCode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VertifyBookingCodeFindUniqueOrThrowArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VertifyBookingCodeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VertifyBookingCodeFindUniqueOrThrowArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Find the first VertifyBookingCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeFindFirstArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VertifyBookingCodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VertifyBookingCodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VertifyBookingCode'> extends True ? Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>> : Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T> | null, null>

    /**
     * Find the first VertifyBookingCode that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeFindFirstOrThrowArgs} args - Arguments to find a VertifyBookingCode
     * @example
     * // Get one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VertifyBookingCodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VertifyBookingCodeFindFirstOrThrowArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Find zero or more VertifyBookingCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VertifyBookingCodes
     * const vertifyBookingCodes = await prisma.vertifyBookingCode.findMany()
     * 
     * // Get first 10 VertifyBookingCodes
     * const vertifyBookingCodes = await prisma.vertifyBookingCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vertifyBookingCodeWithIdOnly = await prisma.vertifyBookingCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VertifyBookingCodeFindManyArgs>(
      args?: SelectSubset<T, VertifyBookingCodeFindManyArgs>
    ): Prisma.PrismaPromise<Array<VertifyBookingCodeGetPayload<T>>>

    /**
     * Create a VertifyBookingCode.
     * @param {VertifyBookingCodeCreateArgs} args - Arguments to create a VertifyBookingCode.
     * @example
     * // Create one VertifyBookingCode
     * const VertifyBookingCode = await prisma.vertifyBookingCode.create({
     *   data: {
     *     // ... data to create a VertifyBookingCode
     *   }
     * })
     * 
    **/
    create<T extends VertifyBookingCodeCreateArgs>(
      args: SelectSubset<T, VertifyBookingCodeCreateArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Create many VertifyBookingCodes.
     *     @param {VertifyBookingCodeCreateManyArgs} args - Arguments to create many VertifyBookingCodes.
     *     @example
     *     // Create many VertifyBookingCodes
     *     const vertifyBookingCode = await prisma.vertifyBookingCode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VertifyBookingCodeCreateManyArgs>(
      args?: SelectSubset<T, VertifyBookingCodeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VertifyBookingCode.
     * @param {VertifyBookingCodeDeleteArgs} args - Arguments to delete one VertifyBookingCode.
     * @example
     * // Delete one VertifyBookingCode
     * const VertifyBookingCode = await prisma.vertifyBookingCode.delete({
     *   where: {
     *     // ... filter to delete one VertifyBookingCode
     *   }
     * })
     * 
    **/
    delete<T extends VertifyBookingCodeDeleteArgs>(
      args: SelectSubset<T, VertifyBookingCodeDeleteArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Update one VertifyBookingCode.
     * @param {VertifyBookingCodeUpdateArgs} args - Arguments to update one VertifyBookingCode.
     * @example
     * // Update one VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VertifyBookingCodeUpdateArgs>(
      args: SelectSubset<T, VertifyBookingCodeUpdateArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Delete zero or more VertifyBookingCodes.
     * @param {VertifyBookingCodeDeleteManyArgs} args - Arguments to filter VertifyBookingCodes to delete.
     * @example
     * // Delete a few VertifyBookingCodes
     * const { count } = await prisma.vertifyBookingCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VertifyBookingCodeDeleteManyArgs>(
      args?: SelectSubset<T, VertifyBookingCodeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VertifyBookingCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VertifyBookingCodes
     * const vertifyBookingCode = await prisma.vertifyBookingCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VertifyBookingCodeUpdateManyArgs>(
      args: SelectSubset<T, VertifyBookingCodeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VertifyBookingCode.
     * @param {VertifyBookingCodeUpsertArgs} args - Arguments to update or create a VertifyBookingCode.
     * @example
     * // Update or create a VertifyBookingCode
     * const vertifyBookingCode = await prisma.vertifyBookingCode.upsert({
     *   create: {
     *     // ... data to create a VertifyBookingCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VertifyBookingCode we want to update
     *   }
     * })
    **/
    upsert<T extends VertifyBookingCodeUpsertArgs>(
      args: SelectSubset<T, VertifyBookingCodeUpsertArgs>
    ): Prisma__VertifyBookingCodeClient<VertifyBookingCodeGetPayload<T>>

    /**
     * Count the number of VertifyBookingCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeCountArgs} args - Arguments to filter VertifyBookingCodes to count.
     * @example
     * // Count the number of VertifyBookingCodes
     * const count = await prisma.vertifyBookingCode.count({
     *   where: {
     *     // ... the filter for the VertifyBookingCodes we want to count
     *   }
     * })
    **/
    count<T extends VertifyBookingCodeCountArgs>(
      args?: Subset<T, VertifyBookingCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VertifyBookingCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VertifyBookingCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VertifyBookingCodeAggregateArgs>(args: Subset<T, VertifyBookingCodeAggregateArgs>): Prisma.PrismaPromise<GetVertifyBookingCodeAggregateType<T>>

    /**
     * Group by VertifyBookingCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VertifyBookingCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VertifyBookingCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VertifyBookingCodeGroupByArgs['orderBy'] }
        : { orderBy?: VertifyBookingCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VertifyBookingCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVertifyBookingCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VertifyBookingCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VertifyBookingCodeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    BookRoom<T extends VertifyBookingCode$BookRoomArgs= {}>(args?: Subset<T, VertifyBookingCode$BookRoomArgs>): Prisma.PrismaPromise<Array<BookRoomGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VertifyBookingCode base type for findUnique actions
   */
  export type VertifyBookingCodeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }

  /**
   * VertifyBookingCode findUnique
   */
  export interface VertifyBookingCodeFindUniqueArgs extends VertifyBookingCodeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VertifyBookingCode findUniqueOrThrow
   */
  export type VertifyBookingCodeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }


  /**
   * VertifyBookingCode base type for findFirst actions
   */
  export type VertifyBookingCodeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VertifyBookingCodes.
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VertifyBookingCodes.
     */
    distinct?: Enumerable<VertifyBookingCodeScalarFieldEnum>
  }

  /**
   * VertifyBookingCode findFirst
   */
  export interface VertifyBookingCodeFindFirstArgs extends VertifyBookingCodeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VertifyBookingCode findFirstOrThrow
   */
  export type VertifyBookingCodeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCode to fetch.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VertifyBookingCodes.
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VertifyBookingCodes.
     */
    distinct?: Enumerable<VertifyBookingCodeScalarFieldEnum>
  }


  /**
   * VertifyBookingCode findMany
   */
  export type VertifyBookingCodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter, which VertifyBookingCodes to fetch.
     */
    where?: VertifyBookingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VertifyBookingCodes to fetch.
     */
    orderBy?: Enumerable<VertifyBookingCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VertifyBookingCodes.
     */
    cursor?: VertifyBookingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VertifyBookingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VertifyBookingCodes.
     */
    skip?: number
    distinct?: Enumerable<VertifyBookingCodeScalarFieldEnum>
  }


  /**
   * VertifyBookingCode create
   */
  export type VertifyBookingCodeCreateArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * The data needed to create a VertifyBookingCode.
     */
    data: XOR<VertifyBookingCodeCreateInput, VertifyBookingCodeUncheckedCreateInput>
  }


  /**
   * VertifyBookingCode createMany
   */
  export type VertifyBookingCodeCreateManyArgs = {
    /**
     * The data used to create many VertifyBookingCodes.
     */
    data: Enumerable<VertifyBookingCodeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VertifyBookingCode update
   */
  export type VertifyBookingCodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * The data needed to update a VertifyBookingCode.
     */
    data: XOR<VertifyBookingCodeUpdateInput, VertifyBookingCodeUncheckedUpdateInput>
    /**
     * Choose, which VertifyBookingCode to update.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }


  /**
   * VertifyBookingCode updateMany
   */
  export type VertifyBookingCodeUpdateManyArgs = {
    /**
     * The data used to update VertifyBookingCodes.
     */
    data: XOR<VertifyBookingCodeUpdateManyMutationInput, VertifyBookingCodeUncheckedUpdateManyInput>
    /**
     * Filter which VertifyBookingCodes to update
     */
    where?: VertifyBookingCodeWhereInput
  }


  /**
   * VertifyBookingCode upsert
   */
  export type VertifyBookingCodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * The filter to search for the VertifyBookingCode to update in case it exists.
     */
    where: VertifyBookingCodeWhereUniqueInput
    /**
     * In case the VertifyBookingCode found by the `where` argument doesn't exist, create a new VertifyBookingCode with this data.
     */
    create: XOR<VertifyBookingCodeCreateInput, VertifyBookingCodeUncheckedCreateInput>
    /**
     * In case the VertifyBookingCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VertifyBookingCodeUpdateInput, VertifyBookingCodeUncheckedUpdateInput>
  }


  /**
   * VertifyBookingCode delete
   */
  export type VertifyBookingCodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
    /**
     * Filter which VertifyBookingCode to delete.
     */
    where: VertifyBookingCodeWhereUniqueInput
  }


  /**
   * VertifyBookingCode deleteMany
   */
  export type VertifyBookingCodeDeleteManyArgs = {
    /**
     * Filter which VertifyBookingCodes to delete
     */
    where?: VertifyBookingCodeWhereInput
  }


  /**
   * VertifyBookingCode.BookRoom
   */
  export type VertifyBookingCode$BookRoomArgs = {
    /**
     * Select specific fields to fetch from the BookRoom
     */
    select?: BookRoomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookRoomInclude | null
    where?: BookRoomWhereInput
    orderBy?: Enumerable<BookRoomOrderByWithRelationInput>
    cursor?: BookRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookRoomScalarFieldEnum>
  }


  /**
   * VertifyBookingCode without action
   */
  export type VertifyBookingCodeArgs = {
    /**
     * Select specific fields to fetch from the VertifyBookingCode
     */
    select?: VertifyBookingCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VertifyBookingCodeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BookRoomScalarFieldEnum: {
    id: 'id',
    branchToRoomId: 'branchToRoomId',
    startTime: 'startTime',
    roomRateId: 'roomRateId',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userExternalId: 'userExternalId',
    vertifyBookingCodeId: 'vertifyBookingCodeId'
  };

  export type BookRoomScalarFieldEnum = (typeof BookRoomScalarFieldEnum)[keyof typeof BookRoomScalarFieldEnum]


  export const BranchToRoomScalarFieldEnum: {
    id: 'id',
    coWorkId: 'coWorkId',
    roomId: 'roomId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type BranchToRoomScalarFieldEnum = (typeof BranchToRoomScalarFieldEnum)[keyof typeof BranchToRoomScalarFieldEnum]


  export const CoWorkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    location: 'location',
    tel: 'tel',
    picture: 'picture',
    userInternalId: 'userInternalId'
  };

  export type CoWorkScalarFieldEnum = (typeof CoWorkScalarFieldEnum)[keyof typeof CoWorkScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const FacilityToRoomScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    facilityId: 'facilityId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type FacilityToRoomScalarFieldEnum = (typeof FacilityToRoomScalarFieldEnum)[keyof typeof FacilityToRoomScalarFieldEnum]


  export const OpenCloseScalarFieldEnum: {
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
  };

  export type OpenCloseScalarFieldEnum = (typeof OpenCloseScalarFieldEnum)[keyof typeof OpenCloseScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoomRateScalarFieldEnum: {
    id: 'id',
    price: 'price',
    time: 'time',
    roomId: 'roomId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type RoomRateScalarFieldEnum = (typeof RoomRateScalarFieldEnum)[keyof typeof RoomRateScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserExternalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    tel: 'tel',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserExternalScalarFieldEnum = (typeof UserExternalScalarFieldEnum)[keyof typeof UserExternalScalarFieldEnum]


  export const UserInternalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    tel: 'tel',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserInternalScalarFieldEnum = (typeof UserInternalScalarFieldEnum)[keyof typeof UserInternalScalarFieldEnum]


  export const VertifyBookingCodeScalarFieldEnum: {
    id: 'id',
    verifyCode: 'verifyCode',
    bookdate: 'bookdate',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type VertifyBookingCodeScalarFieldEnum = (typeof VertifyBookingCodeScalarFieldEnum)[keyof typeof VertifyBookingCodeScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserExternalWhereInput = {
    AND?: Enumerable<UserExternalWhereInput>
    OR?: Enumerable<UserExternalWhereInput>
    NOT?: Enumerable<UserExternalWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    tel?: StringFilter | string
    password?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    BookRoom?: BookRoomListRelationFilter
  }

  export type UserExternalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    BookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type UserExternalWhereUniqueInput = {
    id?: number
  }

  export type UserExternalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserExternalCountOrderByAggregateInput
    _avg?: UserExternalAvgOrderByAggregateInput
    _max?: UserExternalMaxOrderByAggregateInput
    _min?: UserExternalMinOrderByAggregateInput
    _sum?: UserExternalSumOrderByAggregateInput
  }

  export type UserExternalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserExternalScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserExternalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserExternalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CoWorkWhereInput = {
    AND?: Enumerable<CoWorkWhereInput>
    OR?: Enumerable<CoWorkWhereInput>
    NOT?: Enumerable<CoWorkWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    location?: StringFilter | string
    tel?: IntFilter | number
    picture?: StringFilter | string
    userInternalId?: IntFilter | number
    userInternal?: XOR<UserInternalRelationFilter, UserInternalWhereInput>
    BranchToRoom?: BranchToRoomListRelationFilter
    OpenClose?: XOR<OpenCloseRelationFilter, OpenCloseWhereInput> | null
  }

  export type CoWorkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
    userInternal?: UserInternalOrderByWithRelationInput
    BranchToRoom?: BranchToRoomOrderByRelationAggregateInput
    OpenClose?: OpenCloseOrderByWithRelationInput
  }

  export type CoWorkWhereUniqueInput = {
    id?: number
  }

  export type CoWorkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
    _count?: CoWorkCountOrderByAggregateInput
    _avg?: CoWorkAvgOrderByAggregateInput
    _max?: CoWorkMaxOrderByAggregateInput
    _min?: CoWorkMinOrderByAggregateInput
    _sum?: CoWorkSumOrderByAggregateInput
  }

  export type CoWorkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CoWorkScalarWhereWithAggregatesInput>
    OR?: Enumerable<CoWorkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CoWorkScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    location?: StringWithAggregatesFilter | string
    tel?: IntWithAggregatesFilter | number
    picture?: StringWithAggregatesFilter | string
    userInternalId?: IntWithAggregatesFilter | number
  }

  export type UserInternalWhereInput = {
    AND?: Enumerable<UserInternalWhereInput>
    OR?: Enumerable<UserInternalWhereInput>
    NOT?: Enumerable<UserInternalWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    tel?: IntFilter | number
    password?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    coWork?: CoWorkListRelationFilter
  }

  export type UserInternalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    coWork?: CoWorkOrderByRelationAggregateInput
  }

  export type UserInternalWhereUniqueInput = {
    id?: number
  }

  export type UserInternalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserInternalCountOrderByAggregateInput
    _avg?: UserInternalAvgOrderByAggregateInput
    _max?: UserInternalMaxOrderByAggregateInput
    _min?: UserInternalMinOrderByAggregateInput
    _sum?: UserInternalSumOrderByAggregateInput
  }

  export type UserInternalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserInternalScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserInternalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserInternalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    tel?: IntWithAggregatesFilter | number
    password?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoomWhereInput = {
    AND?: Enumerable<RoomWhereInput>
    OR?: Enumerable<RoomWhereInput>
    NOT?: Enumerable<RoomWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    capacity?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    RoomPrice?: RoomRateListRelationFilter
    FacilityToRoom?: FacilityToRoomListRelationFilter
    BranchToRoom?: BranchToRoomListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    RoomPrice?: RoomRateOrderByRelationAggregateInput
    FacilityToRoom?: FacilityToRoomOrderByRelationAggregateInput
    BranchToRoom?: BranchToRoomOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = {
    id?: number
  }

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    capacity?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoomRateWhereInput = {
    AND?: Enumerable<RoomRateWhereInput>
    OR?: Enumerable<RoomRateWhereInput>
    NOT?: Enumerable<RoomRateWhereInput>
    id?: IntFilter | number
    price?: IntFilter | number
    time?: StringFilter | string
    roomId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    BookRoom?: BookRoomListRelationFilter
  }

  export type RoomRateOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    time?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    BookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type RoomRateWhereUniqueInput = {
    id?: number
  }

  export type RoomRateOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    time?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: RoomRateCountOrderByAggregateInput
    _avg?: RoomRateAvgOrderByAggregateInput
    _max?: RoomRateMaxOrderByAggregateInput
    _min?: RoomRateMinOrderByAggregateInput
    _sum?: RoomRateSumOrderByAggregateInput
  }

  export type RoomRateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoomRateScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoomRateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoomRateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
    time?: StringWithAggregatesFilter | string
    roomId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FacilityWhereInput = {
    AND?: Enumerable<FacilityWhereInput>
    OR?: Enumerable<FacilityWhereInput>
    NOT?: Enumerable<FacilityWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    FacilityToRoom?: FacilityToRoomListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    FacilityToRoom?: FacilityToRoomOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = {
    id?: number
  }

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    OR?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FacilityScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FacilityToRoomWhereInput = {
    AND?: Enumerable<FacilityToRoomWhereInput>
    OR?: Enumerable<FacilityToRoomWhereInput>
    NOT?: Enumerable<FacilityToRoomWhereInput>
    id?: IntFilter | number
    roomId?: IntFilter | number
    facilityId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    facilities?: XOR<FacilityRelationFilter, FacilityWhereInput>
  }

  export type FacilityToRoomOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    facilities?: FacilityOrderByWithRelationInput
  }

  export type FacilityToRoomWhereUniqueInput = {
    id?: number
  }

  export type FacilityToRoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: FacilityToRoomCountOrderByAggregateInput
    _avg?: FacilityToRoomAvgOrderByAggregateInput
    _max?: FacilityToRoomMaxOrderByAggregateInput
    _min?: FacilityToRoomMinOrderByAggregateInput
    _sum?: FacilityToRoomSumOrderByAggregateInput
  }

  export type FacilityToRoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FacilityToRoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<FacilityToRoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FacilityToRoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roomId?: IntWithAggregatesFilter | number
    facilityId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BranchToRoomWhereInput = {
    AND?: Enumerable<BranchToRoomWhereInput>
    OR?: Enumerable<BranchToRoomWhereInput>
    NOT?: Enumerable<BranchToRoomWhereInput>
    id?: IntFilter | number
    coWorkId?: IntFilter | number
    roomId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    coWork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    BookRoom?: BookRoomListRelationFilter
  }

  export type BranchToRoomOrderByWithRelationInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    coWork?: CoWorkOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    BookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type BranchToRoomWhereUniqueInput = {
    id?: number
  }

  export type BranchToRoomOrderByWithAggregationInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: BranchToRoomCountOrderByAggregateInput
    _avg?: BranchToRoomAvgOrderByAggregateInput
    _max?: BranchToRoomMaxOrderByAggregateInput
    _min?: BranchToRoomMinOrderByAggregateInput
    _sum?: BranchToRoomSumOrderByAggregateInput
  }

  export type BranchToRoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BranchToRoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<BranchToRoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BranchToRoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    coWorkId?: IntWithAggregatesFilter | number
    roomId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BookRoomWhereInput = {
    AND?: Enumerable<BookRoomWhereInput>
    OR?: Enumerable<BookRoomWhereInput>
    NOT?: Enumerable<BookRoomWhereInput>
    id?: IntFilter | number
    branchToRoomId?: IntNullableFilter | number | null
    startTime?: DateTimeFilter | Date | string
    roomRateId?: IntFilter | number
    status?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userExternalId?: IntFilter | number
    vertifyBookingCodeId?: IntFilter | number
    branchToRoom?: XOR<BranchToRoomRelationFilter, BranchToRoomWhereInput> | null
    roomRate?: XOR<RoomRateRelationFilter, RoomRateWhereInput>
    UserExternal?: XOR<UserExternalRelationFilter, UserExternalWhereInput>
    vertifyCode?: XOR<VertifyBookingCodeRelationFilter, VertifyBookingCodeWhereInput>
  }

  export type BookRoomOrderByWithRelationInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    startTime?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    branchToRoom?: BranchToRoomOrderByWithRelationInput
    roomRate?: RoomRateOrderByWithRelationInput
    UserExternal?: UserExternalOrderByWithRelationInput
    vertifyCode?: VertifyBookingCodeOrderByWithRelationInput
  }

  export type BookRoomWhereUniqueInput = {
    id?: number
  }

  export type BookRoomOrderByWithAggregationInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    startTime?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
    _count?: BookRoomCountOrderByAggregateInput
    _avg?: BookRoomAvgOrderByAggregateInput
    _max?: BookRoomMaxOrderByAggregateInput
    _min?: BookRoomMinOrderByAggregateInput
    _sum?: BookRoomSumOrderByAggregateInput
  }

  export type BookRoomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookRoomScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookRoomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookRoomScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    branchToRoomId?: IntNullableWithAggregatesFilter | number | null
    startTime?: DateTimeWithAggregatesFilter | Date | string
    roomRateId?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    userExternalId?: IntWithAggregatesFilter | number
    vertifyBookingCodeId?: IntWithAggregatesFilter | number
  }

  export type OpenCloseWhereInput = {
    AND?: Enumerable<OpenCloseWhereInput>
    OR?: Enumerable<OpenCloseWhereInput>
    NOT?: Enumerable<OpenCloseWhereInput>
    id?: IntFilter | number
    openTimeMon?: IntFilter | number
    closeTimeMon?: IntFilter | number
    isOpenMon?: BoolFilter | boolean
    isOpen24hoursMon?: BoolFilter | boolean
    openTimeTue?: IntFilter | number
    closeTimeTue?: IntFilter | number
    isOpenTue?: BoolFilter | boolean
    isOpen24hoursTue?: BoolFilter | boolean
    openTimeWed?: IntFilter | number
    closeTimeWed?: IntFilter | number
    isOpenWed?: BoolFilter | boolean
    isOpen24hoursWed?: BoolFilter | boolean
    openTimeThurs?: IntFilter | number
    closeTimeThurs?: IntFilter | number
    isOpenThurs?: BoolFilter | boolean
    isOpen24hoursThurs?: BoolFilter | boolean
    openTimeFri?: IntFilter | number
    closeTimeFri?: IntFilter | number
    isOpenFri?: BoolFilter | boolean
    isOpen24hoursFri?: BoolFilter | boolean
    openTimeSat?: IntFilter | number
    closeTimeSat?: IntFilter | number
    isOpenSat?: BoolFilter | boolean
    isOpen24hoursSat?: BoolFilter | boolean
    openTimeSun?: IntFilter | number
    closeTimeSun?: IntFilter | number
    isOpenSun?: BoolFilter | boolean
    isOpen24hoursSun?: BoolFilter | boolean
    coWorkId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    coWork?: XOR<CoWorkRelationFilter, CoWorkWhereInput>
  }

  export type OpenCloseOrderByWithRelationInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    isOpenMon?: SortOrder
    isOpen24hoursMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    isOpenTue?: SortOrder
    isOpen24hoursTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    isOpenWed?: SortOrder
    isOpen24hoursWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    isOpenThurs?: SortOrder
    isOpen24hoursThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    isOpenFri?: SortOrder
    isOpen24hoursFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    isOpenSat?: SortOrder
    isOpen24hoursSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    isOpenSun?: SortOrder
    isOpen24hoursSun?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    coWork?: CoWorkOrderByWithRelationInput
  }

  export type OpenCloseWhereUniqueInput = {
    id?: number
    coWorkId?: number
  }

  export type OpenCloseOrderByWithAggregationInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    isOpenMon?: SortOrder
    isOpen24hoursMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    isOpenTue?: SortOrder
    isOpen24hoursTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    isOpenWed?: SortOrder
    isOpen24hoursWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    isOpenThurs?: SortOrder
    isOpen24hoursThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    isOpenFri?: SortOrder
    isOpen24hoursFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    isOpenSat?: SortOrder
    isOpen24hoursSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    isOpenSun?: SortOrder
    isOpen24hoursSun?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: OpenCloseCountOrderByAggregateInput
    _avg?: OpenCloseAvgOrderByAggregateInput
    _max?: OpenCloseMaxOrderByAggregateInput
    _min?: OpenCloseMinOrderByAggregateInput
    _sum?: OpenCloseSumOrderByAggregateInput
  }

  export type OpenCloseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OpenCloseScalarWhereWithAggregatesInput>
    OR?: Enumerable<OpenCloseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OpenCloseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    openTimeMon?: IntWithAggregatesFilter | number
    closeTimeMon?: IntWithAggregatesFilter | number
    isOpenMon?: BoolWithAggregatesFilter | boolean
    isOpen24hoursMon?: BoolWithAggregatesFilter | boolean
    openTimeTue?: IntWithAggregatesFilter | number
    closeTimeTue?: IntWithAggregatesFilter | number
    isOpenTue?: BoolWithAggregatesFilter | boolean
    isOpen24hoursTue?: BoolWithAggregatesFilter | boolean
    openTimeWed?: IntWithAggregatesFilter | number
    closeTimeWed?: IntWithAggregatesFilter | number
    isOpenWed?: BoolWithAggregatesFilter | boolean
    isOpen24hoursWed?: BoolWithAggregatesFilter | boolean
    openTimeThurs?: IntWithAggregatesFilter | number
    closeTimeThurs?: IntWithAggregatesFilter | number
    isOpenThurs?: BoolWithAggregatesFilter | boolean
    isOpen24hoursThurs?: BoolWithAggregatesFilter | boolean
    openTimeFri?: IntWithAggregatesFilter | number
    closeTimeFri?: IntWithAggregatesFilter | number
    isOpenFri?: BoolWithAggregatesFilter | boolean
    isOpen24hoursFri?: BoolWithAggregatesFilter | boolean
    openTimeSat?: IntWithAggregatesFilter | number
    closeTimeSat?: IntWithAggregatesFilter | number
    isOpenSat?: BoolWithAggregatesFilter | boolean
    isOpen24hoursSat?: BoolWithAggregatesFilter | boolean
    openTimeSun?: IntWithAggregatesFilter | number
    closeTimeSun?: IntWithAggregatesFilter | number
    isOpenSun?: BoolWithAggregatesFilter | boolean
    isOpen24hoursSun?: BoolWithAggregatesFilter | boolean
    coWorkId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VertifyBookingCodeWhereInput = {
    AND?: Enumerable<VertifyBookingCodeWhereInput>
    OR?: Enumerable<VertifyBookingCodeWhereInput>
    NOT?: Enumerable<VertifyBookingCodeWhereInput>
    id?: IntFilter | number
    verifyCode?: StringFilter | string
    bookdate?: DateTimeFilter | Date | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    BookRoom?: BookRoomListRelationFilter
  }

  export type VertifyBookingCodeOrderByWithRelationInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    BookRoom?: BookRoomOrderByRelationAggregateInput
  }

  export type VertifyBookingCodeWhereUniqueInput = {
    id?: number
  }

  export type VertifyBookingCodeOrderByWithAggregationInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: VertifyBookingCodeCountOrderByAggregateInput
    _avg?: VertifyBookingCodeAvgOrderByAggregateInput
    _max?: VertifyBookingCodeMaxOrderByAggregateInput
    _min?: VertifyBookingCodeMinOrderByAggregateInput
    _sum?: VertifyBookingCodeSumOrderByAggregateInput
  }

  export type VertifyBookingCodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VertifyBookingCodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VertifyBookingCodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VertifyBookingCodeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    verifyCode?: StringWithAggregatesFilter | string
    bookdate?: DateTimeWithAggregatesFilter | Date | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserExternalCreateInput = {
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomCreateNestedManyWithoutUserExternalInput
  }

  export type UserExternalUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutUserExternalInput
  }

  export type UserExternalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUpdateManyWithoutUserExternalNestedInput
  }

  export type UserExternalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutUserExternalNestedInput
  }

  export type UserExternalCreateManyInput = {
    id?: number
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserExternalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExternalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateInput = {
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternal: UserInternalCreateNestedOneWithoutCoWorkInput
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    OpenClose?: OpenCloseCreateNestedOneWithoutCoWorkInput
  }

  export type CoWorkUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternalId: number
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    OpenClose?: OpenCloseUncheckedCreateNestedOneWithoutCoWorkInput
  }

  export type CoWorkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternal?: UserInternalUpdateOneRequiredWithoutCoWorkNestedInput
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    OpenClose?: OpenCloseUpdateOneWithoutCoWorkNestedInput
  }

  export type CoWorkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: IntFieldUpdateOperationsInput | number
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    OpenClose?: OpenCloseUncheckedUpdateOneWithoutCoWorkNestedInput
  }

  export type CoWorkCreateManyInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternalId: number
  }

  export type CoWorkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type CoWorkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInternalCreateInput = {
    name: string
    email: string
    tel: number
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    coWork?: CoWorkCreateNestedManyWithoutUserInternalInput
  }

  export type UserInternalUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    tel: number
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    coWork?: CoWorkUncheckedCreateNestedManyWithoutUserInternalInput
  }

  export type UserInternalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateManyWithoutUserInternalNestedInput
  }

  export type UserInternalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUncheckedUpdateManyWithoutUserInternalNestedInput
  }

  export type UserInternalCreateManyInput = {
    id?: number
    name: string
    email: string
    tel: number
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserInternalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInternalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomPrice?: RoomRateCreateNestedManyWithoutRoomInput
    FacilityToRoom?: FacilityToRoomCreateNestedManyWithoutRoomInput
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomPrice?: RoomRateUncheckedCreateNestedManyWithoutRoomInput
    FacilityToRoom?: FacilityToRoomUncheckedCreateNestedManyWithoutRoomInput
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomPrice?: RoomRateUpdateManyWithoutRoomNestedInput
    FacilityToRoom?: FacilityToRoomUpdateManyWithoutRoomNestedInput
    BranchToRoom?: BranchToRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomPrice?: RoomRateUncheckedUpdateManyWithoutRoomNestedInput
    FacilityToRoom?: FacilityToRoomUncheckedUpdateManyWithoutRoomNestedInput
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomRateCreateInput = {
    price: number
    time: string
    createAt?: Date | string
    updateAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomPriceInput
    BookRoom?: BookRoomCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateUncheckedCreateInput = {
    id?: number
    price: number
    time: string
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomPriceNestedInput
    BookRoom?: BookRoomUpdateManyWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput
  }

  export type RoomRateCreateManyInput = {
    id?: number
    price: number
    time: string
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoomRateUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    FacilityToRoom?: FacilityToRoomCreateNestedManyWithoutFacilitiesInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    FacilityToRoom?: FacilityToRoomUncheckedCreateNestedManyWithoutFacilitiesInput
  }

  export type FacilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FacilityToRoom?: FacilityToRoomUpdateManyWithoutFacilitiesNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FacilityToRoom?: FacilityToRoomUncheckedUpdateManyWithoutFacilitiesNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToRoomCreateInput = {
    createAt?: Date | string
    updateAt?: Date | string
    room: RoomCreateNestedOneWithoutFacilityToRoomInput
    facilities: FacilityCreateNestedOneWithoutFacilityToRoomInput
  }

  export type FacilityToRoomUncheckedCreateInput = {
    id?: number
    roomId: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToRoomUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutFacilityToRoomNestedInput
    facilities?: FacilityUpdateOneRequiredWithoutFacilityToRoomNestedInput
  }

  export type FacilityToRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToRoomCreateManyInput = {
    id?: number
    roomId: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToRoomUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchToRoomCreateInput = {
    createAt?: Date | string
    updateAt?: Date | string
    coWork: CoWorkCreateNestedOneWithoutBranchToRoomInput
    room: RoomCreateNestedOneWithoutBranchToRoomInput
    BookRoom?: BookRoomCreateNestedManyWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateInput = {
    id?: number
    coWorkId: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutBranchToRoomInput
  }

  export type BranchToRoomUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput
    room?: RoomUpdateOneRequiredWithoutBranchToRoomNestedInput
    BookRoom?: BookRoomUpdateManyWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomCreateManyInput = {
    id?: number
    coWorkId: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BranchToRoomUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchToRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRoomCreateInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    branchToRoom?: BranchToRoomCreateNestedOneWithoutBookRoomInput
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
  }

  export type BookRoomUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchToRoom?: BranchToRoomUpdateOneWithoutBookRoomNestedInput
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchToRoomId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookRoomCreateManyInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
  }

  export type BookRoomUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchToRoomId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
  }

  export type OpenCloseCreateInput = {
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: boolean
    isOpen24hoursMon: boolean
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: boolean
    isOpen24hoursTue: boolean
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: boolean
    isOpen24hoursWed: boolean
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: boolean
    isOpen24hoursThurs: boolean
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: boolean
    isOpen24hoursFri: boolean
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: boolean
    isOpen24hoursSat: boolean
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: boolean
    isOpen24hoursSun: boolean
    createAt?: Date | string
    updateAt?: Date | string
    coWork: CoWorkCreateNestedOneWithoutOpenCloseInput
  }

  export type OpenCloseUncheckedCreateInput = {
    id?: number
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: boolean
    isOpen24hoursMon: boolean
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: boolean
    isOpen24hoursTue: boolean
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: boolean
    isOpen24hoursWed: boolean
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: boolean
    isOpen24hoursThurs: boolean
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: boolean
    isOpen24hoursFri: boolean
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: boolean
    isOpen24hoursSat: boolean
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: boolean
    isOpen24hoursSun: boolean
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseUpdateInput = {
    openTimeMon?: IntFieldUpdateOperationsInput | number
    closeTimeMon?: IntFieldUpdateOperationsInput | number
    isOpenMon?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursMon?: BoolFieldUpdateOperationsInput | boolean
    openTimeTue?: IntFieldUpdateOperationsInput | number
    closeTimeTue?: IntFieldUpdateOperationsInput | number
    isOpenTue?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursTue?: BoolFieldUpdateOperationsInput | boolean
    openTimeWed?: IntFieldUpdateOperationsInput | number
    closeTimeWed?: IntFieldUpdateOperationsInput | number
    isOpenWed?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursWed?: BoolFieldUpdateOperationsInput | boolean
    openTimeThurs?: IntFieldUpdateOperationsInput | number
    closeTimeThurs?: IntFieldUpdateOperationsInput | number
    isOpenThurs?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursThurs?: BoolFieldUpdateOperationsInput | boolean
    openTimeFri?: IntFieldUpdateOperationsInput | number
    closeTimeFri?: IntFieldUpdateOperationsInput | number
    isOpenFri?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursFri?: BoolFieldUpdateOperationsInput | boolean
    openTimeSat?: IntFieldUpdateOperationsInput | number
    closeTimeSat?: IntFieldUpdateOperationsInput | number
    isOpenSat?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSat?: BoolFieldUpdateOperationsInput | boolean
    openTimeSun?: IntFieldUpdateOperationsInput | number
    closeTimeSun?: IntFieldUpdateOperationsInput | number
    isOpenSun?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSun?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneRequiredWithoutOpenCloseNestedInput
  }

  export type OpenCloseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    openTimeMon?: IntFieldUpdateOperationsInput | number
    closeTimeMon?: IntFieldUpdateOperationsInput | number
    isOpenMon?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursMon?: BoolFieldUpdateOperationsInput | boolean
    openTimeTue?: IntFieldUpdateOperationsInput | number
    closeTimeTue?: IntFieldUpdateOperationsInput | number
    isOpenTue?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursTue?: BoolFieldUpdateOperationsInput | boolean
    openTimeWed?: IntFieldUpdateOperationsInput | number
    closeTimeWed?: IntFieldUpdateOperationsInput | number
    isOpenWed?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursWed?: BoolFieldUpdateOperationsInput | boolean
    openTimeThurs?: IntFieldUpdateOperationsInput | number
    closeTimeThurs?: IntFieldUpdateOperationsInput | number
    isOpenThurs?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursThurs?: BoolFieldUpdateOperationsInput | boolean
    openTimeFri?: IntFieldUpdateOperationsInput | number
    closeTimeFri?: IntFieldUpdateOperationsInput | number
    isOpenFri?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursFri?: BoolFieldUpdateOperationsInput | boolean
    openTimeSat?: IntFieldUpdateOperationsInput | number
    closeTimeSat?: IntFieldUpdateOperationsInput | number
    isOpenSat?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSat?: BoolFieldUpdateOperationsInput | boolean
    openTimeSun?: IntFieldUpdateOperationsInput | number
    closeTimeSun?: IntFieldUpdateOperationsInput | number
    isOpenSun?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSun?: BoolFieldUpdateOperationsInput | boolean
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseCreateManyInput = {
    id?: number
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: boolean
    isOpen24hoursMon: boolean
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: boolean
    isOpen24hoursTue: boolean
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: boolean
    isOpen24hoursWed: boolean
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: boolean
    isOpen24hoursThurs: boolean
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: boolean
    isOpen24hoursFri: boolean
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: boolean
    isOpen24hoursSat: boolean
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: boolean
    isOpen24hoursSun: boolean
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseUpdateManyMutationInput = {
    openTimeMon?: IntFieldUpdateOperationsInput | number
    closeTimeMon?: IntFieldUpdateOperationsInput | number
    isOpenMon?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursMon?: BoolFieldUpdateOperationsInput | boolean
    openTimeTue?: IntFieldUpdateOperationsInput | number
    closeTimeTue?: IntFieldUpdateOperationsInput | number
    isOpenTue?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursTue?: BoolFieldUpdateOperationsInput | boolean
    openTimeWed?: IntFieldUpdateOperationsInput | number
    closeTimeWed?: IntFieldUpdateOperationsInput | number
    isOpenWed?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursWed?: BoolFieldUpdateOperationsInput | boolean
    openTimeThurs?: IntFieldUpdateOperationsInput | number
    closeTimeThurs?: IntFieldUpdateOperationsInput | number
    isOpenThurs?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursThurs?: BoolFieldUpdateOperationsInput | boolean
    openTimeFri?: IntFieldUpdateOperationsInput | number
    closeTimeFri?: IntFieldUpdateOperationsInput | number
    isOpenFri?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursFri?: BoolFieldUpdateOperationsInput | boolean
    openTimeSat?: IntFieldUpdateOperationsInput | number
    closeTimeSat?: IntFieldUpdateOperationsInput | number
    isOpenSat?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSat?: BoolFieldUpdateOperationsInput | boolean
    openTimeSun?: IntFieldUpdateOperationsInput | number
    closeTimeSun?: IntFieldUpdateOperationsInput | number
    isOpenSun?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSun?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    openTimeMon?: IntFieldUpdateOperationsInput | number
    closeTimeMon?: IntFieldUpdateOperationsInput | number
    isOpenMon?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursMon?: BoolFieldUpdateOperationsInput | boolean
    openTimeTue?: IntFieldUpdateOperationsInput | number
    closeTimeTue?: IntFieldUpdateOperationsInput | number
    isOpenTue?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursTue?: BoolFieldUpdateOperationsInput | boolean
    openTimeWed?: IntFieldUpdateOperationsInput | number
    closeTimeWed?: IntFieldUpdateOperationsInput | number
    isOpenWed?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursWed?: BoolFieldUpdateOperationsInput | boolean
    openTimeThurs?: IntFieldUpdateOperationsInput | number
    closeTimeThurs?: IntFieldUpdateOperationsInput | number
    isOpenThurs?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursThurs?: BoolFieldUpdateOperationsInput | boolean
    openTimeFri?: IntFieldUpdateOperationsInput | number
    closeTimeFri?: IntFieldUpdateOperationsInput | number
    isOpenFri?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursFri?: BoolFieldUpdateOperationsInput | boolean
    openTimeSat?: IntFieldUpdateOperationsInput | number
    closeTimeSat?: IntFieldUpdateOperationsInput | number
    isOpenSat?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSat?: BoolFieldUpdateOperationsInput | boolean
    openTimeSun?: IntFieldUpdateOperationsInput | number
    closeTimeSun?: IntFieldUpdateOperationsInput | number
    isOpenSun?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSun?: BoolFieldUpdateOperationsInput | boolean
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeCreateInput = {
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomCreateNestedManyWithoutVertifyCodeInput
  }

  export type VertifyBookingCodeUncheckedCreateInput = {
    id?: number
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutVertifyCodeInput
  }

  export type VertifyBookingCodeUpdateInput = {
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUpdateManyWithoutVertifyCodeNestedInput
  }

  export type VertifyBookingCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutVertifyCodeNestedInput
  }

  export type VertifyBookingCodeCreateManyInput = {
    id?: number
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VertifyBookingCodeUpdateManyMutationInput = {
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BookRoomListRelationFilter = {
    every?: BookRoomWhereInput
    some?: BookRoomWhereInput
    none?: BookRoomWhereInput
  }

  export type BookRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExternalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserExternalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserExternalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserExternalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserExternalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserInternalRelationFilter = {
    is?: UserInternalWhereInput
    isNot?: UserInternalWhereInput
  }

  export type BranchToRoomListRelationFilter = {
    every?: BranchToRoomWhereInput
    some?: BranchToRoomWhereInput
    none?: BranchToRoomWhereInput
  }

  export type OpenCloseRelationFilter = {
    is?: OpenCloseWhereInput | null
    isNot?: OpenCloseWhereInput | null
  }

  export type BranchToRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoWorkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkAvgOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    location?: SortOrder
    tel?: SortOrder
    picture?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkSumOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    userInternalId?: SortOrder
  }

  export type CoWorkListRelationFilter = {
    every?: CoWorkWhereInput
    some?: CoWorkWhereInput
    none?: CoWorkWhereInput
  }

  export type CoWorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInternalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserInternalAvgOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
  }

  export type UserInternalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserInternalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserInternalSumOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
  }

  export type RoomRateListRelationFilter = {
    every?: RoomRateWhereInput
    some?: RoomRateWhereInput
    none?: RoomRateWhereInput
  }

  export type FacilityToRoomListRelationFilter = {
    every?: FacilityToRoomWhereInput
    some?: FacilityToRoomWhereInput
    none?: FacilityToRoomWhereInput
  }

  export type RoomRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityToRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomRateCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    time?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomRateAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    roomId?: SortOrder
  }

  export type RoomRateMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    time?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomRateMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    time?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoomRateSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    roomId?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type FacilityToRoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityToRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type FacilityToRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityToRoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FacilityToRoomSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    facilityId?: SortOrder
  }

  export type CoWorkRelationFilter = {
    is?: CoWorkWhereInput
    isNot?: CoWorkWhereInput
  }

  export type BranchToRoomCountOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BranchToRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
  }

  export type BranchToRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BranchToRoomMinOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BranchToRoomSumOrderByAggregateInput = {
    id?: SortOrder
    coWorkId?: SortOrder
    roomId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BranchToRoomRelationFilter = {
    is?: BranchToRoomWhereInput | null
    isNot?: BranchToRoomWhereInput | null
  }

  export type RoomRateRelationFilter = {
    is?: RoomRateWhereInput
    isNot?: RoomRateWhereInput
  }

  export type UserExternalRelationFilter = {
    is?: UserExternalWhereInput
    isNot?: UserExternalWhereInput
  }

  export type VertifyBookingCodeRelationFilter = {
    is?: VertifyBookingCodeWhereInput
    isNot?: VertifyBookingCodeWhereInput
  }

  export type BookRoomCountOrderByAggregateInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    startTime?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
  }

  export type BookRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    roomRateId?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
  }

  export type BookRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    startTime?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
  }

  export type BookRoomMinOrderByAggregateInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    startTime?: SortOrder
    roomRateId?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
  }

  export type BookRoomSumOrderByAggregateInput = {
    id?: SortOrder
    branchToRoomId?: SortOrder
    roomRateId?: SortOrder
    userExternalId?: SortOrder
    vertifyBookingCodeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type OpenCloseCountOrderByAggregateInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    isOpenMon?: SortOrder
    isOpen24hoursMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    isOpenTue?: SortOrder
    isOpen24hoursTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    isOpenWed?: SortOrder
    isOpen24hoursWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    isOpenThurs?: SortOrder
    isOpen24hoursThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    isOpenFri?: SortOrder
    isOpen24hoursFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    isOpenSat?: SortOrder
    isOpen24hoursSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    isOpenSun?: SortOrder
    isOpen24hoursSun?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenCloseAvgOrderByAggregateInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    coWorkId?: SortOrder
  }

  export type OpenCloseMaxOrderByAggregateInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    isOpenMon?: SortOrder
    isOpen24hoursMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    isOpenTue?: SortOrder
    isOpen24hoursTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    isOpenWed?: SortOrder
    isOpen24hoursWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    isOpenThurs?: SortOrder
    isOpen24hoursThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    isOpenFri?: SortOrder
    isOpen24hoursFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    isOpenSat?: SortOrder
    isOpen24hoursSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    isOpenSun?: SortOrder
    isOpen24hoursSun?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenCloseMinOrderByAggregateInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    isOpenMon?: SortOrder
    isOpen24hoursMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    isOpenTue?: SortOrder
    isOpen24hoursTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    isOpenWed?: SortOrder
    isOpen24hoursWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    isOpenThurs?: SortOrder
    isOpen24hoursThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    isOpenFri?: SortOrder
    isOpen24hoursFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    isOpenSat?: SortOrder
    isOpen24hoursSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    isOpenSun?: SortOrder
    isOpen24hoursSun?: SortOrder
    coWorkId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type OpenCloseSumOrderByAggregateInput = {
    id?: SortOrder
    openTimeMon?: SortOrder
    closeTimeMon?: SortOrder
    openTimeTue?: SortOrder
    closeTimeTue?: SortOrder
    openTimeWed?: SortOrder
    closeTimeWed?: SortOrder
    openTimeThurs?: SortOrder
    closeTimeThurs?: SortOrder
    openTimeFri?: SortOrder
    closeTimeFri?: SortOrder
    openTimeSat?: SortOrder
    closeTimeSat?: SortOrder
    openTimeSun?: SortOrder
    closeTimeSun?: SortOrder
    coWorkId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type VertifyBookingCodeCountOrderByAggregateInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VertifyBookingCodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VertifyBookingCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VertifyBookingCodeMinOrderByAggregateInput = {
    id?: SortOrder
    verifyCode?: SortOrder
    bookdate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VertifyBookingCodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookRoomCreateNestedManyWithoutUserExternalInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutUserExternalInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookRoomUpdateManyWithoutUserExternalNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutUserExternalInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutUserExternalInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookRoomUncheckedUpdateManyWithoutUserExternalNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutUserExternalInput>, Enumerable<BookRoomUncheckedCreateWithoutUserExternalInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutUserExternalInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutUserExternalInput>
    createMany?: BookRoomCreateManyUserExternalInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutUserExternalInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutUserExternalInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type UserInternalCreateNestedOneWithoutCoWorkInput = {
    create?: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: UserInternalCreateOrConnectWithoutCoWorkInput
    connect?: UserInternalWhereUniqueInput
  }

  export type BranchToRoomCreateNestedManyWithoutCoWorkInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
  }

  export type OpenCloseCreateNestedOneWithoutCoWorkInput = {
    create?: XOR<OpenCloseCreateWithoutCoWorkInput, OpenCloseUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: OpenCloseCreateOrConnectWithoutCoWorkInput
    connect?: OpenCloseWhereUniqueInput
  }

  export type BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
  }

  export type OpenCloseUncheckedCreateNestedOneWithoutCoWorkInput = {
    create?: XOR<OpenCloseCreateWithoutCoWorkInput, OpenCloseUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: OpenCloseCreateOrConnectWithoutCoWorkInput
    connect?: OpenCloseWhereUniqueInput
  }

  export type UserInternalUpdateOneRequiredWithoutCoWorkNestedInput = {
    create?: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: UserInternalCreateOrConnectWithoutCoWorkInput
    upsert?: UserInternalUpsertWithoutCoWorkInput
    connect?: UserInternalWhereUniqueInput
    update?: XOR<UserInternalUpdateWithoutCoWorkInput, UserInternalUncheckedUpdateWithoutCoWorkInput>
  }

  export type BranchToRoomUpdateManyWithoutCoWorkNestedInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    upsert?: Enumerable<BranchToRoomUpsertWithWhereUniqueWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    set?: Enumerable<BranchToRoomWhereUniqueInput>
    disconnect?: Enumerable<BranchToRoomWhereUniqueInput>
    delete?: Enumerable<BranchToRoomWhereUniqueInput>
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
    update?: Enumerable<BranchToRoomUpdateWithWhereUniqueWithoutCoWorkInput>
    updateMany?: Enumerable<BranchToRoomUpdateManyWithWhereWithoutCoWorkInput>
    deleteMany?: Enumerable<BranchToRoomScalarWhereInput>
  }

  export type OpenCloseUpdateOneWithoutCoWorkNestedInput = {
    create?: XOR<OpenCloseCreateWithoutCoWorkInput, OpenCloseUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: OpenCloseCreateOrConnectWithoutCoWorkInput
    upsert?: OpenCloseUpsertWithoutCoWorkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenCloseWhereUniqueInput
    update?: XOR<OpenCloseUpdateWithoutCoWorkInput, OpenCloseUncheckedUpdateWithoutCoWorkInput>
  }

  export type BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutCoWorkInput>, Enumerable<BranchToRoomUncheckedCreateWithoutCoWorkInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutCoWorkInput>
    upsert?: Enumerable<BranchToRoomUpsertWithWhereUniqueWithoutCoWorkInput>
    createMany?: BranchToRoomCreateManyCoWorkInputEnvelope
    set?: Enumerable<BranchToRoomWhereUniqueInput>
    disconnect?: Enumerable<BranchToRoomWhereUniqueInput>
    delete?: Enumerable<BranchToRoomWhereUniqueInput>
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
    update?: Enumerable<BranchToRoomUpdateWithWhereUniqueWithoutCoWorkInput>
    updateMany?: Enumerable<BranchToRoomUpdateManyWithWhereWithoutCoWorkInput>
    deleteMany?: Enumerable<BranchToRoomScalarWhereInput>
  }

  export type OpenCloseUncheckedUpdateOneWithoutCoWorkNestedInput = {
    create?: XOR<OpenCloseCreateWithoutCoWorkInput, OpenCloseUncheckedCreateWithoutCoWorkInput>
    connectOrCreate?: OpenCloseCreateOrConnectWithoutCoWorkInput
    upsert?: OpenCloseUpsertWithoutCoWorkInput
    disconnect?: boolean
    delete?: boolean
    connect?: OpenCloseWhereUniqueInput
    update?: XOR<OpenCloseUpdateWithoutCoWorkInput, OpenCloseUncheckedUpdateWithoutCoWorkInput>
  }

  export type CoWorkCreateNestedManyWithoutUserInternalInput = {
    create?: XOR<Enumerable<CoWorkCreateWithoutUserInternalInput>, Enumerable<CoWorkUncheckedCreateWithoutUserInternalInput>>
    connectOrCreate?: Enumerable<CoWorkCreateOrConnectWithoutUserInternalInput>
    createMany?: CoWorkCreateManyUserInternalInputEnvelope
    connect?: Enumerable<CoWorkWhereUniqueInput>
  }

  export type CoWorkUncheckedCreateNestedManyWithoutUserInternalInput = {
    create?: XOR<Enumerable<CoWorkCreateWithoutUserInternalInput>, Enumerable<CoWorkUncheckedCreateWithoutUserInternalInput>>
    connectOrCreate?: Enumerable<CoWorkCreateOrConnectWithoutUserInternalInput>
    createMany?: CoWorkCreateManyUserInternalInputEnvelope
    connect?: Enumerable<CoWorkWhereUniqueInput>
  }

  export type CoWorkUpdateManyWithoutUserInternalNestedInput = {
    create?: XOR<Enumerable<CoWorkCreateWithoutUserInternalInput>, Enumerable<CoWorkUncheckedCreateWithoutUserInternalInput>>
    connectOrCreate?: Enumerable<CoWorkCreateOrConnectWithoutUserInternalInput>
    upsert?: Enumerable<CoWorkUpsertWithWhereUniqueWithoutUserInternalInput>
    createMany?: CoWorkCreateManyUserInternalInputEnvelope
    set?: Enumerable<CoWorkWhereUniqueInput>
    disconnect?: Enumerable<CoWorkWhereUniqueInput>
    delete?: Enumerable<CoWorkWhereUniqueInput>
    connect?: Enumerable<CoWorkWhereUniqueInput>
    update?: Enumerable<CoWorkUpdateWithWhereUniqueWithoutUserInternalInput>
    updateMany?: Enumerable<CoWorkUpdateManyWithWhereWithoutUserInternalInput>
    deleteMany?: Enumerable<CoWorkScalarWhereInput>
  }

  export type CoWorkUncheckedUpdateManyWithoutUserInternalNestedInput = {
    create?: XOR<Enumerable<CoWorkCreateWithoutUserInternalInput>, Enumerable<CoWorkUncheckedCreateWithoutUserInternalInput>>
    connectOrCreate?: Enumerable<CoWorkCreateOrConnectWithoutUserInternalInput>
    upsert?: Enumerable<CoWorkUpsertWithWhereUniqueWithoutUserInternalInput>
    createMany?: CoWorkCreateManyUserInternalInputEnvelope
    set?: Enumerable<CoWorkWhereUniqueInput>
    disconnect?: Enumerable<CoWorkWhereUniqueInput>
    delete?: Enumerable<CoWorkWhereUniqueInput>
    connect?: Enumerable<CoWorkWhereUniqueInput>
    update?: Enumerable<CoWorkUpdateWithWhereUniqueWithoutUserInternalInput>
    updateMany?: Enumerable<CoWorkUpdateManyWithWhereWithoutUserInternalInput>
    deleteMany?: Enumerable<CoWorkScalarWhereInput>
  }

  export type RoomRateCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    connect?: Enumerable<RoomRateWhereUniqueInput>
  }

  export type FacilityToRoomCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutRoomInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutRoomInput>
    createMany?: FacilityToRoomCreateManyRoomInputEnvelope
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
  }

  export type BranchToRoomCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutRoomInput>, Enumerable<BranchToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutRoomInput>
    createMany?: BranchToRoomCreateManyRoomInputEnvelope
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
  }

  export type RoomRateUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    connect?: Enumerable<RoomRateWhereUniqueInput>
  }

  export type FacilityToRoomUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutRoomInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutRoomInput>
    createMany?: FacilityToRoomCreateManyRoomInputEnvelope
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
  }

  export type BranchToRoomUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutRoomInput>, Enumerable<BranchToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutRoomInput>
    createMany?: BranchToRoomCreateManyRoomInputEnvelope
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
  }

  export type RoomRateUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<RoomRateUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    set?: Enumerable<RoomRateWhereUniqueInput>
    disconnect?: Enumerable<RoomRateWhereUniqueInput>
    delete?: Enumerable<RoomRateWhereUniqueInput>
    connect?: Enumerable<RoomRateWhereUniqueInput>
    update?: Enumerable<RoomRateUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<RoomRateUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<RoomRateScalarWhereInput>
  }

  export type FacilityToRoomUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutRoomInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<FacilityToRoomUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: FacilityToRoomCreateManyRoomInputEnvelope
    set?: Enumerable<FacilityToRoomWhereUniqueInput>
    disconnect?: Enumerable<FacilityToRoomWhereUniqueInput>
    delete?: Enumerable<FacilityToRoomWhereUniqueInput>
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
    update?: Enumerable<FacilityToRoomUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<FacilityToRoomUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<FacilityToRoomScalarWhereInput>
  }

  export type BranchToRoomUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutRoomInput>, Enumerable<BranchToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BranchToRoomUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BranchToRoomCreateManyRoomInputEnvelope
    set?: Enumerable<BranchToRoomWhereUniqueInput>
    disconnect?: Enumerable<BranchToRoomWhereUniqueInput>
    delete?: Enumerable<BranchToRoomWhereUniqueInput>
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
    update?: Enumerable<BranchToRoomUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BranchToRoomUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BranchToRoomScalarWhereInput>
  }

  export type RoomRateUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<RoomRateCreateWithoutRoomInput>, Enumerable<RoomRateUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<RoomRateCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<RoomRateUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: RoomRateCreateManyRoomInputEnvelope
    set?: Enumerable<RoomRateWhereUniqueInput>
    disconnect?: Enumerable<RoomRateWhereUniqueInput>
    delete?: Enumerable<RoomRateWhereUniqueInput>
    connect?: Enumerable<RoomRateWhereUniqueInput>
    update?: Enumerable<RoomRateUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<RoomRateUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<RoomRateScalarWhereInput>
  }

  export type FacilityToRoomUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutRoomInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<FacilityToRoomUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: FacilityToRoomCreateManyRoomInputEnvelope
    set?: Enumerable<FacilityToRoomWhereUniqueInput>
    disconnect?: Enumerable<FacilityToRoomWhereUniqueInput>
    delete?: Enumerable<FacilityToRoomWhereUniqueInput>
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
    update?: Enumerable<FacilityToRoomUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<FacilityToRoomUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<FacilityToRoomScalarWhereInput>
  }

  export type BranchToRoomUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<BranchToRoomCreateWithoutRoomInput>, Enumerable<BranchToRoomUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<BranchToRoomCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<BranchToRoomUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: BranchToRoomCreateManyRoomInputEnvelope
    set?: Enumerable<BranchToRoomWhereUniqueInput>
    disconnect?: Enumerable<BranchToRoomWhereUniqueInput>
    delete?: Enumerable<BranchToRoomWhereUniqueInput>
    connect?: Enumerable<BranchToRoomWhereUniqueInput>
    update?: Enumerable<BranchToRoomUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<BranchToRoomUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<BranchToRoomScalarWhereInput>
  }

  export type RoomCreateNestedOneWithoutRoomPriceInput = {
    create?: XOR<RoomCreateWithoutRoomPriceInput, RoomUncheckedCreateWithoutRoomPriceInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomPriceInput
    connect?: RoomWhereUniqueInput
  }

  export type BookRoomCreateNestedManyWithoutRoomRateInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutRoomRateInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type RoomUpdateOneRequiredWithoutRoomPriceNestedInput = {
    create?: XOR<RoomCreateWithoutRoomPriceInput, RoomUncheckedCreateWithoutRoomPriceInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomPriceInput
    upsert?: RoomUpsertWithoutRoomPriceInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutRoomPriceInput, RoomUncheckedUpdateWithoutRoomPriceInput>
  }

  export type BookRoomUpdateManyWithoutRoomRateNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutRoomRateInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutRoomRateInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutRoomRateInput>, Enumerable<BookRoomUncheckedCreateWithoutRoomRateInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutRoomRateInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutRoomRateInput>
    createMany?: BookRoomCreateManyRoomRateInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutRoomRateInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutRoomRateInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type FacilityToRoomCreateNestedManyWithoutFacilitiesInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutFacilitiesInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutFacilitiesInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutFacilitiesInput>
    createMany?: FacilityToRoomCreateManyFacilitiesInputEnvelope
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
  }

  export type FacilityToRoomUncheckedCreateNestedManyWithoutFacilitiesInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutFacilitiesInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutFacilitiesInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutFacilitiesInput>
    createMany?: FacilityToRoomCreateManyFacilitiesInputEnvelope
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
  }

  export type FacilityToRoomUpdateManyWithoutFacilitiesNestedInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutFacilitiesInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutFacilitiesInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutFacilitiesInput>
    upsert?: Enumerable<FacilityToRoomUpsertWithWhereUniqueWithoutFacilitiesInput>
    createMany?: FacilityToRoomCreateManyFacilitiesInputEnvelope
    set?: Enumerable<FacilityToRoomWhereUniqueInput>
    disconnect?: Enumerable<FacilityToRoomWhereUniqueInput>
    delete?: Enumerable<FacilityToRoomWhereUniqueInput>
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
    update?: Enumerable<FacilityToRoomUpdateWithWhereUniqueWithoutFacilitiesInput>
    updateMany?: Enumerable<FacilityToRoomUpdateManyWithWhereWithoutFacilitiesInput>
    deleteMany?: Enumerable<FacilityToRoomScalarWhereInput>
  }

  export type FacilityToRoomUncheckedUpdateManyWithoutFacilitiesNestedInput = {
    create?: XOR<Enumerable<FacilityToRoomCreateWithoutFacilitiesInput>, Enumerable<FacilityToRoomUncheckedCreateWithoutFacilitiesInput>>
    connectOrCreate?: Enumerable<FacilityToRoomCreateOrConnectWithoutFacilitiesInput>
    upsert?: Enumerable<FacilityToRoomUpsertWithWhereUniqueWithoutFacilitiesInput>
    createMany?: FacilityToRoomCreateManyFacilitiesInputEnvelope
    set?: Enumerable<FacilityToRoomWhereUniqueInput>
    disconnect?: Enumerable<FacilityToRoomWhereUniqueInput>
    delete?: Enumerable<FacilityToRoomWhereUniqueInput>
    connect?: Enumerable<FacilityToRoomWhereUniqueInput>
    update?: Enumerable<FacilityToRoomUpdateWithWhereUniqueWithoutFacilitiesInput>
    updateMany?: Enumerable<FacilityToRoomUpdateManyWithWhereWithoutFacilitiesInput>
    deleteMany?: Enumerable<FacilityToRoomScalarWhereInput>
  }

  export type RoomCreateNestedOneWithoutFacilityToRoomInput = {
    create?: XOR<RoomCreateWithoutFacilityToRoomInput, RoomUncheckedCreateWithoutFacilityToRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutFacilityToRoomInput
    connect?: RoomWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutFacilityToRoomInput = {
    create?: XOR<FacilityCreateWithoutFacilityToRoomInput, FacilityUncheckedCreateWithoutFacilityToRoomInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutFacilityToRoomInput
    connect?: FacilityWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutFacilityToRoomNestedInput = {
    create?: XOR<RoomCreateWithoutFacilityToRoomInput, RoomUncheckedCreateWithoutFacilityToRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutFacilityToRoomInput
    upsert?: RoomUpsertWithoutFacilityToRoomInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutFacilityToRoomInput, RoomUncheckedUpdateWithoutFacilityToRoomInput>
  }

  export type FacilityUpdateOneRequiredWithoutFacilityToRoomNestedInput = {
    create?: XOR<FacilityCreateWithoutFacilityToRoomInput, FacilityUncheckedCreateWithoutFacilityToRoomInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutFacilityToRoomInput
    upsert?: FacilityUpsertWithoutFacilityToRoomInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<FacilityUpdateWithoutFacilityToRoomInput, FacilityUncheckedUpdateWithoutFacilityToRoomInput>
  }

  export type CoWorkCreateNestedOneWithoutBranchToRoomInput = {
    create?: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutBranchToRoomInput
    connect?: CoWorkWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBranchToRoomInput = {
    create?: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBranchToRoomInput
    connect?: RoomWhereUniqueInput
  }

  export type BookRoomCreateNestedManyWithoutBranchToRoomInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutBranchToRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutBranchToRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutBranchToRoomInput>
    createMany?: BookRoomCreateManyBranchToRoomInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutBranchToRoomInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutBranchToRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutBranchToRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutBranchToRoomInput>
    createMany?: BookRoomCreateManyBranchToRoomInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput = {
    create?: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutBranchToRoomInput
    upsert?: CoWorkUpsertWithoutBranchToRoomInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutBranchToRoomInput, CoWorkUncheckedUpdateWithoutBranchToRoomInput>
  }

  export type RoomUpdateOneRequiredWithoutBranchToRoomNestedInput = {
    create?: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBranchToRoomInput
    upsert?: RoomUpsertWithoutBranchToRoomInput
    connect?: RoomWhereUniqueInput
    update?: XOR<RoomUpdateWithoutBranchToRoomInput, RoomUncheckedUpdateWithoutBranchToRoomInput>
  }

  export type BookRoomUpdateManyWithoutBranchToRoomNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutBranchToRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutBranchToRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutBranchToRoomInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutBranchToRoomInput>
    createMany?: BookRoomCreateManyBranchToRoomInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutBranchToRoomInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutBranchToRoomInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BookRoomUncheckedUpdateManyWithoutBranchToRoomNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutBranchToRoomInput>, Enumerable<BookRoomUncheckedCreateWithoutBranchToRoomInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutBranchToRoomInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutBranchToRoomInput>
    createMany?: BookRoomCreateManyBranchToRoomInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutBranchToRoomInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutBranchToRoomInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BranchToRoomCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<BranchToRoomCreateWithoutBookRoomInput, BranchToRoomUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: BranchToRoomCreateOrConnectWithoutBookRoomInput
    connect?: BranchToRoomWhereUniqueInput
  }

  export type RoomRateCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: RoomRateCreateOrConnectWithoutBookRoomInput
    connect?: RoomRateWhereUniqueInput
  }

  export type UserExternalCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: UserExternalCreateOrConnectWithoutBookRoomInput
    connect?: UserExternalWhereUniqueInput
  }

  export type VertifyBookingCodeCreateNestedOneWithoutBookRoomInput = {
    create?: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: VertifyBookingCodeCreateOrConnectWithoutBookRoomInput
    connect?: VertifyBookingCodeWhereUniqueInput
  }

  export type BranchToRoomUpdateOneWithoutBookRoomNestedInput = {
    create?: XOR<BranchToRoomCreateWithoutBookRoomInput, BranchToRoomUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: BranchToRoomCreateOrConnectWithoutBookRoomInput
    upsert?: BranchToRoomUpsertWithoutBookRoomInput
    disconnect?: boolean
    delete?: boolean
    connect?: BranchToRoomWhereUniqueInput
    update?: XOR<BranchToRoomUpdateWithoutBookRoomInput, BranchToRoomUncheckedUpdateWithoutBookRoomInput>
  }

  export type RoomRateUpdateOneRequiredWithoutBookRoomNestedInput = {
    create?: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: RoomRateCreateOrConnectWithoutBookRoomInput
    upsert?: RoomRateUpsertWithoutBookRoomInput
    connect?: RoomRateWhereUniqueInput
    update?: XOR<RoomRateUpdateWithoutBookRoomInput, RoomRateUncheckedUpdateWithoutBookRoomInput>
  }

  export type UserExternalUpdateOneRequiredWithoutBookRoomNestedInput = {
    create?: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: UserExternalCreateOrConnectWithoutBookRoomInput
    upsert?: UserExternalUpsertWithoutBookRoomInput
    connect?: UserExternalWhereUniqueInput
    update?: XOR<UserExternalUpdateWithoutBookRoomInput, UserExternalUncheckedUpdateWithoutBookRoomInput>
  }

  export type VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput = {
    create?: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
    connectOrCreate?: VertifyBookingCodeCreateOrConnectWithoutBookRoomInput
    upsert?: VertifyBookingCodeUpsertWithoutBookRoomInput
    connect?: VertifyBookingCodeWhereUniqueInput
    update?: XOR<VertifyBookingCodeUpdateWithoutBookRoomInput, VertifyBookingCodeUncheckedUpdateWithoutBookRoomInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CoWorkCreateNestedOneWithoutOpenCloseInput = {
    create?: XOR<CoWorkCreateWithoutOpenCloseInput, CoWorkUncheckedCreateWithoutOpenCloseInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenCloseInput
    connect?: CoWorkWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CoWorkUpdateOneRequiredWithoutOpenCloseNestedInput = {
    create?: XOR<CoWorkCreateWithoutOpenCloseInput, CoWorkUncheckedCreateWithoutOpenCloseInput>
    connectOrCreate?: CoWorkCreateOrConnectWithoutOpenCloseInput
    upsert?: CoWorkUpsertWithoutOpenCloseInput
    connect?: CoWorkWhereUniqueInput
    update?: XOR<CoWorkUpdateWithoutOpenCloseInput, CoWorkUncheckedUpdateWithoutOpenCloseInput>
  }

  export type BookRoomCreateNestedManyWithoutVertifyCodeInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUncheckedCreateNestedManyWithoutVertifyCodeInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    connect?: Enumerable<BookRoomWhereUniqueInput>
  }

  export type BookRoomUpdateManyWithoutVertifyCodeNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutVertifyCodeInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutVertifyCodeInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type BookRoomUncheckedUpdateManyWithoutVertifyCodeNestedInput = {
    create?: XOR<Enumerable<BookRoomCreateWithoutVertifyCodeInput>, Enumerable<BookRoomUncheckedCreateWithoutVertifyCodeInput>>
    connectOrCreate?: Enumerable<BookRoomCreateOrConnectWithoutVertifyCodeInput>
    upsert?: Enumerable<BookRoomUpsertWithWhereUniqueWithoutVertifyCodeInput>
    createMany?: BookRoomCreateManyVertifyCodeInputEnvelope
    set?: Enumerable<BookRoomWhereUniqueInput>
    disconnect?: Enumerable<BookRoomWhereUniqueInput>
    delete?: Enumerable<BookRoomWhereUniqueInput>
    connect?: Enumerable<BookRoomWhereUniqueInput>
    update?: Enumerable<BookRoomUpdateWithWhereUniqueWithoutVertifyCodeInput>
    updateMany?: Enumerable<BookRoomUpdateManyWithWhereWithoutVertifyCodeInput>
    deleteMany?: Enumerable<BookRoomScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BookRoomCreateWithoutUserExternalInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    branchToRoom?: BranchToRoomCreateNestedOneWithoutBookRoomInput
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutUserExternalInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    vertifyBookingCodeId: number
  }

  export type BookRoomCreateOrConnectWithoutUserExternalInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutUserExternalInput, BookRoomUncheckedCreateWithoutUserExternalInput>
  }

  export type BookRoomCreateManyUserExternalInputEnvelope = {
    data: Enumerable<BookRoomCreateManyUserExternalInput>
    skipDuplicates?: boolean
  }

  export type BookRoomUpsertWithWhereUniqueWithoutUserExternalInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutUserExternalInput, BookRoomUncheckedUpdateWithoutUserExternalInput>
    create: XOR<BookRoomCreateWithoutUserExternalInput, BookRoomUncheckedCreateWithoutUserExternalInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutUserExternalInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutUserExternalInput, BookRoomUncheckedUpdateWithoutUserExternalInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutUserExternalInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type BookRoomScalarWhereInput = {
    AND?: Enumerable<BookRoomScalarWhereInput>
    OR?: Enumerable<BookRoomScalarWhereInput>
    NOT?: Enumerable<BookRoomScalarWhereInput>
    id?: IntFilter | number
    branchToRoomId?: IntNullableFilter | number | null
    startTime?: DateTimeFilter | Date | string
    roomRateId?: IntFilter | number
    status?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userExternalId?: IntFilter | number
    vertifyBookingCodeId?: IntFilter | number
  }

  export type UserInternalCreateWithoutCoWorkInput = {
    name: string
    email: string
    tel: number
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserInternalUncheckedCreateWithoutCoWorkInput = {
    id?: number
    name: string
    email: string
    tel: number
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserInternalCreateOrConnectWithoutCoWorkInput = {
    where: UserInternalWhereUniqueInput
    create: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
  }

  export type BranchToRoomCreateWithoutCoWorkInput = {
    createAt?: Date | string
    updateAt?: Date | string
    room: RoomCreateNestedOneWithoutBranchToRoomInput
    BookRoom?: BookRoomCreateNestedManyWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateWithoutCoWorkInput = {
    id?: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutBranchToRoomInput
  }

  export type BranchToRoomCreateOrConnectWithoutCoWorkInput = {
    where: BranchToRoomWhereUniqueInput
    create: XOR<BranchToRoomCreateWithoutCoWorkInput, BranchToRoomUncheckedCreateWithoutCoWorkInput>
  }

  export type BranchToRoomCreateManyCoWorkInputEnvelope = {
    data: Enumerable<BranchToRoomCreateManyCoWorkInput>
    skipDuplicates?: boolean
  }

  export type OpenCloseCreateWithoutCoWorkInput = {
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: boolean
    isOpen24hoursMon: boolean
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: boolean
    isOpen24hoursTue: boolean
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: boolean
    isOpen24hoursWed: boolean
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: boolean
    isOpen24hoursThurs: boolean
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: boolean
    isOpen24hoursFri: boolean
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: boolean
    isOpen24hoursSat: boolean
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: boolean
    isOpen24hoursSun: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseUncheckedCreateWithoutCoWorkInput = {
    id?: number
    openTimeMon: number
    closeTimeMon: number
    isOpenMon: boolean
    isOpen24hoursMon: boolean
    openTimeTue: number
    closeTimeTue: number
    isOpenTue: boolean
    isOpen24hoursTue: boolean
    openTimeWed: number
    closeTimeWed: number
    isOpenWed: boolean
    isOpen24hoursWed: boolean
    openTimeThurs: number
    closeTimeThurs: number
    isOpenThurs: boolean
    isOpen24hoursThurs: boolean
    openTimeFri: number
    closeTimeFri: number
    isOpenFri: boolean
    isOpen24hoursFri: boolean
    openTimeSat: number
    closeTimeSat: number
    isOpenSat: boolean
    isOpen24hoursSat: boolean
    openTimeSun: number
    closeTimeSun: number
    isOpenSun: boolean
    isOpen24hoursSun: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type OpenCloseCreateOrConnectWithoutCoWorkInput = {
    where: OpenCloseWhereUniqueInput
    create: XOR<OpenCloseCreateWithoutCoWorkInput, OpenCloseUncheckedCreateWithoutCoWorkInput>
  }

  export type UserInternalUpsertWithoutCoWorkInput = {
    update: XOR<UserInternalUpdateWithoutCoWorkInput, UserInternalUncheckedUpdateWithoutCoWorkInput>
    create: XOR<UserInternalCreateWithoutCoWorkInput, UserInternalUncheckedCreateWithoutCoWorkInput>
  }

  export type UserInternalUpdateWithoutCoWorkInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInternalUncheckedUpdateWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchToRoomUpsertWithWhereUniqueWithoutCoWorkInput = {
    where: BranchToRoomWhereUniqueInput
    update: XOR<BranchToRoomUpdateWithoutCoWorkInput, BranchToRoomUncheckedUpdateWithoutCoWorkInput>
    create: XOR<BranchToRoomCreateWithoutCoWorkInput, BranchToRoomUncheckedCreateWithoutCoWorkInput>
  }

  export type BranchToRoomUpdateWithWhereUniqueWithoutCoWorkInput = {
    where: BranchToRoomWhereUniqueInput
    data: XOR<BranchToRoomUpdateWithoutCoWorkInput, BranchToRoomUncheckedUpdateWithoutCoWorkInput>
  }

  export type BranchToRoomUpdateManyWithWhereWithoutCoWorkInput = {
    where: BranchToRoomScalarWhereInput
    data: XOR<BranchToRoomUpdateManyMutationInput, BranchToRoomUncheckedUpdateManyWithoutBranchToRoomInput>
  }

  export type BranchToRoomScalarWhereInput = {
    AND?: Enumerable<BranchToRoomScalarWhereInput>
    OR?: Enumerable<BranchToRoomScalarWhereInput>
    NOT?: Enumerable<BranchToRoomScalarWhereInput>
    id?: IntFilter | number
    coWorkId?: IntFilter | number
    roomId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type OpenCloseUpsertWithoutCoWorkInput = {
    update: XOR<OpenCloseUpdateWithoutCoWorkInput, OpenCloseUncheckedUpdateWithoutCoWorkInput>
    create: XOR<OpenCloseCreateWithoutCoWorkInput, OpenCloseUncheckedCreateWithoutCoWorkInput>
  }

  export type OpenCloseUpdateWithoutCoWorkInput = {
    openTimeMon?: IntFieldUpdateOperationsInput | number
    closeTimeMon?: IntFieldUpdateOperationsInput | number
    isOpenMon?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursMon?: BoolFieldUpdateOperationsInput | boolean
    openTimeTue?: IntFieldUpdateOperationsInput | number
    closeTimeTue?: IntFieldUpdateOperationsInput | number
    isOpenTue?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursTue?: BoolFieldUpdateOperationsInput | boolean
    openTimeWed?: IntFieldUpdateOperationsInput | number
    closeTimeWed?: IntFieldUpdateOperationsInput | number
    isOpenWed?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursWed?: BoolFieldUpdateOperationsInput | boolean
    openTimeThurs?: IntFieldUpdateOperationsInput | number
    closeTimeThurs?: IntFieldUpdateOperationsInput | number
    isOpenThurs?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursThurs?: BoolFieldUpdateOperationsInput | boolean
    openTimeFri?: IntFieldUpdateOperationsInput | number
    closeTimeFri?: IntFieldUpdateOperationsInput | number
    isOpenFri?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursFri?: BoolFieldUpdateOperationsInput | boolean
    openTimeSat?: IntFieldUpdateOperationsInput | number
    closeTimeSat?: IntFieldUpdateOperationsInput | number
    isOpenSat?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSat?: BoolFieldUpdateOperationsInput | boolean
    openTimeSun?: IntFieldUpdateOperationsInput | number
    closeTimeSun?: IntFieldUpdateOperationsInput | number
    isOpenSun?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSun?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenCloseUncheckedUpdateWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    openTimeMon?: IntFieldUpdateOperationsInput | number
    closeTimeMon?: IntFieldUpdateOperationsInput | number
    isOpenMon?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursMon?: BoolFieldUpdateOperationsInput | boolean
    openTimeTue?: IntFieldUpdateOperationsInput | number
    closeTimeTue?: IntFieldUpdateOperationsInput | number
    isOpenTue?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursTue?: BoolFieldUpdateOperationsInput | boolean
    openTimeWed?: IntFieldUpdateOperationsInput | number
    closeTimeWed?: IntFieldUpdateOperationsInput | number
    isOpenWed?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursWed?: BoolFieldUpdateOperationsInput | boolean
    openTimeThurs?: IntFieldUpdateOperationsInput | number
    closeTimeThurs?: IntFieldUpdateOperationsInput | number
    isOpenThurs?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursThurs?: BoolFieldUpdateOperationsInput | boolean
    openTimeFri?: IntFieldUpdateOperationsInput | number
    closeTimeFri?: IntFieldUpdateOperationsInput | number
    isOpenFri?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursFri?: BoolFieldUpdateOperationsInput | boolean
    openTimeSat?: IntFieldUpdateOperationsInput | number
    closeTimeSat?: IntFieldUpdateOperationsInput | number
    isOpenSat?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSat?: BoolFieldUpdateOperationsInput | boolean
    openTimeSun?: IntFieldUpdateOperationsInput | number
    closeTimeSun?: IntFieldUpdateOperationsInput | number
    isOpenSun?: BoolFieldUpdateOperationsInput | boolean
    isOpen24hoursSun?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateWithoutUserInternalInput = {
    name: string
    description: string
    location: string
    tel: number
    picture: string
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
    OpenClose?: OpenCloseCreateNestedOneWithoutCoWorkInput
  }

  export type CoWorkUncheckedCreateWithoutUserInternalInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
    OpenClose?: OpenCloseUncheckedCreateNestedOneWithoutCoWorkInput
  }

  export type CoWorkCreateOrConnectWithoutUserInternalInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
  }

  export type CoWorkCreateManyUserInternalInputEnvelope = {
    data: Enumerable<CoWorkCreateManyUserInternalInput>
    skipDuplicates?: boolean
  }

  export type CoWorkUpsertWithWhereUniqueWithoutUserInternalInput = {
    where: CoWorkWhereUniqueInput
    update: XOR<CoWorkUpdateWithoutUserInternalInput, CoWorkUncheckedUpdateWithoutUserInternalInput>
    create: XOR<CoWorkCreateWithoutUserInternalInput, CoWorkUncheckedCreateWithoutUserInternalInput>
  }

  export type CoWorkUpdateWithWhereUniqueWithoutUserInternalInput = {
    where: CoWorkWhereUniqueInput
    data: XOR<CoWorkUpdateWithoutUserInternalInput, CoWorkUncheckedUpdateWithoutUserInternalInput>
  }

  export type CoWorkUpdateManyWithWhereWithoutUserInternalInput = {
    where: CoWorkScalarWhereInput
    data: XOR<CoWorkUpdateManyMutationInput, CoWorkUncheckedUpdateManyWithoutCoWorkInput>
  }

  export type CoWorkScalarWhereInput = {
    AND?: Enumerable<CoWorkScalarWhereInput>
    OR?: Enumerable<CoWorkScalarWhereInput>
    NOT?: Enumerable<CoWorkScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    location?: StringFilter | string
    tel?: IntFilter | number
    picture?: StringFilter | string
    userInternalId?: IntFilter | number
  }

  export type RoomRateCreateWithoutRoomInput = {
    price: number
    time: string
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateUncheckedCreateWithoutRoomInput = {
    id?: number
    price: number
    time: string
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutRoomRateInput
  }

  export type RoomRateCreateOrConnectWithoutRoomInput = {
    where: RoomRateWhereUniqueInput
    create: XOR<RoomRateCreateWithoutRoomInput, RoomRateUncheckedCreateWithoutRoomInput>
  }

  export type RoomRateCreateManyRoomInputEnvelope = {
    data: Enumerable<RoomRateCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type FacilityToRoomCreateWithoutRoomInput = {
    createAt?: Date | string
    updateAt?: Date | string
    facilities: FacilityCreateNestedOneWithoutFacilityToRoomInput
  }

  export type FacilityToRoomUncheckedCreateWithoutRoomInput = {
    id?: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToRoomCreateOrConnectWithoutRoomInput = {
    where: FacilityToRoomWhereUniqueInput
    create: XOR<FacilityToRoomCreateWithoutRoomInput, FacilityToRoomUncheckedCreateWithoutRoomInput>
  }

  export type FacilityToRoomCreateManyRoomInputEnvelope = {
    data: Enumerable<FacilityToRoomCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type BranchToRoomCreateWithoutRoomInput = {
    createAt?: Date | string
    updateAt?: Date | string
    coWork: CoWorkCreateNestedOneWithoutBranchToRoomInput
    BookRoom?: BookRoomCreateNestedManyWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateWithoutRoomInput = {
    id?: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
    BookRoom?: BookRoomUncheckedCreateNestedManyWithoutBranchToRoomInput
  }

  export type BranchToRoomCreateOrConnectWithoutRoomInput = {
    where: BranchToRoomWhereUniqueInput
    create: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
  }

  export type BranchToRoomCreateManyRoomInputEnvelope = {
    data: Enumerable<BranchToRoomCreateManyRoomInput>
    skipDuplicates?: boolean
  }

  export type RoomRateUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomRateWhereUniqueInput
    update: XOR<RoomRateUpdateWithoutRoomInput, RoomRateUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomRateCreateWithoutRoomInput, RoomRateUncheckedCreateWithoutRoomInput>
  }

  export type RoomRateUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomRateWhereUniqueInput
    data: XOR<RoomRateUpdateWithoutRoomInput, RoomRateUncheckedUpdateWithoutRoomInput>
  }

  export type RoomRateUpdateManyWithWhereWithoutRoomInput = {
    where: RoomRateScalarWhereInput
    data: XOR<RoomRateUpdateManyMutationInput, RoomRateUncheckedUpdateManyWithoutRoomPriceInput>
  }

  export type RoomRateScalarWhereInput = {
    AND?: Enumerable<RoomRateScalarWhereInput>
    OR?: Enumerable<RoomRateScalarWhereInput>
    NOT?: Enumerable<RoomRateScalarWhereInput>
    id?: IntFilter | number
    price?: IntFilter | number
    time?: StringFilter | string
    roomId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type FacilityToRoomUpsertWithWhereUniqueWithoutRoomInput = {
    where: FacilityToRoomWhereUniqueInput
    update: XOR<FacilityToRoomUpdateWithoutRoomInput, FacilityToRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<FacilityToRoomCreateWithoutRoomInput, FacilityToRoomUncheckedCreateWithoutRoomInput>
  }

  export type FacilityToRoomUpdateWithWhereUniqueWithoutRoomInput = {
    where: FacilityToRoomWhereUniqueInput
    data: XOR<FacilityToRoomUpdateWithoutRoomInput, FacilityToRoomUncheckedUpdateWithoutRoomInput>
  }

  export type FacilityToRoomUpdateManyWithWhereWithoutRoomInput = {
    where: FacilityToRoomScalarWhereInput
    data: XOR<FacilityToRoomUpdateManyMutationInput, FacilityToRoomUncheckedUpdateManyWithoutFacilityToRoomInput>
  }

  export type FacilityToRoomScalarWhereInput = {
    AND?: Enumerable<FacilityToRoomScalarWhereInput>
    OR?: Enumerable<FacilityToRoomScalarWhereInput>
    NOT?: Enumerable<FacilityToRoomScalarWhereInput>
    id?: IntFilter | number
    roomId?: IntFilter | number
    facilityId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type BranchToRoomUpsertWithWhereUniqueWithoutRoomInput = {
    where: BranchToRoomWhereUniqueInput
    update: XOR<BranchToRoomUpdateWithoutRoomInput, BranchToRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<BranchToRoomCreateWithoutRoomInput, BranchToRoomUncheckedCreateWithoutRoomInput>
  }

  export type BranchToRoomUpdateWithWhereUniqueWithoutRoomInput = {
    where: BranchToRoomWhereUniqueInput
    data: XOR<BranchToRoomUpdateWithoutRoomInput, BranchToRoomUncheckedUpdateWithoutRoomInput>
  }

  export type BranchToRoomUpdateManyWithWhereWithoutRoomInput = {
    where: BranchToRoomScalarWhereInput
    data: XOR<BranchToRoomUpdateManyMutationInput, BranchToRoomUncheckedUpdateManyWithoutBranchToRoomInput>
  }

  export type RoomCreateWithoutRoomPriceInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    FacilityToRoom?: FacilityToRoomCreateNestedManyWithoutRoomInput
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomPriceInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    FacilityToRoom?: FacilityToRoomUncheckedCreateNestedManyWithoutRoomInput
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomPriceInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomPriceInput, RoomUncheckedCreateWithoutRoomPriceInput>
  }

  export type BookRoomCreateWithoutRoomRateInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    branchToRoom?: BranchToRoomCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutRoomRateInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
  }

  export type BookRoomCreateOrConnectWithoutRoomRateInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutRoomRateInput, BookRoomUncheckedCreateWithoutRoomRateInput>
  }

  export type BookRoomCreateManyRoomRateInputEnvelope = {
    data: Enumerable<BookRoomCreateManyRoomRateInput>
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutRoomPriceInput = {
    update: XOR<RoomUpdateWithoutRoomPriceInput, RoomUncheckedUpdateWithoutRoomPriceInput>
    create: XOR<RoomCreateWithoutRoomPriceInput, RoomUncheckedCreateWithoutRoomPriceInput>
  }

  export type RoomUpdateWithoutRoomPriceInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FacilityToRoom?: FacilityToRoomUpdateManyWithoutRoomNestedInput
    BranchToRoom?: BranchToRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FacilityToRoom?: FacilityToRoomUncheckedUpdateManyWithoutRoomNestedInput
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type BookRoomUpsertWithWhereUniqueWithoutRoomRateInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutRoomRateInput, BookRoomUncheckedUpdateWithoutRoomRateInput>
    create: XOR<BookRoomCreateWithoutRoomRateInput, BookRoomUncheckedCreateWithoutRoomRateInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutRoomRateInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutRoomRateInput, BookRoomUncheckedUpdateWithoutRoomRateInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutRoomRateInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type FacilityToRoomCreateWithoutFacilitiesInput = {
    createAt?: Date | string
    updateAt?: Date | string
    room: RoomCreateNestedOneWithoutFacilityToRoomInput
  }

  export type FacilityToRoomUncheckedCreateWithoutFacilitiesInput = {
    id?: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToRoomCreateOrConnectWithoutFacilitiesInput = {
    where: FacilityToRoomWhereUniqueInput
    create: XOR<FacilityToRoomCreateWithoutFacilitiesInput, FacilityToRoomUncheckedCreateWithoutFacilitiesInput>
  }

  export type FacilityToRoomCreateManyFacilitiesInputEnvelope = {
    data: Enumerable<FacilityToRoomCreateManyFacilitiesInput>
    skipDuplicates?: boolean
  }

  export type FacilityToRoomUpsertWithWhereUniqueWithoutFacilitiesInput = {
    where: FacilityToRoomWhereUniqueInput
    update: XOR<FacilityToRoomUpdateWithoutFacilitiesInput, FacilityToRoomUncheckedUpdateWithoutFacilitiesInput>
    create: XOR<FacilityToRoomCreateWithoutFacilitiesInput, FacilityToRoomUncheckedCreateWithoutFacilitiesInput>
  }

  export type FacilityToRoomUpdateWithWhereUniqueWithoutFacilitiesInput = {
    where: FacilityToRoomWhereUniqueInput
    data: XOR<FacilityToRoomUpdateWithoutFacilitiesInput, FacilityToRoomUncheckedUpdateWithoutFacilitiesInput>
  }

  export type FacilityToRoomUpdateManyWithWhereWithoutFacilitiesInput = {
    where: FacilityToRoomScalarWhereInput
    data: XOR<FacilityToRoomUpdateManyMutationInput, FacilityToRoomUncheckedUpdateManyWithoutFacilityToRoomInput>
  }

  export type RoomCreateWithoutFacilityToRoomInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomPrice?: RoomRateCreateNestedManyWithoutRoomInput
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutFacilityToRoomInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomPrice?: RoomRateUncheckedCreateNestedManyWithoutRoomInput
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutFacilityToRoomInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutFacilityToRoomInput, RoomUncheckedCreateWithoutFacilityToRoomInput>
  }

  export type FacilityCreateWithoutFacilityToRoomInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityUncheckedCreateWithoutFacilityToRoomInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityCreateOrConnectWithoutFacilityToRoomInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutFacilityToRoomInput, FacilityUncheckedCreateWithoutFacilityToRoomInput>
  }

  export type RoomUpsertWithoutFacilityToRoomInput = {
    update: XOR<RoomUpdateWithoutFacilityToRoomInput, RoomUncheckedUpdateWithoutFacilityToRoomInput>
    create: XOR<RoomCreateWithoutFacilityToRoomInput, RoomUncheckedCreateWithoutFacilityToRoomInput>
  }

  export type RoomUpdateWithoutFacilityToRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomPrice?: RoomRateUpdateManyWithoutRoomNestedInput
    BranchToRoom?: BranchToRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutFacilityToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomPrice?: RoomRateUncheckedUpdateManyWithoutRoomNestedInput
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type FacilityUpsertWithoutFacilityToRoomInput = {
    update: XOR<FacilityUpdateWithoutFacilityToRoomInput, FacilityUncheckedUpdateWithoutFacilityToRoomInput>
    create: XOR<FacilityCreateWithoutFacilityToRoomInput, FacilityUncheckedCreateWithoutFacilityToRoomInput>
  }

  export type FacilityUpdateWithoutFacilityToRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateWithoutFacilityToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateWithoutBranchToRoomInput = {
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternal: UserInternalCreateNestedOneWithoutCoWorkInput
    OpenClose?: OpenCloseCreateNestedOneWithoutCoWorkInput
  }

  export type CoWorkUncheckedCreateWithoutBranchToRoomInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternalId: number
    OpenClose?: OpenCloseUncheckedCreateNestedOneWithoutCoWorkInput
  }

  export type CoWorkCreateOrConnectWithoutBranchToRoomInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
  }

  export type RoomCreateWithoutBranchToRoomInput = {
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomPrice?: RoomRateCreateNestedManyWithoutRoomInput
    FacilityToRoom?: FacilityToRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBranchToRoomInput = {
    id?: number
    name: string
    capacity: number
    createAt?: Date | string
    updateAt?: Date | string
    RoomPrice?: RoomRateUncheckedCreateNestedManyWithoutRoomInput
    FacilityToRoom?: FacilityToRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBranchToRoomInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
  }

  export type BookRoomCreateWithoutBranchToRoomInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
    vertifyCode: VertifyBookingCodeCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutBranchToRoomInput = {
    id?: number
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
  }

  export type BookRoomCreateOrConnectWithoutBranchToRoomInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutBranchToRoomInput, BookRoomUncheckedCreateWithoutBranchToRoomInput>
  }

  export type BookRoomCreateManyBranchToRoomInputEnvelope = {
    data: Enumerable<BookRoomCreateManyBranchToRoomInput>
    skipDuplicates?: boolean
  }

  export type CoWorkUpsertWithoutBranchToRoomInput = {
    update: XOR<CoWorkUpdateWithoutBranchToRoomInput, CoWorkUncheckedUpdateWithoutBranchToRoomInput>
    create: XOR<CoWorkCreateWithoutBranchToRoomInput, CoWorkUncheckedCreateWithoutBranchToRoomInput>
  }

  export type CoWorkUpdateWithoutBranchToRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternal?: UserInternalUpdateOneRequiredWithoutCoWorkNestedInput
    OpenClose?: OpenCloseUpdateOneWithoutCoWorkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: IntFieldUpdateOperationsInput | number
    OpenClose?: OpenCloseUncheckedUpdateOneWithoutCoWorkNestedInput
  }

  export type RoomUpsertWithoutBranchToRoomInput = {
    update: XOR<RoomUpdateWithoutBranchToRoomInput, RoomUncheckedUpdateWithoutBranchToRoomInput>
    create: XOR<RoomCreateWithoutBranchToRoomInput, RoomUncheckedCreateWithoutBranchToRoomInput>
  }

  export type RoomUpdateWithoutBranchToRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomPrice?: RoomRateUpdateManyWithoutRoomNestedInput
    FacilityToRoom?: FacilityToRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoomPrice?: RoomRateUncheckedUpdateManyWithoutRoomNestedInput
    FacilityToRoom?: FacilityToRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type BookRoomUpsertWithWhereUniqueWithoutBranchToRoomInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutBranchToRoomInput, BookRoomUncheckedUpdateWithoutBranchToRoomInput>
    create: XOR<BookRoomCreateWithoutBranchToRoomInput, BookRoomUncheckedCreateWithoutBranchToRoomInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutBranchToRoomInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutBranchToRoomInput, BookRoomUncheckedUpdateWithoutBranchToRoomInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutBranchToRoomInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type BranchToRoomCreateWithoutBookRoomInput = {
    createAt?: Date | string
    updateAt?: Date | string
    coWork: CoWorkCreateNestedOneWithoutBranchToRoomInput
    room: RoomCreateNestedOneWithoutBranchToRoomInput
  }

  export type BranchToRoomUncheckedCreateWithoutBookRoomInput = {
    id?: number
    coWorkId: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BranchToRoomCreateOrConnectWithoutBookRoomInput = {
    where: BranchToRoomWhereUniqueInput
    create: XOR<BranchToRoomCreateWithoutBookRoomInput, BranchToRoomUncheckedCreateWithoutBookRoomInput>
  }

  export type RoomRateCreateWithoutBookRoomInput = {
    price: number
    time: string
    createAt?: Date | string
    updateAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomPriceInput
  }

  export type RoomRateUncheckedCreateWithoutBookRoomInput = {
    id?: number
    price: number
    time: string
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoomRateCreateOrConnectWithoutBookRoomInput = {
    where: RoomRateWhereUniqueInput
    create: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
  }

  export type UserExternalCreateWithoutBookRoomInput = {
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserExternalUncheckedCreateWithoutBookRoomInput = {
    id?: number
    name: string
    email: string
    tel: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserExternalCreateOrConnectWithoutBookRoomInput = {
    where: UserExternalWhereUniqueInput
    create: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
  }

  export type VertifyBookingCodeCreateWithoutBookRoomInput = {
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VertifyBookingCodeUncheckedCreateWithoutBookRoomInput = {
    id?: number
    verifyCode: string
    bookdate: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VertifyBookingCodeCreateOrConnectWithoutBookRoomInput = {
    where: VertifyBookingCodeWhereUniqueInput
    create: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
  }

  export type BranchToRoomUpsertWithoutBookRoomInput = {
    update: XOR<BranchToRoomUpdateWithoutBookRoomInput, BranchToRoomUncheckedUpdateWithoutBookRoomInput>
    create: XOR<BranchToRoomCreateWithoutBookRoomInput, BranchToRoomUncheckedCreateWithoutBookRoomInput>
  }

  export type BranchToRoomUpdateWithoutBookRoomInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput
    room?: RoomUpdateOneRequiredWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomRateUpsertWithoutBookRoomInput = {
    update: XOR<RoomRateUpdateWithoutBookRoomInput, RoomRateUncheckedUpdateWithoutBookRoomInput>
    create: XOR<RoomRateCreateWithoutBookRoomInput, RoomRateUncheckedCreateWithoutBookRoomInput>
  }

  export type RoomRateUpdateWithoutBookRoomInput = {
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomPriceNestedInput
  }

  export type RoomRateUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExternalUpsertWithoutBookRoomInput = {
    update: XOR<UserExternalUpdateWithoutBookRoomInput, UserExternalUncheckedUpdateWithoutBookRoomInput>
    create: XOR<UserExternalCreateWithoutBookRoomInput, UserExternalUncheckedCreateWithoutBookRoomInput>
  }

  export type UserExternalUpdateWithoutBookRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExternalUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeUpsertWithoutBookRoomInput = {
    update: XOR<VertifyBookingCodeUpdateWithoutBookRoomInput, VertifyBookingCodeUncheckedUpdateWithoutBookRoomInput>
    create: XOR<VertifyBookingCodeCreateWithoutBookRoomInput, VertifyBookingCodeUncheckedCreateWithoutBookRoomInput>
  }

  export type VertifyBookingCodeUpdateWithoutBookRoomInput = {
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VertifyBookingCodeUncheckedUpdateWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifyCode?: StringFieldUpdateOperationsInput | string
    bookdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateWithoutOpenCloseInput = {
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternal: UserInternalCreateNestedOneWithoutCoWorkInput
    BranchToRoom?: BranchToRoomCreateNestedManyWithoutCoWorkInput
  }

  export type CoWorkUncheckedCreateWithoutOpenCloseInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
    userInternalId: number
    BranchToRoom?: BranchToRoomUncheckedCreateNestedManyWithoutCoWorkInput
  }

  export type CoWorkCreateOrConnectWithoutOpenCloseInput = {
    where: CoWorkWhereUniqueInput
    create: XOR<CoWorkCreateWithoutOpenCloseInput, CoWorkUncheckedCreateWithoutOpenCloseInput>
  }

  export type CoWorkUpsertWithoutOpenCloseInput = {
    update: XOR<CoWorkUpdateWithoutOpenCloseInput, CoWorkUncheckedUpdateWithoutOpenCloseInput>
    create: XOR<CoWorkCreateWithoutOpenCloseInput, CoWorkUncheckedCreateWithoutOpenCloseInput>
  }

  export type CoWorkUpdateWithoutOpenCloseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternal?: UserInternalUpdateOneRequiredWithoutCoWorkNestedInput
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutOpenCloseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    userInternalId?: IntFieldUpdateOperationsInput | number
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
  }

  export type BookRoomCreateWithoutVertifyCodeInput = {
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    branchToRoom?: BranchToRoomCreateNestedOneWithoutBookRoomInput
    roomRate: RoomRateCreateNestedOneWithoutBookRoomInput
    UserExternal: UserExternalCreateNestedOneWithoutBookRoomInput
  }

  export type BookRoomUncheckedCreateWithoutVertifyCodeInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
  }

  export type BookRoomCreateOrConnectWithoutVertifyCodeInput = {
    where: BookRoomWhereUniqueInput
    create: XOR<BookRoomCreateWithoutVertifyCodeInput, BookRoomUncheckedCreateWithoutVertifyCodeInput>
  }

  export type BookRoomCreateManyVertifyCodeInputEnvelope = {
    data: Enumerable<BookRoomCreateManyVertifyCodeInput>
    skipDuplicates?: boolean
  }

  export type BookRoomUpsertWithWhereUniqueWithoutVertifyCodeInput = {
    where: BookRoomWhereUniqueInput
    update: XOR<BookRoomUpdateWithoutVertifyCodeInput, BookRoomUncheckedUpdateWithoutVertifyCodeInput>
    create: XOR<BookRoomCreateWithoutVertifyCodeInput, BookRoomUncheckedCreateWithoutVertifyCodeInput>
  }

  export type BookRoomUpdateWithWhereUniqueWithoutVertifyCodeInput = {
    where: BookRoomWhereUniqueInput
    data: XOR<BookRoomUpdateWithoutVertifyCodeInput, BookRoomUncheckedUpdateWithoutVertifyCodeInput>
  }

  export type BookRoomUpdateManyWithWhereWithoutVertifyCodeInput = {
    where: BookRoomScalarWhereInput
    data: XOR<BookRoomUpdateManyMutationInput, BookRoomUncheckedUpdateManyWithoutBookRoomInput>
  }

  export type BookRoomCreateManyUserExternalInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    vertifyBookingCodeId: number
  }

  export type BookRoomUpdateWithoutUserExternalInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchToRoom?: BranchToRoomUpdateOneWithoutBookRoomNestedInput
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutUserExternalInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchToRoomId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookRoomUncheckedUpdateManyWithoutBookRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchToRoomId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
  }

  export type BranchToRoomCreateManyCoWorkInput = {
    id?: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BranchToRoomUpdateWithoutCoWorkInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBranchToRoomNestedInput
    BookRoom?: BookRoomUpdateManyWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateManyWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoWorkCreateManyUserInternalInput = {
    id?: number
    name: string
    description: string
    location: string
    tel: number
    picture: string
  }

  export type CoWorkUpdateWithoutUserInternalInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUpdateManyWithoutCoWorkNestedInput
    OpenClose?: OpenCloseUpdateOneWithoutCoWorkNestedInput
  }

  export type CoWorkUncheckedUpdateWithoutUserInternalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    BranchToRoom?: BranchToRoomUncheckedUpdateManyWithoutCoWorkNestedInput
    OpenClose?: OpenCloseUncheckedUpdateOneWithoutCoWorkNestedInput
  }

  export type CoWorkUncheckedUpdateManyWithoutCoWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tel?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type RoomRateCreateManyRoomInput = {
    id?: number
    price: number
    time: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToRoomCreateManyRoomInput = {
    id?: number
    facilityId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BranchToRoomCreateManyRoomInput = {
    id?: number
    coWorkId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoomRateUpdateWithoutRoomInput = {
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUpdateManyWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutRoomRateNestedInput
  }

  export type RoomRateUncheckedUpdateManyWithoutRoomPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToRoomUpdateWithoutRoomInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facilities?: FacilityUpdateOneRequiredWithoutFacilityToRoomNestedInput
  }

  export type FacilityToRoomUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityToRoomUncheckedUpdateManyWithoutFacilityToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchToRoomUpdateWithoutRoomInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coWork?: CoWorkUpdateOneRequiredWithoutBranchToRoomNestedInput
    BookRoom?: BookRoomUpdateManyWithoutBranchToRoomNestedInput
  }

  export type BranchToRoomUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    coWorkId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BookRoom?: BookRoomUncheckedUpdateManyWithoutBranchToRoomNestedInput
  }

  export type BookRoomCreateManyRoomRateInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
  }

  export type BookRoomUpdateWithoutRoomRateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchToRoom?: BranchToRoomUpdateOneWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutRoomRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchToRoomId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityToRoomCreateManyFacilitiesInput = {
    id?: number
    roomId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type FacilityToRoomUpdateWithoutFacilitiesInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutFacilityToRoomNestedInput
  }

  export type FacilityToRoomUncheckedUpdateWithoutFacilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookRoomCreateManyBranchToRoomInput = {
    id?: number
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
    vertifyBookingCodeId: number
  }

  export type BookRoomUpdateWithoutBranchToRoomInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
    vertifyCode?: VertifyBookingCodeUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutBranchToRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
    vertifyBookingCodeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookRoomCreateManyVertifyCodeInput = {
    id?: number
    branchToRoomId?: number | null
    startTime: Date | string
    roomRateId: number
    status: string
    createAt?: Date | string
    updateAt?: Date | string
    userExternalId: number
  }

  export type BookRoomUpdateWithoutVertifyCodeInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchToRoom?: BranchToRoomUpdateOneWithoutBookRoomNestedInput
    roomRate?: RoomRateUpdateOneRequiredWithoutBookRoomNestedInput
    UserExternal?: UserExternalUpdateOneRequiredWithoutBookRoomNestedInput
  }

  export type BookRoomUncheckedUpdateWithoutVertifyCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchToRoomId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomRateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExternalId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}