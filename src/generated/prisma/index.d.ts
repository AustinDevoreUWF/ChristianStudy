
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Reply
 * 
 */
export type Reply = $Result.DefaultSelection<Prisma.$ReplyPayload>
/**
 * Model Discussion
 * 
 */
export type Discussion = $Result.DefaultSelection<Prisma.$DiscussionPayload>
/**
 * Model Weekly
 * 
 */
export type Weekly = $Result.DefaultSelection<Prisma.$WeeklyPayload>
/**
 * Model Essay
 * 
 */
export type Essay = $Result.DefaultSelection<Prisma.$EssayPayload>
/**
 * Model ScriptureCitation
 * 
 */
export type ScriptureCitation = $Result.DefaultSelection<Prisma.$ScriptureCitationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussion`: Exposes CRUD operations for the **Discussion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussion.findMany()
    * ```
    */
  get discussion(): Prisma.DiscussionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weekly`: Exposes CRUD operations for the **Weekly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeklies
    * const weeklies = await prisma.weekly.findMany()
    * ```
    */
  get weekly(): Prisma.WeeklyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.essay`: Exposes CRUD operations for the **Essay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Essays
    * const essays = await prisma.essay.findMany()
    * ```
    */
  get essay(): Prisma.EssayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scriptureCitation`: Exposes CRUD operations for the **ScriptureCitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScriptureCitations
    * const scriptureCitations = await prisma.scriptureCitation.findMany()
    * ```
    */
  get scriptureCitation(): Prisma.ScriptureCitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserProfile: 'UserProfile',
    User: 'User',
    Reply: 'Reply',
    Discussion: 'Discussion',
    Weekly: 'Weekly',
    Essay: 'Essay',
    ScriptureCitation: 'ScriptureCitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userProfile" | "user" | "reply" | "discussion" | "weekly" | "essay" | "scriptureCitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Reply: {
        payload: Prisma.$ReplyPayload<ExtArgs>
        fields: Prisma.ReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findFirst: {
            args: Prisma.ReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findMany: {
            args: Prisma.ReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          create: {
            args: Prisma.ReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          createMany: {
            args: Prisma.ReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          delete: {
            args: Prisma.ReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          update: {
            args: Prisma.ReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          deleteMany: {
            args: Prisma.ReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          upsert: {
            args: Prisma.ReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          aggregate: {
            args: Prisma.ReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReply>
          }
          groupBy: {
            args: Prisma.ReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ReplyCountAggregateOutputType> | number
          }
        }
      }
      Discussion: {
        payload: Prisma.$DiscussionPayload<ExtArgs>
        fields: Prisma.DiscussionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findFirst: {
            args: Prisma.DiscussionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findMany: {
            args: Prisma.DiscussionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          create: {
            args: Prisma.DiscussionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          createMany: {
            args: Prisma.DiscussionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          delete: {
            args: Prisma.DiscussionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          update: {
            args: Prisma.DiscussionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          upsert: {
            args: Prisma.DiscussionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          aggregate: {
            args: Prisma.DiscussionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussion>
          }
          groupBy: {
            args: Prisma.DiscussionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionCountAggregateOutputType> | number
          }
        }
      }
      Weekly: {
        payload: Prisma.$WeeklyPayload<ExtArgs>
        fields: Prisma.WeeklyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>
          }
          findFirst: {
            args: Prisma.WeeklyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>
          }
          findMany: {
            args: Prisma.WeeklyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>[]
          }
          create: {
            args: Prisma.WeeklyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>
          }
          createMany: {
            args: Prisma.WeeklyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>[]
          }
          delete: {
            args: Prisma.WeeklyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>
          }
          update: {
            args: Prisma.WeeklyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyPayload>
          }
          aggregate: {
            args: Prisma.WeeklyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeekly>
          }
          groupBy: {
            args: Prisma.WeeklyGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyCountAggregateOutputType> | number
          }
        }
      }
      Essay: {
        payload: Prisma.$EssayPayload<ExtArgs>
        fields: Prisma.EssayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EssayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EssayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          findFirst: {
            args: Prisma.EssayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EssayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          findMany: {
            args: Prisma.EssayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>[]
          }
          create: {
            args: Prisma.EssayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          createMany: {
            args: Prisma.EssayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EssayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>[]
          }
          delete: {
            args: Prisma.EssayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          update: {
            args: Prisma.EssayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          deleteMany: {
            args: Prisma.EssayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EssayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EssayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>[]
          }
          upsert: {
            args: Prisma.EssayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayPayload>
          }
          aggregate: {
            args: Prisma.EssayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEssay>
          }
          groupBy: {
            args: Prisma.EssayGroupByArgs<ExtArgs>
            result: $Utils.Optional<EssayGroupByOutputType>[]
          }
          count: {
            args: Prisma.EssayCountArgs<ExtArgs>
            result: $Utils.Optional<EssayCountAggregateOutputType> | number
          }
        }
      }
      ScriptureCitation: {
        payload: Prisma.$ScriptureCitationPayload<ExtArgs>
        fields: Prisma.ScriptureCitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScriptureCitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScriptureCitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>
          }
          findFirst: {
            args: Prisma.ScriptureCitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScriptureCitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>
          }
          findMany: {
            args: Prisma.ScriptureCitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>[]
          }
          create: {
            args: Prisma.ScriptureCitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>
          }
          createMany: {
            args: Prisma.ScriptureCitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScriptureCitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>[]
          }
          delete: {
            args: Prisma.ScriptureCitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>
          }
          update: {
            args: Prisma.ScriptureCitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>
          }
          deleteMany: {
            args: Prisma.ScriptureCitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScriptureCitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScriptureCitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>[]
          }
          upsert: {
            args: Prisma.ScriptureCitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScriptureCitationPayload>
          }
          aggregate: {
            args: Prisma.ScriptureCitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScriptureCitation>
          }
          groupBy: {
            args: Prisma.ScriptureCitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScriptureCitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScriptureCitationCountArgs<ExtArgs>
            result: $Utils.Optional<ScriptureCitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    userProfile?: UserProfileOmit
    user?: UserOmit
    reply?: ReplyOmit
    discussion?: DiscussionOmit
    weekly?: WeeklyOmit
    essay?: EssayOmit
    scriptureCitation?: ScriptureCitationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    discussions: number
    replies: number
    essays: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discussions?: boolean | UserCountOutputTypeCountDiscussionsArgs
    replies?: boolean | UserCountOutputTypeCountRepliesArgs
    essays?: boolean | UserCountOutputTypeCountEssaysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiscussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEssaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EssayWhereInput
  }


  /**
   * Count Type ReplyCountOutputType
   */

  export type ReplyCountOutputType = {
    children: number
  }

  export type ReplyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ReplyCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplyCountOutputType
     */
    select?: ReplyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * Count Type DiscussionCountOutputType
   */

  export type DiscussionCountOutputType = {
    replies: number
  }

  export type DiscussionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | DiscussionCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * DiscussionCountOutputType without action
   */
  export type DiscussionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionCountOutputType
     */
    select?: DiscussionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscussionCountOutputType without action
   */
  export type DiscussionCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * Count Type WeeklyCountOutputType
   */

  export type WeeklyCountOutputType = {
    citations: number
    featuredEssays: number
  }

  export type WeeklyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citations?: boolean | WeeklyCountOutputTypeCountCitationsArgs
    featuredEssays?: boolean | WeeklyCountOutputTypeCountFeaturedEssaysArgs
  }

  // Custom InputTypes
  /**
   * WeeklyCountOutputType without action
   */
  export type WeeklyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyCountOutputType
     */
    select?: WeeklyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklyCountOutputType without action
   */
  export type WeeklyCountOutputTypeCountCitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptureCitationWhereInput
  }

  /**
   * WeeklyCountOutputType without action
   */
  export type WeeklyCountOutputTypeCountFeaturedEssaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EssayWhereInput
  }


  /**
   * Count Type EssayCountOutputType
   */

  export type EssayCountOutputType = {
    featuredIn: number
  }

  export type EssayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featuredIn?: boolean | EssayCountOutputTypeCountFeaturedInArgs
  }

  // Custom InputTypes
  /**
   * EssayCountOutputType without action
   */
  export type EssayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayCountOutputType
     */
    select?: EssayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EssayCountOutputType without action
   */
  export type EssayCountOutputTypeCountFeaturedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    userId: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: number | null
    profilePic: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: number | null
    profilePic: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    profilePic: number
    tags: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    userId?: true
  }

  export type UserProfileSumAggregateInputType = {
    userId?: true
  }

  export type UserProfileMinAggregateInputType = {
    userId?: true
    profilePic?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    profilePic?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    profilePic?: true
    tags?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: number
    profilePic: string | null
    tags: string[]
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    profilePic?: boolean
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    profilePic?: boolean
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    profilePic?: boolean
    tags?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    profilePic?: boolean
    tags?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "profilePic" | "tags", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      profilePic: string | null
      tags: string[]
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'Int'>
    readonly profilePic: FieldRef<"UserProfile", 'String'>
    readonly tags: FieldRef<"UserProfile", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userName: string | null
    userEmail: string | null
    passwordHash: string | null
    createdAt: Date | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    userEmail: string | null
    passwordHash: string | null
    createdAt: Date | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    userEmail: number
    passwordHash: number
    createdAt: number
    isAdmin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    userEmail?: true
    passwordHash?: true
    createdAt?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    userEmail?: true
    passwordHash?: true
    createdAt?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    userEmail?: true
    passwordHash?: true
    createdAt?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt: Date
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userEmail?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    isAdmin?: boolean
    discussions?: boolean | User$discussionsArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    essays?: boolean | User$essaysArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userEmail?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userEmail?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    userEmail?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    isAdmin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "userEmail" | "passwordHash" | "createdAt" | "isAdmin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discussions?: boolean | User$discussionsArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    essays?: boolean | User$essaysArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      discussions: Prisma.$DiscussionPayload<ExtArgs>[]
      replies: Prisma.$ReplyPayload<ExtArgs>[]
      essays: Prisma.$EssayPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userName: string
      userEmail: string
      passwordHash: string
      createdAt: Date
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discussions<T extends User$discussionsArgs<ExtArgs> = {}>(args?: Subset<T, User$discussionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replies<T extends User$repliesArgs<ExtArgs> = {}>(args?: Subset<T, User$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    essays<T extends User$essaysArgs<ExtArgs> = {}>(args?: Subset<T, User$essaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly userEmail: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.discussions
   */
  export type User$discussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * User.replies
   */
  export type User$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * User.essays
   */
  export type User$essaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    where?: EssayWhereInput
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    cursor?: EssayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Reply
   */

  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    discussionId: number | null
    parentId: number | null
  }

  export type ReplySumAggregateOutputType = {
    id: number | null
    authorId: number | null
    discussionId: number | null
    parentId: number | null
  }

  export type ReplyMinAggregateOutputType = {
    id: number | null
    text: string | null
    title: string | null
    authorId: number | null
    discussionId: number | null
    createdAt: Date | null
    parentId: number | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    text: string | null
    title: string | null
    authorId: number | null
    discussionId: number | null
    createdAt: Date | null
    parentId: number | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    text: number
    title: number
    authorId: number
    discussionId: number
    createdAt: number
    parentId: number
    _all: number
  }


  export type ReplyAvgAggregateInputType = {
    id?: true
    authorId?: true
    discussionId?: true
    parentId?: true
  }

  export type ReplySumAggregateInputType = {
    id?: true
    authorId?: true
    discussionId?: true
    parentId?: true
  }

  export type ReplyMinAggregateInputType = {
    id?: true
    text?: true
    title?: true
    authorId?: true
    discussionId?: true
    createdAt?: true
    parentId?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    text?: true
    title?: true
    authorId?: true
    discussionId?: true
    createdAt?: true
    parentId?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    text?: true
    title?: true
    authorId?: true
    discussionId?: true
    createdAt?: true
    parentId?: true
    _all?: true
  }

  export type ReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithAggregationInput | ReplyOrderByWithAggregationInput[]
    by: ReplyScalarFieldEnum[] | ReplyScalarFieldEnum
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _avg?: ReplyAvgAggregateInputType
    _sum?: ReplySumAggregateInputType
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }

  export type ReplyGroupByOutputType = {
    id: number
    text: string
    title: string
    authorId: number
    discussionId: number
    createdAt: Date
    parentId: number | null
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    title?: boolean
    authorId?: boolean
    discussionId?: boolean
    createdAt?: boolean
    parentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    discussion?: boolean | DiscussionDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
    children?: boolean | Reply$childrenArgs<ExtArgs>
    _count?: boolean | ReplyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    title?: boolean
    authorId?: boolean
    discussionId?: boolean
    createdAt?: boolean
    parentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    discussion?: boolean | DiscussionDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    title?: boolean
    authorId?: boolean
    discussionId?: boolean
    createdAt?: boolean
    parentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    discussion?: boolean | DiscussionDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectScalar = {
    id?: boolean
    text?: boolean
    title?: boolean
    authorId?: boolean
    discussionId?: boolean
    createdAt?: boolean
    parentId?: boolean
  }

  export type ReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "title" | "authorId" | "discussionId" | "createdAt" | "parentId", ExtArgs["result"]["reply"]>
  export type ReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    discussion?: boolean | DiscussionDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
    children?: boolean | Reply$childrenArgs<ExtArgs>
    _count?: boolean | ReplyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    discussion?: boolean | DiscussionDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }
  export type ReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    discussion?: boolean | DiscussionDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }

  export type $ReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reply"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      discussion: Prisma.$DiscussionPayload<ExtArgs>
      parent: Prisma.$ReplyPayload<ExtArgs> | null
      children: Prisma.$ReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      title: string
      authorId: number
      discussionId: number
      createdAt: Date
      parentId: number | null
    }, ExtArgs["result"]["reply"]>
    composites: {}
  }

  type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = $Result.GetResult<Prisma.$ReplyPayload, S>

  type ReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reply'], meta: { name: 'Reply' } }
    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplyFindUniqueArgs>(args: SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplyFindFirstArgs>(args?: SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replyWithIdOnly = await prisma.reply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplyFindManyArgs>(args?: SelectSubset<T, ReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
     */
    create<T extends ReplyCreateArgs>(args: SelectSubset<T, ReplyCreateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Replies.
     * @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplyCreateManyArgs>(args?: SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Replies and returns the data saved in the database.
     * @param {ReplyCreateManyAndReturnArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
     */
    delete<T extends ReplyDeleteArgs>(args: SelectSubset<T, ReplyDeleteArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplyUpdateArgs>(args: SelectSubset<T, ReplyUpdateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplyDeleteManyArgs>(args?: SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplyUpdateManyArgs>(args: SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies and returns the data updated in the database.
     * @param {ReplyUpdateManyAndReturnArgs} args - Arguments to update many Replies.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
     */
    upsert<T extends ReplyUpsertArgs>(args: SelectSubset<T, ReplyUpsertArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
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
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reply model
   */
  readonly fields: ReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discussion<T extends DiscussionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscussionDefaultArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Reply$parentArgs<ExtArgs> = {}>(args?: Subset<T, Reply$parentArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Reply$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Reply$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reply model
   */
  interface ReplyFieldRefs {
    readonly id: FieldRef<"Reply", 'Int'>
    readonly text: FieldRef<"Reply", 'String'>
    readonly title: FieldRef<"Reply", 'String'>
    readonly authorId: FieldRef<"Reply", 'Int'>
    readonly discussionId: FieldRef<"Reply", 'Int'>
    readonly createdAt: FieldRef<"Reply", 'DateTime'>
    readonly parentId: FieldRef<"Reply", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reply findUnique
   */
  export type ReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findFirst
   */
  export type ReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply create
   */
  export type ReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }

  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reply createManyAndReturn
   */
  export type ReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply update
   */
  export type ReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
  }

  /**
   * Reply updateManyAndReturn
   */
  export type ReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }

  /**
   * Reply delete
   */
  export type ReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to delete.
     */
    limit?: number
  }

  /**
   * Reply.parent
   */
  export type Reply$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
  }

  /**
   * Reply.children
   */
  export type Reply$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply without action
   */
  export type ReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
  }


  /**
   * Model Discussion
   */

  export type AggregateDiscussion = {
    _count: DiscussionCountAggregateOutputType | null
    _avg: DiscussionAvgAggregateOutputType | null
    _sum: DiscussionSumAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  export type DiscussionAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type DiscussionSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type DiscussionMinAggregateOutputType = {
    id: number | null
    text: string | null
    authorId: number | null
    title: string | null
    createdAt: Date | null
  }

  export type DiscussionMaxAggregateOutputType = {
    id: number | null
    text: string | null
    authorId: number | null
    title: string | null
    createdAt: Date | null
  }

  export type DiscussionCountAggregateOutputType = {
    id: number
    text: number
    authorId: number
    title: number
    createdAt: number
    _all: number
  }


  export type DiscussionAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type DiscussionSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type DiscussionMinAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    title?: true
    createdAt?: true
  }

  export type DiscussionMaxAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    title?: true
    createdAt?: true
  }

  export type DiscussionCountAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type DiscussionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussion to aggregate.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discussions
    **/
    _count?: true | DiscussionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscussionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscussionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionMaxAggregateInputType
  }

  export type GetDiscussionAggregateType<T extends DiscussionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussion[P]>
      : GetScalarType<T[P], AggregateDiscussion[P]>
  }




  export type DiscussionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithAggregationInput | DiscussionOrderByWithAggregationInput[]
    by: DiscussionScalarFieldEnum[] | DiscussionScalarFieldEnum
    having?: DiscussionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionCountAggregateInputType | true
    _avg?: DiscussionAvgAggregateInputType
    _sum?: DiscussionSumAggregateInputType
    _min?: DiscussionMinAggregateInputType
    _max?: DiscussionMaxAggregateInputType
  }

  export type DiscussionGroupByOutputType = {
    id: number
    text: string
    authorId: number
    title: string
    createdAt: Date
    _count: DiscussionCountAggregateOutputType | null
    _avg: DiscussionAvgAggregateOutputType | null
    _sum: DiscussionSumAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  type GetDiscussionGroupByPayload<T extends DiscussionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    title?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Discussion$repliesArgs<ExtArgs>
    _count?: boolean | DiscussionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    title?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    title?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectScalar = {
    id?: boolean
    text?: boolean
    authorId?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type DiscussionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "authorId" | "title" | "createdAt", ExtArgs["result"]["discussion"]>
  export type DiscussionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Discussion$repliesArgs<ExtArgs>
    _count?: boolean | DiscussionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiscussionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discussion"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      replies: Prisma.$ReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      authorId: number
      title: string
      createdAt: Date
    }, ExtArgs["result"]["discussion"]>
    composites: {}
  }

  type DiscussionGetPayload<S extends boolean | null | undefined | DiscussionDefaultArgs> = $Result.GetResult<Prisma.$DiscussionPayload, S>

  type DiscussionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionCountAggregateInputType | true
    }

  export interface DiscussionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discussion'], meta: { name: 'Discussion' } }
    /**
     * Find zero or one Discussion that matches the filter.
     * @param {DiscussionFindUniqueArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionFindUniqueArgs>(args: SelectSubset<T, DiscussionFindUniqueArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discussion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionFindUniqueOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionFindFirstArgs>(args?: SelectSubset<T, DiscussionFindFirstArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussion.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionWithIdOnly = await prisma.discussion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionFindManyArgs>(args?: SelectSubset<T, DiscussionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discussion.
     * @param {DiscussionCreateArgs} args - Arguments to create a Discussion.
     * @example
     * // Create one Discussion
     * const Discussion = await prisma.discussion.create({
     *   data: {
     *     // ... data to create a Discussion
     *   }
     * })
     * 
     */
    create<T extends DiscussionCreateArgs>(args: SelectSubset<T, DiscussionCreateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discussions.
     * @param {DiscussionCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionCreateManyArgs>(args?: SelectSubset<T, DiscussionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discussions and returns the data saved in the database.
     * @param {DiscussionCreateManyAndReturnArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discussions and only return the `id`
     * const discussionWithIdOnly = await prisma.discussion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discussion.
     * @param {DiscussionDeleteArgs} args - Arguments to delete one Discussion.
     * @example
     * // Delete one Discussion
     * const Discussion = await prisma.discussion.delete({
     *   where: {
     *     // ... filter to delete one Discussion
     *   }
     * })
     * 
     */
    delete<T extends DiscussionDeleteArgs>(args: SelectSubset<T, DiscussionDeleteArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discussion.
     * @param {DiscussionUpdateArgs} args - Arguments to update one Discussion.
     * @example
     * // Update one Discussion
     * const discussion = await prisma.discussion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionUpdateArgs>(args: SelectSubset<T, DiscussionUpdateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionDeleteManyArgs>(args?: SelectSubset<T, DiscussionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionUpdateManyArgs>(args: SelectSubset<T, DiscussionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions and returns the data updated in the database.
     * @param {DiscussionUpdateManyAndReturnArgs} args - Arguments to update many Discussions.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discussions and only return the `id`
     * const discussionWithIdOnly = await prisma.discussion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscussionUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discussion.
     * @param {DiscussionUpsertArgs} args - Arguments to update or create a Discussion.
     * @example
     * // Update or create a Discussion
     * const discussion = await prisma.discussion.upsert({
     *   create: {
     *     // ... data to create a Discussion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussion we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionUpsertArgs>(args: SelectSubset<T, DiscussionUpsertArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussion.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends DiscussionCountArgs>(
      args?: Subset<T, DiscussionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionAggregateArgs>(args: Subset<T, DiscussionAggregateArgs>): Prisma.PrismaPromise<GetDiscussionAggregateType<T>>

    /**
     * Group by Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionGroupByArgs} args - Group by arguments.
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
      T extends DiscussionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DiscussionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discussion model
   */
  readonly fields: DiscussionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    replies<T extends Discussion$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Discussion$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discussion model
   */
  interface DiscussionFieldRefs {
    readonly id: FieldRef<"Discussion", 'Int'>
    readonly text: FieldRef<"Discussion", 'String'>
    readonly authorId: FieldRef<"Discussion", 'Int'>
    readonly title: FieldRef<"Discussion", 'String'>
    readonly createdAt: FieldRef<"Discussion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discussion findUnique
   */
  export type DiscussionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findUniqueOrThrow
   */
  export type DiscussionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findFirst
   */
  export type DiscussionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findFirstOrThrow
   */
  export type DiscussionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findMany
   */
  export type DiscussionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion create
   */
  export type DiscussionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to create a Discussion.
     */
    data: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
  }

  /**
   * Discussion createMany
   */
  export type DiscussionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discussion createManyAndReturn
   */
  export type DiscussionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion update
   */
  export type DiscussionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to update a Discussion.
     */
    data: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
    /**
     * Choose, which Discussion to update.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion updateMany
   */
  export type DiscussionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
  }

  /**
   * Discussion updateManyAndReturn
   */
  export type DiscussionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion upsert
   */
  export type DiscussionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The filter to search for the Discussion to update in case it exists.
     */
    where: DiscussionWhereUniqueInput
    /**
     * In case the Discussion found by the `where` argument doesn't exist, create a new Discussion with this data.
     */
    create: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
    /**
     * In case the Discussion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
  }

  /**
   * Discussion delete
   */
  export type DiscussionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter which Discussion to delete.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion deleteMany
   */
  export type DiscussionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to delete.
     */
    limit?: number
  }

  /**
   * Discussion.replies
   */
  export type Discussion$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Discussion without action
   */
  export type DiscussionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
  }


  /**
   * Model Weekly
   */

  export type AggregateWeekly = {
    _count: WeeklyCountAggregateOutputType | null
    _avg: WeeklyAvgAggregateOutputType | null
    _sum: WeeklySumAggregateOutputType | null
    _min: WeeklyMinAggregateOutputType | null
    _max: WeeklyMaxAggregateOutputType | null
  }

  export type WeeklyAvgAggregateOutputType = {
    id: number | null
  }

  export type WeeklySumAggregateOutputType = {
    id: number | null
  }

  export type WeeklyMinAggregateOutputType = {
    id: number | null
    saintName: string | null
    saintDescription: string | null
    saintFeastDay: string | null
    featuredScriptureRef: string | null
    featuredScriptureSummary: string | null
    discussionTitle: string | null
    discussionDescription: string | null
    discussionImage: string | null
    discussionCloses: string | null
  }

  export type WeeklyMaxAggregateOutputType = {
    id: number | null
    saintName: string | null
    saintDescription: string | null
    saintFeastDay: string | null
    featuredScriptureRef: string | null
    featuredScriptureSummary: string | null
    discussionTitle: string | null
    discussionDescription: string | null
    discussionImage: string | null
    discussionCloses: string | null
  }

  export type WeeklyCountAggregateOutputType = {
    id: number
    saintName: number
    saintDescription: number
    saintFeastDay: number
    featuredScriptureRef: number
    featuredScriptureSummary: number
    discussionTitle: number
    discussionDescription: number
    discussionImage: number
    discussionCloses: number
    _all: number
  }


  export type WeeklyAvgAggregateInputType = {
    id?: true
  }

  export type WeeklySumAggregateInputType = {
    id?: true
  }

  export type WeeklyMinAggregateInputType = {
    id?: true
    saintName?: true
    saintDescription?: true
    saintFeastDay?: true
    featuredScriptureRef?: true
    featuredScriptureSummary?: true
    discussionTitle?: true
    discussionDescription?: true
    discussionImage?: true
    discussionCloses?: true
  }

  export type WeeklyMaxAggregateInputType = {
    id?: true
    saintName?: true
    saintDescription?: true
    saintFeastDay?: true
    featuredScriptureRef?: true
    featuredScriptureSummary?: true
    discussionTitle?: true
    discussionDescription?: true
    discussionImage?: true
    discussionCloses?: true
  }

  export type WeeklyCountAggregateInputType = {
    id?: true
    saintName?: true
    saintDescription?: true
    saintFeastDay?: true
    featuredScriptureRef?: true
    featuredScriptureSummary?: true
    discussionTitle?: true
    discussionDescription?: true
    discussionImage?: true
    discussionCloses?: true
    _all?: true
  }

  export type WeeklyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weekly to aggregate.
     */
    where?: WeeklyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeeklyOrderByWithRelationInput | WeeklyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weeklies
    **/
    _count?: true | WeeklyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyMaxAggregateInputType
  }

  export type GetWeeklyAggregateType<T extends WeeklyAggregateArgs> = {
        [P in keyof T & keyof AggregateWeekly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeekly[P]>
      : GetScalarType<T[P], AggregateWeekly[P]>
  }




  export type WeeklyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyWhereInput
    orderBy?: WeeklyOrderByWithAggregationInput | WeeklyOrderByWithAggregationInput[]
    by: WeeklyScalarFieldEnum[] | WeeklyScalarFieldEnum
    having?: WeeklyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyCountAggregateInputType | true
    _avg?: WeeklyAvgAggregateInputType
    _sum?: WeeklySumAggregateInputType
    _min?: WeeklyMinAggregateInputType
    _max?: WeeklyMaxAggregateInputType
  }

  export type WeeklyGroupByOutputType = {
    id: number
    saintName: string
    saintDescription: string
    saintFeastDay: string
    featuredScriptureRef: string
    featuredScriptureSummary: string
    discussionTitle: string
    discussionDescription: string
    discussionImage: string
    discussionCloses: string
    _count: WeeklyCountAggregateOutputType | null
    _avg: WeeklyAvgAggregateOutputType | null
    _sum: WeeklySumAggregateOutputType | null
    _min: WeeklyMinAggregateOutputType | null
    _max: WeeklyMaxAggregateOutputType | null
  }

  type GetWeeklyGroupByPayload<T extends WeeklyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyGroupByOutputType[P]>
        }
      >
    >


  export type WeeklySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saintName?: boolean
    saintDescription?: boolean
    saintFeastDay?: boolean
    featuredScriptureRef?: boolean
    featuredScriptureSummary?: boolean
    discussionTitle?: boolean
    discussionDescription?: boolean
    discussionImage?: boolean
    discussionCloses?: boolean
    citations?: boolean | Weekly$citationsArgs<ExtArgs>
    featuredEssays?: boolean | Weekly$featuredEssaysArgs<ExtArgs>
    _count?: boolean | WeeklyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekly"]>

  export type WeeklySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saintName?: boolean
    saintDescription?: boolean
    saintFeastDay?: boolean
    featuredScriptureRef?: boolean
    featuredScriptureSummary?: boolean
    discussionTitle?: boolean
    discussionDescription?: boolean
    discussionImage?: boolean
    discussionCloses?: boolean
  }, ExtArgs["result"]["weekly"]>

  export type WeeklySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saintName?: boolean
    saintDescription?: boolean
    saintFeastDay?: boolean
    featuredScriptureRef?: boolean
    featuredScriptureSummary?: boolean
    discussionTitle?: boolean
    discussionDescription?: boolean
    discussionImage?: boolean
    discussionCloses?: boolean
  }, ExtArgs["result"]["weekly"]>

  export type WeeklySelectScalar = {
    id?: boolean
    saintName?: boolean
    saintDescription?: boolean
    saintFeastDay?: boolean
    featuredScriptureRef?: boolean
    featuredScriptureSummary?: boolean
    discussionTitle?: boolean
    discussionDescription?: boolean
    discussionImage?: boolean
    discussionCloses?: boolean
  }

  export type WeeklyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saintName" | "saintDescription" | "saintFeastDay" | "featuredScriptureRef" | "featuredScriptureSummary" | "discussionTitle" | "discussionDescription" | "discussionImage" | "discussionCloses", ExtArgs["result"]["weekly"]>
  export type WeeklyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citations?: boolean | Weekly$citationsArgs<ExtArgs>
    featuredEssays?: boolean | Weekly$featuredEssaysArgs<ExtArgs>
    _count?: boolean | WeeklyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeeklyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeeklyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weekly"
    objects: {
      citations: Prisma.$ScriptureCitationPayload<ExtArgs>[]
      featuredEssays: Prisma.$EssayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saintName: string
      saintDescription: string
      saintFeastDay: string
      featuredScriptureRef: string
      featuredScriptureSummary: string
      discussionTitle: string
      discussionDescription: string
      discussionImage: string
      discussionCloses: string
    }, ExtArgs["result"]["weekly"]>
    composites: {}
  }

  type WeeklyGetPayload<S extends boolean | null | undefined | WeeklyDefaultArgs> = $Result.GetResult<Prisma.$WeeklyPayload, S>

  type WeeklyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyCountAggregateInputType | true
    }

  export interface WeeklyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weekly'], meta: { name: 'Weekly' } }
    /**
     * Find zero or one Weekly that matches the filter.
     * @param {WeeklyFindUniqueArgs} args - Arguments to find a Weekly
     * @example
     * // Get one Weekly
     * const weekly = await prisma.weekly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyFindUniqueArgs>(args: SelectSubset<T, WeeklyFindUniqueArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weekly that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyFindUniqueOrThrowArgs} args - Arguments to find a Weekly
     * @example
     * // Get one Weekly
     * const weekly = await prisma.weekly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weekly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyFindFirstArgs} args - Arguments to find a Weekly
     * @example
     * // Get one Weekly
     * const weekly = await prisma.weekly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyFindFirstArgs>(args?: SelectSubset<T, WeeklyFindFirstArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weekly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyFindFirstOrThrowArgs} args - Arguments to find a Weekly
     * @example
     * // Get one Weekly
     * const weekly = await prisma.weekly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weeklies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeklies
     * const weeklies = await prisma.weekly.findMany()
     * 
     * // Get first 10 Weeklies
     * const weeklies = await prisma.weekly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyWithIdOnly = await prisma.weekly.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyFindManyArgs>(args?: SelectSubset<T, WeeklyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weekly.
     * @param {WeeklyCreateArgs} args - Arguments to create a Weekly.
     * @example
     * // Create one Weekly
     * const Weekly = await prisma.weekly.create({
     *   data: {
     *     // ... data to create a Weekly
     *   }
     * })
     * 
     */
    create<T extends WeeklyCreateArgs>(args: SelectSubset<T, WeeklyCreateArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weeklies.
     * @param {WeeklyCreateManyArgs} args - Arguments to create many Weeklies.
     * @example
     * // Create many Weeklies
     * const weekly = await prisma.weekly.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyCreateManyArgs>(args?: SelectSubset<T, WeeklyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weeklies and returns the data saved in the database.
     * @param {WeeklyCreateManyAndReturnArgs} args - Arguments to create many Weeklies.
     * @example
     * // Create many Weeklies
     * const weekly = await prisma.weekly.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weeklies and only return the `id`
     * const weeklyWithIdOnly = await prisma.weekly.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weekly.
     * @param {WeeklyDeleteArgs} args - Arguments to delete one Weekly.
     * @example
     * // Delete one Weekly
     * const Weekly = await prisma.weekly.delete({
     *   where: {
     *     // ... filter to delete one Weekly
     *   }
     * })
     * 
     */
    delete<T extends WeeklyDeleteArgs>(args: SelectSubset<T, WeeklyDeleteArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weekly.
     * @param {WeeklyUpdateArgs} args - Arguments to update one Weekly.
     * @example
     * // Update one Weekly
     * const weekly = await prisma.weekly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyUpdateArgs>(args: SelectSubset<T, WeeklyUpdateArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weeklies.
     * @param {WeeklyDeleteManyArgs} args - Arguments to filter Weeklies to delete.
     * @example
     * // Delete a few Weeklies
     * const { count } = await prisma.weekly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyDeleteManyArgs>(args?: SelectSubset<T, WeeklyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeklies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeklies
     * const weekly = await prisma.weekly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyUpdateManyArgs>(args: SelectSubset<T, WeeklyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeklies and returns the data updated in the database.
     * @param {WeeklyUpdateManyAndReturnArgs} args - Arguments to update many Weeklies.
     * @example
     * // Update many Weeklies
     * const weekly = await prisma.weekly.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weeklies and only return the `id`
     * const weeklyWithIdOnly = await prisma.weekly.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklyUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weekly.
     * @param {WeeklyUpsertArgs} args - Arguments to update or create a Weekly.
     * @example
     * // Update or create a Weekly
     * const weekly = await prisma.weekly.upsert({
     *   create: {
     *     // ... data to create a Weekly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weekly we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyUpsertArgs>(args: SelectSubset<T, WeeklyUpsertArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weeklies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyCountArgs} args - Arguments to filter Weeklies to count.
     * @example
     * // Count the number of Weeklies
     * const count = await prisma.weekly.count({
     *   where: {
     *     // ... the filter for the Weeklies we want to count
     *   }
     * })
    **/
    count<T extends WeeklyCountArgs>(
      args?: Subset<T, WeeklyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weekly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyAggregateArgs>(args: Subset<T, WeeklyAggregateArgs>): Prisma.PrismaPromise<GetWeeklyAggregateType<T>>

    /**
     * Group by Weekly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyGroupByArgs} args - Group by arguments.
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
      T extends WeeklyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WeeklyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weekly model
   */
  readonly fields: WeeklyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weekly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    citations<T extends Weekly$citationsArgs<ExtArgs> = {}>(args?: Subset<T, Weekly$citationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featuredEssays<T extends Weekly$featuredEssaysArgs<ExtArgs> = {}>(args?: Subset<T, Weekly$featuredEssaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Weekly model
   */
  interface WeeklyFieldRefs {
    readonly id: FieldRef<"Weekly", 'Int'>
    readonly saintName: FieldRef<"Weekly", 'String'>
    readonly saintDescription: FieldRef<"Weekly", 'String'>
    readonly saintFeastDay: FieldRef<"Weekly", 'String'>
    readonly featuredScriptureRef: FieldRef<"Weekly", 'String'>
    readonly featuredScriptureSummary: FieldRef<"Weekly", 'String'>
    readonly discussionTitle: FieldRef<"Weekly", 'String'>
    readonly discussionDescription: FieldRef<"Weekly", 'String'>
    readonly discussionImage: FieldRef<"Weekly", 'String'>
    readonly discussionCloses: FieldRef<"Weekly", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Weekly findUnique
   */
  export type WeeklyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * Filter, which Weekly to fetch.
     */
    where: WeeklyWhereUniqueInput
  }

  /**
   * Weekly findUniqueOrThrow
   */
  export type WeeklyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * Filter, which Weekly to fetch.
     */
    where: WeeklyWhereUniqueInput
  }

  /**
   * Weekly findFirst
   */
  export type WeeklyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * Filter, which Weekly to fetch.
     */
    where?: WeeklyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeeklyOrderByWithRelationInput | WeeklyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeklies.
     */
    cursor?: WeeklyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeklies.
     */
    distinct?: WeeklyScalarFieldEnum | WeeklyScalarFieldEnum[]
  }

  /**
   * Weekly findFirstOrThrow
   */
  export type WeeklyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * Filter, which Weekly to fetch.
     */
    where?: WeeklyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeeklyOrderByWithRelationInput | WeeklyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeklies.
     */
    cursor?: WeeklyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeklies.
     */
    distinct?: WeeklyScalarFieldEnum | WeeklyScalarFieldEnum[]
  }

  /**
   * Weekly findMany
   */
  export type WeeklyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * Filter, which Weeklies to fetch.
     */
    where?: WeeklyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeeklyOrderByWithRelationInput | WeeklyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weeklies.
     */
    cursor?: WeeklyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeklies.
     */
    distinct?: WeeklyScalarFieldEnum | WeeklyScalarFieldEnum[]
  }

  /**
   * Weekly create
   */
  export type WeeklyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * The data needed to create a Weekly.
     */
    data?: XOR<WeeklyCreateInput, WeeklyUncheckedCreateInput>
  }

  /**
   * Weekly createMany
   */
  export type WeeklyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weeklies.
     */
    data: WeeklyCreateManyInput | WeeklyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weekly createManyAndReturn
   */
  export type WeeklyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * The data used to create many Weeklies.
     */
    data: WeeklyCreateManyInput | WeeklyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weekly update
   */
  export type WeeklyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * The data needed to update a Weekly.
     */
    data: XOR<WeeklyUpdateInput, WeeklyUncheckedUpdateInput>
    /**
     * Choose, which Weekly to update.
     */
    where: WeeklyWhereUniqueInput
  }

  /**
   * Weekly updateMany
   */
  export type WeeklyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weeklies.
     */
    data: XOR<WeeklyUpdateManyMutationInput, WeeklyUncheckedUpdateManyInput>
    /**
     * Filter which Weeklies to update
     */
    where?: WeeklyWhereInput
    /**
     * Limit how many Weeklies to update.
     */
    limit?: number
  }

  /**
   * Weekly updateManyAndReturn
   */
  export type WeeklyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * The data used to update Weeklies.
     */
    data: XOR<WeeklyUpdateManyMutationInput, WeeklyUncheckedUpdateManyInput>
    /**
     * Filter which Weeklies to update
     */
    where?: WeeklyWhereInput
    /**
     * Limit how many Weeklies to update.
     */
    limit?: number
  }

  /**
   * Weekly upsert
   */
  export type WeeklyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * The filter to search for the Weekly to update in case it exists.
     */
    where: WeeklyWhereUniqueInput
    /**
     * In case the Weekly found by the `where` argument doesn't exist, create a new Weekly with this data.
     */
    create: XOR<WeeklyCreateInput, WeeklyUncheckedCreateInput>
    /**
     * In case the Weekly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyUpdateInput, WeeklyUncheckedUpdateInput>
  }

  /**
   * Weekly delete
   */
  export type WeeklyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    /**
     * Filter which Weekly to delete.
     */
    where: WeeklyWhereUniqueInput
  }

  /**
   * Weekly deleteMany
   */
  export type WeeklyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weeklies to delete
     */
    where?: WeeklyWhereInput
    /**
     * Limit how many Weeklies to delete.
     */
    limit?: number
  }

  /**
   * Weekly.citations
   */
  export type Weekly$citationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    where?: ScriptureCitationWhereInput
    orderBy?: ScriptureCitationOrderByWithRelationInput | ScriptureCitationOrderByWithRelationInput[]
    cursor?: ScriptureCitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScriptureCitationScalarFieldEnum | ScriptureCitationScalarFieldEnum[]
  }

  /**
   * Weekly.featuredEssays
   */
  export type Weekly$featuredEssaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    where?: EssayWhereInput
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    cursor?: EssayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }

  /**
   * Weekly without action
   */
  export type WeeklyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
  }


  /**
   * Model Essay
   */

  export type AggregateEssay = {
    _count: EssayCountAggregateOutputType | null
    _avg: EssayAvgAggregateOutputType | null
    _sum: EssaySumAggregateOutputType | null
    _min: EssayMinAggregateOutputType | null
    _max: EssayMaxAggregateOutputType | null
  }

  export type EssayAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type EssaySumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type EssayMinAggregateOutputType = {
    id: number | null
    title: string | null
    category: string | null
    text: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type EssayMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category: string | null
    text: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type EssayCountAggregateOutputType = {
    id: number
    title: number
    category: number
    text: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type EssayAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type EssaySumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type EssayMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    text?: true
    createdAt?: true
    authorId?: true
  }

  export type EssayMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    text?: true
    createdAt?: true
    authorId?: true
  }

  export type EssayCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    text?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type EssayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Essay to aggregate.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Essays
    **/
    _count?: true | EssayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EssayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EssaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EssayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EssayMaxAggregateInputType
  }

  export type GetEssayAggregateType<T extends EssayAggregateArgs> = {
        [P in keyof T & keyof AggregateEssay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEssay[P]>
      : GetScalarType<T[P], AggregateEssay[P]>
  }




  export type EssayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EssayWhereInput
    orderBy?: EssayOrderByWithAggregationInput | EssayOrderByWithAggregationInput[]
    by: EssayScalarFieldEnum[] | EssayScalarFieldEnum
    having?: EssayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EssayCountAggregateInputType | true
    _avg?: EssayAvgAggregateInputType
    _sum?: EssaySumAggregateInputType
    _min?: EssayMinAggregateInputType
    _max?: EssayMaxAggregateInputType
  }

  export type EssayGroupByOutputType = {
    id: number
    title: string
    category: string
    text: string
    createdAt: Date
    authorId: number
    _count: EssayCountAggregateOutputType | null
    _avg: EssayAvgAggregateOutputType | null
    _sum: EssaySumAggregateOutputType | null
    _min: EssayMinAggregateOutputType | null
    _max: EssayMaxAggregateOutputType | null
  }

  type GetEssayGroupByPayload<T extends EssayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EssayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EssayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EssayGroupByOutputType[P]>
            : GetScalarType<T[P], EssayGroupByOutputType[P]>
        }
      >
    >


  export type EssaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    text?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    featuredIn?: boolean | Essay$featuredInArgs<ExtArgs>
    _count?: boolean | EssayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essay"]>

  export type EssaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    text?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essay"]>

  export type EssaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    text?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essay"]>

  export type EssaySelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    text?: boolean
    createdAt?: boolean
    authorId?: boolean
  }

  export type EssayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "text" | "createdAt" | "authorId", ExtArgs["result"]["essay"]>
  export type EssayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    featuredIn?: boolean | Essay$featuredInArgs<ExtArgs>
    _count?: boolean | EssayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EssayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EssayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EssayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Essay"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      featuredIn: Prisma.$WeeklyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category: string
      text: string
      createdAt: Date
      authorId: number
    }, ExtArgs["result"]["essay"]>
    composites: {}
  }

  type EssayGetPayload<S extends boolean | null | undefined | EssayDefaultArgs> = $Result.GetResult<Prisma.$EssayPayload, S>

  type EssayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EssayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EssayCountAggregateInputType | true
    }

  export interface EssayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Essay'], meta: { name: 'Essay' } }
    /**
     * Find zero or one Essay that matches the filter.
     * @param {EssayFindUniqueArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EssayFindUniqueArgs>(args: SelectSubset<T, EssayFindUniqueArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Essay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EssayFindUniqueOrThrowArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EssayFindUniqueOrThrowArgs>(args: SelectSubset<T, EssayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Essay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayFindFirstArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EssayFindFirstArgs>(args?: SelectSubset<T, EssayFindFirstArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Essay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayFindFirstOrThrowArgs} args - Arguments to find a Essay
     * @example
     * // Get one Essay
     * const essay = await prisma.essay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EssayFindFirstOrThrowArgs>(args?: SelectSubset<T, EssayFindFirstOrThrowArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Essays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Essays
     * const essays = await prisma.essay.findMany()
     * 
     * // Get first 10 Essays
     * const essays = await prisma.essay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const essayWithIdOnly = await prisma.essay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EssayFindManyArgs>(args?: SelectSubset<T, EssayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Essay.
     * @param {EssayCreateArgs} args - Arguments to create a Essay.
     * @example
     * // Create one Essay
     * const Essay = await prisma.essay.create({
     *   data: {
     *     // ... data to create a Essay
     *   }
     * })
     * 
     */
    create<T extends EssayCreateArgs>(args: SelectSubset<T, EssayCreateArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Essays.
     * @param {EssayCreateManyArgs} args - Arguments to create many Essays.
     * @example
     * // Create many Essays
     * const essay = await prisma.essay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EssayCreateManyArgs>(args?: SelectSubset<T, EssayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Essays and returns the data saved in the database.
     * @param {EssayCreateManyAndReturnArgs} args - Arguments to create many Essays.
     * @example
     * // Create many Essays
     * const essay = await prisma.essay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Essays and only return the `id`
     * const essayWithIdOnly = await prisma.essay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EssayCreateManyAndReturnArgs>(args?: SelectSubset<T, EssayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Essay.
     * @param {EssayDeleteArgs} args - Arguments to delete one Essay.
     * @example
     * // Delete one Essay
     * const Essay = await prisma.essay.delete({
     *   where: {
     *     // ... filter to delete one Essay
     *   }
     * })
     * 
     */
    delete<T extends EssayDeleteArgs>(args: SelectSubset<T, EssayDeleteArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Essay.
     * @param {EssayUpdateArgs} args - Arguments to update one Essay.
     * @example
     * // Update one Essay
     * const essay = await prisma.essay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EssayUpdateArgs>(args: SelectSubset<T, EssayUpdateArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Essays.
     * @param {EssayDeleteManyArgs} args - Arguments to filter Essays to delete.
     * @example
     * // Delete a few Essays
     * const { count } = await prisma.essay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EssayDeleteManyArgs>(args?: SelectSubset<T, EssayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Essays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Essays
     * const essay = await prisma.essay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EssayUpdateManyArgs>(args: SelectSubset<T, EssayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Essays and returns the data updated in the database.
     * @param {EssayUpdateManyAndReturnArgs} args - Arguments to update many Essays.
     * @example
     * // Update many Essays
     * const essay = await prisma.essay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Essays and only return the `id`
     * const essayWithIdOnly = await prisma.essay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EssayUpdateManyAndReturnArgs>(args: SelectSubset<T, EssayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Essay.
     * @param {EssayUpsertArgs} args - Arguments to update or create a Essay.
     * @example
     * // Update or create a Essay
     * const essay = await prisma.essay.upsert({
     *   create: {
     *     // ... data to create a Essay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Essay we want to update
     *   }
     * })
     */
    upsert<T extends EssayUpsertArgs>(args: SelectSubset<T, EssayUpsertArgs<ExtArgs>>): Prisma__EssayClient<$Result.GetResult<Prisma.$EssayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Essays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayCountArgs} args - Arguments to filter Essays to count.
     * @example
     * // Count the number of Essays
     * const count = await prisma.essay.count({
     *   where: {
     *     // ... the filter for the Essays we want to count
     *   }
     * })
    **/
    count<T extends EssayCountArgs>(
      args?: Subset<T, EssayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EssayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Essay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EssayAggregateArgs>(args: Subset<T, EssayAggregateArgs>): Prisma.PrismaPromise<GetEssayAggregateType<T>>

    /**
     * Group by Essay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayGroupByArgs} args - Group by arguments.
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
      T extends EssayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EssayGroupByArgs['orderBy'] }
        : { orderBy?: EssayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EssayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEssayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Essay model
   */
  readonly fields: EssayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Essay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EssayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    featuredIn<T extends Essay$featuredInArgs<ExtArgs> = {}>(args?: Subset<T, Essay$featuredInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Essay model
   */
  interface EssayFieldRefs {
    readonly id: FieldRef<"Essay", 'Int'>
    readonly title: FieldRef<"Essay", 'String'>
    readonly category: FieldRef<"Essay", 'String'>
    readonly text: FieldRef<"Essay", 'String'>
    readonly createdAt: FieldRef<"Essay", 'DateTime'>
    readonly authorId: FieldRef<"Essay", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Essay findUnique
   */
  export type EssayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where: EssayWhereUniqueInput
  }

  /**
   * Essay findUniqueOrThrow
   */
  export type EssayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where: EssayWhereUniqueInput
  }

  /**
   * Essay findFirst
   */
  export type EssayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Essays.
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Essays.
     */
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }

  /**
   * Essay findFirstOrThrow
   */
  export type EssayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essay to fetch.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Essays.
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Essays.
     */
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }

  /**
   * Essay findMany
   */
  export type EssayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter, which Essays to fetch.
     */
    where?: EssayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Essays to fetch.
     */
    orderBy?: EssayOrderByWithRelationInput | EssayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Essays.
     */
    cursor?: EssayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Essays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Essays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Essays.
     */
    distinct?: EssayScalarFieldEnum | EssayScalarFieldEnum[]
  }

  /**
   * Essay create
   */
  export type EssayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * The data needed to create a Essay.
     */
    data: XOR<EssayCreateInput, EssayUncheckedCreateInput>
  }

  /**
   * Essay createMany
   */
  export type EssayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Essays.
     */
    data: EssayCreateManyInput | EssayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Essay createManyAndReturn
   */
  export type EssayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * The data used to create many Essays.
     */
    data: EssayCreateManyInput | EssayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Essay update
   */
  export type EssayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * The data needed to update a Essay.
     */
    data: XOR<EssayUpdateInput, EssayUncheckedUpdateInput>
    /**
     * Choose, which Essay to update.
     */
    where: EssayWhereUniqueInput
  }

  /**
   * Essay updateMany
   */
  export type EssayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Essays.
     */
    data: XOR<EssayUpdateManyMutationInput, EssayUncheckedUpdateManyInput>
    /**
     * Filter which Essays to update
     */
    where?: EssayWhereInput
    /**
     * Limit how many Essays to update.
     */
    limit?: number
  }

  /**
   * Essay updateManyAndReturn
   */
  export type EssayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * The data used to update Essays.
     */
    data: XOR<EssayUpdateManyMutationInput, EssayUncheckedUpdateManyInput>
    /**
     * Filter which Essays to update
     */
    where?: EssayWhereInput
    /**
     * Limit how many Essays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Essay upsert
   */
  export type EssayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * The filter to search for the Essay to update in case it exists.
     */
    where: EssayWhereUniqueInput
    /**
     * In case the Essay found by the `where` argument doesn't exist, create a new Essay with this data.
     */
    create: XOR<EssayCreateInput, EssayUncheckedCreateInput>
    /**
     * In case the Essay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EssayUpdateInput, EssayUncheckedUpdateInput>
  }

  /**
   * Essay delete
   */
  export type EssayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
    /**
     * Filter which Essay to delete.
     */
    where: EssayWhereUniqueInput
  }

  /**
   * Essay deleteMany
   */
  export type EssayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Essays to delete
     */
    where?: EssayWhereInput
    /**
     * Limit how many Essays to delete.
     */
    limit?: number
  }

  /**
   * Essay.featuredIn
   */
  export type Essay$featuredInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekly
     */
    select?: WeeklySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weekly
     */
    omit?: WeeklyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyInclude<ExtArgs> | null
    where?: WeeklyWhereInput
    orderBy?: WeeklyOrderByWithRelationInput | WeeklyOrderByWithRelationInput[]
    cursor?: WeeklyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyScalarFieldEnum | WeeklyScalarFieldEnum[]
  }

  /**
   * Essay without action
   */
  export type EssayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Essay
     */
    select?: EssaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Essay
     */
    omit?: EssayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayInclude<ExtArgs> | null
  }


  /**
   * Model ScriptureCitation
   */

  export type AggregateScriptureCitation = {
    _count: ScriptureCitationCountAggregateOutputType | null
    _avg: ScriptureCitationAvgAggregateOutputType | null
    _sum: ScriptureCitationSumAggregateOutputType | null
    _min: ScriptureCitationMinAggregateOutputType | null
    _max: ScriptureCitationMaxAggregateOutputType | null
  }

  export type ScriptureCitationAvgAggregateOutputType = {
    id: number | null
    weeklyId: number | null
  }

  export type ScriptureCitationSumAggregateOutputType = {
    id: number | null
    weeklyId: number | null
  }

  export type ScriptureCitationMinAggregateOutputType = {
    id: number | null
    reference: string | null
    summary: string | null
    weeklyId: number | null
  }

  export type ScriptureCitationMaxAggregateOutputType = {
    id: number | null
    reference: string | null
    summary: string | null
    weeklyId: number | null
  }

  export type ScriptureCitationCountAggregateOutputType = {
    id: number
    reference: number
    summary: number
    weeklyId: number
    _all: number
  }


  export type ScriptureCitationAvgAggregateInputType = {
    id?: true
    weeklyId?: true
  }

  export type ScriptureCitationSumAggregateInputType = {
    id?: true
    weeklyId?: true
  }

  export type ScriptureCitationMinAggregateInputType = {
    id?: true
    reference?: true
    summary?: true
    weeklyId?: true
  }

  export type ScriptureCitationMaxAggregateInputType = {
    id?: true
    reference?: true
    summary?: true
    weeklyId?: true
  }

  export type ScriptureCitationCountAggregateInputType = {
    id?: true
    reference?: true
    summary?: true
    weeklyId?: true
    _all?: true
  }

  export type ScriptureCitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScriptureCitation to aggregate.
     */
    where?: ScriptureCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptureCitations to fetch.
     */
    orderBy?: ScriptureCitationOrderByWithRelationInput | ScriptureCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScriptureCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptureCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptureCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScriptureCitations
    **/
    _count?: true | ScriptureCitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScriptureCitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScriptureCitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScriptureCitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScriptureCitationMaxAggregateInputType
  }

  export type GetScriptureCitationAggregateType<T extends ScriptureCitationAggregateArgs> = {
        [P in keyof T & keyof AggregateScriptureCitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScriptureCitation[P]>
      : GetScalarType<T[P], AggregateScriptureCitation[P]>
  }




  export type ScriptureCitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScriptureCitationWhereInput
    orderBy?: ScriptureCitationOrderByWithAggregationInput | ScriptureCitationOrderByWithAggregationInput[]
    by: ScriptureCitationScalarFieldEnum[] | ScriptureCitationScalarFieldEnum
    having?: ScriptureCitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScriptureCitationCountAggregateInputType | true
    _avg?: ScriptureCitationAvgAggregateInputType
    _sum?: ScriptureCitationSumAggregateInputType
    _min?: ScriptureCitationMinAggregateInputType
    _max?: ScriptureCitationMaxAggregateInputType
  }

  export type ScriptureCitationGroupByOutputType = {
    id: number
    reference: string
    summary: string
    weeklyId: number
    _count: ScriptureCitationCountAggregateOutputType | null
    _avg: ScriptureCitationAvgAggregateOutputType | null
    _sum: ScriptureCitationSumAggregateOutputType | null
    _min: ScriptureCitationMinAggregateOutputType | null
    _max: ScriptureCitationMaxAggregateOutputType | null
  }

  type GetScriptureCitationGroupByPayload<T extends ScriptureCitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScriptureCitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScriptureCitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScriptureCitationGroupByOutputType[P]>
            : GetScalarType<T[P], ScriptureCitationGroupByOutputType[P]>
        }
      >
    >


  export type ScriptureCitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    summary?: boolean
    weeklyId?: boolean
    weekly?: boolean | WeeklyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scriptureCitation"]>

  export type ScriptureCitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    summary?: boolean
    weeklyId?: boolean
    weekly?: boolean | WeeklyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scriptureCitation"]>

  export type ScriptureCitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    summary?: boolean
    weeklyId?: boolean
    weekly?: boolean | WeeklyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scriptureCitation"]>

  export type ScriptureCitationSelectScalar = {
    id?: boolean
    reference?: boolean
    summary?: boolean
    weeklyId?: boolean
  }

  export type ScriptureCitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "summary" | "weeklyId", ExtArgs["result"]["scriptureCitation"]>
  export type ScriptureCitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekly?: boolean | WeeklyDefaultArgs<ExtArgs>
  }
  export type ScriptureCitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekly?: boolean | WeeklyDefaultArgs<ExtArgs>
  }
  export type ScriptureCitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekly?: boolean | WeeklyDefaultArgs<ExtArgs>
  }

  export type $ScriptureCitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScriptureCitation"
    objects: {
      weekly: Prisma.$WeeklyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reference: string
      summary: string
      weeklyId: number
    }, ExtArgs["result"]["scriptureCitation"]>
    composites: {}
  }

  type ScriptureCitationGetPayload<S extends boolean | null | undefined | ScriptureCitationDefaultArgs> = $Result.GetResult<Prisma.$ScriptureCitationPayload, S>

  type ScriptureCitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScriptureCitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScriptureCitationCountAggregateInputType | true
    }

  export interface ScriptureCitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScriptureCitation'], meta: { name: 'ScriptureCitation' } }
    /**
     * Find zero or one ScriptureCitation that matches the filter.
     * @param {ScriptureCitationFindUniqueArgs} args - Arguments to find a ScriptureCitation
     * @example
     * // Get one ScriptureCitation
     * const scriptureCitation = await prisma.scriptureCitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScriptureCitationFindUniqueArgs>(args: SelectSubset<T, ScriptureCitationFindUniqueArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScriptureCitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScriptureCitationFindUniqueOrThrowArgs} args - Arguments to find a ScriptureCitation
     * @example
     * // Get one ScriptureCitation
     * const scriptureCitation = await prisma.scriptureCitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScriptureCitationFindUniqueOrThrowArgs>(args: SelectSubset<T, ScriptureCitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScriptureCitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationFindFirstArgs} args - Arguments to find a ScriptureCitation
     * @example
     * // Get one ScriptureCitation
     * const scriptureCitation = await prisma.scriptureCitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScriptureCitationFindFirstArgs>(args?: SelectSubset<T, ScriptureCitationFindFirstArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScriptureCitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationFindFirstOrThrowArgs} args - Arguments to find a ScriptureCitation
     * @example
     * // Get one ScriptureCitation
     * const scriptureCitation = await prisma.scriptureCitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScriptureCitationFindFirstOrThrowArgs>(args?: SelectSubset<T, ScriptureCitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScriptureCitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScriptureCitations
     * const scriptureCitations = await prisma.scriptureCitation.findMany()
     * 
     * // Get first 10 ScriptureCitations
     * const scriptureCitations = await prisma.scriptureCitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scriptureCitationWithIdOnly = await prisma.scriptureCitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScriptureCitationFindManyArgs>(args?: SelectSubset<T, ScriptureCitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScriptureCitation.
     * @param {ScriptureCitationCreateArgs} args - Arguments to create a ScriptureCitation.
     * @example
     * // Create one ScriptureCitation
     * const ScriptureCitation = await prisma.scriptureCitation.create({
     *   data: {
     *     // ... data to create a ScriptureCitation
     *   }
     * })
     * 
     */
    create<T extends ScriptureCitationCreateArgs>(args: SelectSubset<T, ScriptureCitationCreateArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScriptureCitations.
     * @param {ScriptureCitationCreateManyArgs} args - Arguments to create many ScriptureCitations.
     * @example
     * // Create many ScriptureCitations
     * const scriptureCitation = await prisma.scriptureCitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScriptureCitationCreateManyArgs>(args?: SelectSubset<T, ScriptureCitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScriptureCitations and returns the data saved in the database.
     * @param {ScriptureCitationCreateManyAndReturnArgs} args - Arguments to create many ScriptureCitations.
     * @example
     * // Create many ScriptureCitations
     * const scriptureCitation = await prisma.scriptureCitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScriptureCitations and only return the `id`
     * const scriptureCitationWithIdOnly = await prisma.scriptureCitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScriptureCitationCreateManyAndReturnArgs>(args?: SelectSubset<T, ScriptureCitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScriptureCitation.
     * @param {ScriptureCitationDeleteArgs} args - Arguments to delete one ScriptureCitation.
     * @example
     * // Delete one ScriptureCitation
     * const ScriptureCitation = await prisma.scriptureCitation.delete({
     *   where: {
     *     // ... filter to delete one ScriptureCitation
     *   }
     * })
     * 
     */
    delete<T extends ScriptureCitationDeleteArgs>(args: SelectSubset<T, ScriptureCitationDeleteArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScriptureCitation.
     * @param {ScriptureCitationUpdateArgs} args - Arguments to update one ScriptureCitation.
     * @example
     * // Update one ScriptureCitation
     * const scriptureCitation = await prisma.scriptureCitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScriptureCitationUpdateArgs>(args: SelectSubset<T, ScriptureCitationUpdateArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScriptureCitations.
     * @param {ScriptureCitationDeleteManyArgs} args - Arguments to filter ScriptureCitations to delete.
     * @example
     * // Delete a few ScriptureCitations
     * const { count } = await prisma.scriptureCitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScriptureCitationDeleteManyArgs>(args?: SelectSubset<T, ScriptureCitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScriptureCitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScriptureCitations
     * const scriptureCitation = await prisma.scriptureCitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScriptureCitationUpdateManyArgs>(args: SelectSubset<T, ScriptureCitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScriptureCitations and returns the data updated in the database.
     * @param {ScriptureCitationUpdateManyAndReturnArgs} args - Arguments to update many ScriptureCitations.
     * @example
     * // Update many ScriptureCitations
     * const scriptureCitation = await prisma.scriptureCitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScriptureCitations and only return the `id`
     * const scriptureCitationWithIdOnly = await prisma.scriptureCitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScriptureCitationUpdateManyAndReturnArgs>(args: SelectSubset<T, ScriptureCitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScriptureCitation.
     * @param {ScriptureCitationUpsertArgs} args - Arguments to update or create a ScriptureCitation.
     * @example
     * // Update or create a ScriptureCitation
     * const scriptureCitation = await prisma.scriptureCitation.upsert({
     *   create: {
     *     // ... data to create a ScriptureCitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScriptureCitation we want to update
     *   }
     * })
     */
    upsert<T extends ScriptureCitationUpsertArgs>(args: SelectSubset<T, ScriptureCitationUpsertArgs<ExtArgs>>): Prisma__ScriptureCitationClient<$Result.GetResult<Prisma.$ScriptureCitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScriptureCitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationCountArgs} args - Arguments to filter ScriptureCitations to count.
     * @example
     * // Count the number of ScriptureCitations
     * const count = await prisma.scriptureCitation.count({
     *   where: {
     *     // ... the filter for the ScriptureCitations we want to count
     *   }
     * })
    **/
    count<T extends ScriptureCitationCountArgs>(
      args?: Subset<T, ScriptureCitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScriptureCitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScriptureCitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScriptureCitationAggregateArgs>(args: Subset<T, ScriptureCitationAggregateArgs>): Prisma.PrismaPromise<GetScriptureCitationAggregateType<T>>

    /**
     * Group by ScriptureCitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptureCitationGroupByArgs} args - Group by arguments.
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
      T extends ScriptureCitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScriptureCitationGroupByArgs['orderBy'] }
        : { orderBy?: ScriptureCitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScriptureCitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptureCitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScriptureCitation model
   */
  readonly fields: ScriptureCitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScriptureCitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScriptureCitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weekly<T extends WeeklyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyDefaultArgs<ExtArgs>>): Prisma__WeeklyClient<$Result.GetResult<Prisma.$WeeklyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScriptureCitation model
   */
  interface ScriptureCitationFieldRefs {
    readonly id: FieldRef<"ScriptureCitation", 'Int'>
    readonly reference: FieldRef<"ScriptureCitation", 'String'>
    readonly summary: FieldRef<"ScriptureCitation", 'String'>
    readonly weeklyId: FieldRef<"ScriptureCitation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ScriptureCitation findUnique
   */
  export type ScriptureCitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * Filter, which ScriptureCitation to fetch.
     */
    where: ScriptureCitationWhereUniqueInput
  }

  /**
   * ScriptureCitation findUniqueOrThrow
   */
  export type ScriptureCitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * Filter, which ScriptureCitation to fetch.
     */
    where: ScriptureCitationWhereUniqueInput
  }

  /**
   * ScriptureCitation findFirst
   */
  export type ScriptureCitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * Filter, which ScriptureCitation to fetch.
     */
    where?: ScriptureCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptureCitations to fetch.
     */
    orderBy?: ScriptureCitationOrderByWithRelationInput | ScriptureCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScriptureCitations.
     */
    cursor?: ScriptureCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptureCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptureCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScriptureCitations.
     */
    distinct?: ScriptureCitationScalarFieldEnum | ScriptureCitationScalarFieldEnum[]
  }

  /**
   * ScriptureCitation findFirstOrThrow
   */
  export type ScriptureCitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * Filter, which ScriptureCitation to fetch.
     */
    where?: ScriptureCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptureCitations to fetch.
     */
    orderBy?: ScriptureCitationOrderByWithRelationInput | ScriptureCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScriptureCitations.
     */
    cursor?: ScriptureCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptureCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptureCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScriptureCitations.
     */
    distinct?: ScriptureCitationScalarFieldEnum | ScriptureCitationScalarFieldEnum[]
  }

  /**
   * ScriptureCitation findMany
   */
  export type ScriptureCitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * Filter, which ScriptureCitations to fetch.
     */
    where?: ScriptureCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScriptureCitations to fetch.
     */
    orderBy?: ScriptureCitationOrderByWithRelationInput | ScriptureCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScriptureCitations.
     */
    cursor?: ScriptureCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScriptureCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScriptureCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScriptureCitations.
     */
    distinct?: ScriptureCitationScalarFieldEnum | ScriptureCitationScalarFieldEnum[]
  }

  /**
   * ScriptureCitation create
   */
  export type ScriptureCitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * The data needed to create a ScriptureCitation.
     */
    data: XOR<ScriptureCitationCreateInput, ScriptureCitationUncheckedCreateInput>
  }

  /**
   * ScriptureCitation createMany
   */
  export type ScriptureCitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScriptureCitations.
     */
    data: ScriptureCitationCreateManyInput | ScriptureCitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScriptureCitation createManyAndReturn
   */
  export type ScriptureCitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * The data used to create many ScriptureCitations.
     */
    data: ScriptureCitationCreateManyInput | ScriptureCitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScriptureCitation update
   */
  export type ScriptureCitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * The data needed to update a ScriptureCitation.
     */
    data: XOR<ScriptureCitationUpdateInput, ScriptureCitationUncheckedUpdateInput>
    /**
     * Choose, which ScriptureCitation to update.
     */
    where: ScriptureCitationWhereUniqueInput
  }

  /**
   * ScriptureCitation updateMany
   */
  export type ScriptureCitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScriptureCitations.
     */
    data: XOR<ScriptureCitationUpdateManyMutationInput, ScriptureCitationUncheckedUpdateManyInput>
    /**
     * Filter which ScriptureCitations to update
     */
    where?: ScriptureCitationWhereInput
    /**
     * Limit how many ScriptureCitations to update.
     */
    limit?: number
  }

  /**
   * ScriptureCitation updateManyAndReturn
   */
  export type ScriptureCitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * The data used to update ScriptureCitations.
     */
    data: XOR<ScriptureCitationUpdateManyMutationInput, ScriptureCitationUncheckedUpdateManyInput>
    /**
     * Filter which ScriptureCitations to update
     */
    where?: ScriptureCitationWhereInput
    /**
     * Limit how many ScriptureCitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScriptureCitation upsert
   */
  export type ScriptureCitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * The filter to search for the ScriptureCitation to update in case it exists.
     */
    where: ScriptureCitationWhereUniqueInput
    /**
     * In case the ScriptureCitation found by the `where` argument doesn't exist, create a new ScriptureCitation with this data.
     */
    create: XOR<ScriptureCitationCreateInput, ScriptureCitationUncheckedCreateInput>
    /**
     * In case the ScriptureCitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScriptureCitationUpdateInput, ScriptureCitationUncheckedUpdateInput>
  }

  /**
   * ScriptureCitation delete
   */
  export type ScriptureCitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
    /**
     * Filter which ScriptureCitation to delete.
     */
    where: ScriptureCitationWhereUniqueInput
  }

  /**
   * ScriptureCitation deleteMany
   */
  export type ScriptureCitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScriptureCitations to delete
     */
    where?: ScriptureCitationWhereInput
    /**
     * Limit how many ScriptureCitations to delete.
     */
    limit?: number
  }

  /**
   * ScriptureCitation without action
   */
  export type ScriptureCitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptureCitation
     */
    select?: ScriptureCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScriptureCitation
     */
    omit?: ScriptureCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScriptureCitationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    profilePic: 'profilePic',
    tags: 'tags'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    userEmail: 'userEmail',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    text: 'text',
    title: 'title',
    authorId: 'authorId',
    discussionId: 'discussionId',
    createdAt: 'createdAt',
    parentId: 'parentId'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const DiscussionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    authorId: 'authorId',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type DiscussionScalarFieldEnum = (typeof DiscussionScalarFieldEnum)[keyof typeof DiscussionScalarFieldEnum]


  export const WeeklyScalarFieldEnum: {
    id: 'id',
    saintName: 'saintName',
    saintDescription: 'saintDescription',
    saintFeastDay: 'saintFeastDay',
    featuredScriptureRef: 'featuredScriptureRef',
    featuredScriptureSummary: 'featuredScriptureSummary',
    discussionTitle: 'discussionTitle',
    discussionDescription: 'discussionDescription',
    discussionImage: 'discussionImage',
    discussionCloses: 'discussionCloses'
  };

  export type WeeklyScalarFieldEnum = (typeof WeeklyScalarFieldEnum)[keyof typeof WeeklyScalarFieldEnum]


  export const EssayScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    text: 'text',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type EssayScalarFieldEnum = (typeof EssayScalarFieldEnum)[keyof typeof EssayScalarFieldEnum]


  export const ScriptureCitationScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    summary: 'summary',
    weeklyId: 'weeklyId'
  };

  export type ScriptureCitationScalarFieldEnum = (typeof ScriptureCitationScalarFieldEnum)[keyof typeof ScriptureCitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: IntFilter<"UserProfile"> | number
    profilePic?: StringNullableFilter<"UserProfile"> | string | null
    tags?: StringNullableListFilter<"UserProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    tags?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    profilePic?: StringNullableFilter<"UserProfile"> | string | null
    tags?: StringNullableListFilter<"UserProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    tags?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserProfile"> | number
    profilePic?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    tags?: StringNullableListFilter<"UserProfile">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    userEmail?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    discussions?: DiscussionListRelationFilter
    replies?: ReplyListRelationFilter
    essays?: EssayListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    isAdmin?: SortOrder
    discussions?: DiscussionOrderByRelationAggregateInput
    replies?: ReplyOrderByRelationAggregateInput
    essays?: EssayOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    userEmail?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    discussions?: DiscussionListRelationFilter
    replies?: ReplyListRelationFilter
    essays?: EssayListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }, "id" | "userName" | "userEmail">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userName?: StringWithAggregatesFilter<"User"> | string
    userEmail?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ReplyWhereInput = {
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    id?: IntFilter<"Reply"> | number
    text?: StringFilter<"Reply"> | string
    title?: StringFilter<"Reply"> | string
    authorId?: IntFilter<"Reply"> | number
    discussionId?: IntFilter<"Reply"> | number
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    parentId?: IntNullableFilter<"Reply"> | number | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    discussion?: XOR<DiscussionScalarRelationFilter, DiscussionWhereInput>
    parent?: XOR<ReplyNullableScalarRelationFilter, ReplyWhereInput> | null
    children?: ReplyListRelationFilter
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    discussion?: DiscussionOrderByWithRelationInput
    parent?: ReplyOrderByWithRelationInput
    children?: ReplyOrderByRelationAggregateInput
  }

  export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    text?: StringFilter<"Reply"> | string
    title?: StringFilter<"Reply"> | string
    authorId?: IntFilter<"Reply"> | number
    discussionId?: IntFilter<"Reply"> | number
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    parentId?: IntNullableFilter<"Reply"> | number | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    discussion?: XOR<DiscussionScalarRelationFilter, DiscussionWhereInput>
    parent?: XOR<ReplyNullableScalarRelationFilter, ReplyWhereInput> | null
    children?: ReplyListRelationFilter
  }, "id">

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _avg?: ReplyAvgOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
    _sum?: ReplySumOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    OR?: ReplyScalarWhereWithAggregatesInput[]
    NOT?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reply"> | number
    text?: StringWithAggregatesFilter<"Reply"> | string
    title?: StringWithAggregatesFilter<"Reply"> | string
    authorId?: IntWithAggregatesFilter<"Reply"> | number
    discussionId?: IntWithAggregatesFilter<"Reply"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    parentId?: IntNullableWithAggregatesFilter<"Reply"> | number | null
  }

  export type DiscussionWhereInput = {
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    id?: IntFilter<"Discussion"> | number
    text?: StringFilter<"Discussion"> | string
    authorId?: IntFilter<"Discussion"> | number
    title?: StringFilter<"Discussion"> | string
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    replies?: ReplyListRelationFilter
  }

  export type DiscussionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    replies?: ReplyOrderByRelationAggregateInput
  }

  export type DiscussionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    text?: StringFilter<"Discussion"> | string
    authorId?: IntFilter<"Discussion"> | number
    title?: StringFilter<"Discussion"> | string
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    replies?: ReplyListRelationFilter
  }, "id">

  export type DiscussionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    _count?: DiscussionCountOrderByAggregateInput
    _avg?: DiscussionAvgOrderByAggregateInput
    _max?: DiscussionMaxOrderByAggregateInput
    _min?: DiscussionMinOrderByAggregateInput
    _sum?: DiscussionSumOrderByAggregateInput
  }

  export type DiscussionScalarWhereWithAggregatesInput = {
    AND?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    OR?: DiscussionScalarWhereWithAggregatesInput[]
    NOT?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Discussion"> | number
    text?: StringWithAggregatesFilter<"Discussion"> | string
    authorId?: IntWithAggregatesFilter<"Discussion"> | number
    title?: StringWithAggregatesFilter<"Discussion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string
  }

  export type WeeklyWhereInput = {
    AND?: WeeklyWhereInput | WeeklyWhereInput[]
    OR?: WeeklyWhereInput[]
    NOT?: WeeklyWhereInput | WeeklyWhereInput[]
    id?: IntFilter<"Weekly"> | number
    saintName?: StringFilter<"Weekly"> | string
    saintDescription?: StringFilter<"Weekly"> | string
    saintFeastDay?: StringFilter<"Weekly"> | string
    featuredScriptureRef?: StringFilter<"Weekly"> | string
    featuredScriptureSummary?: StringFilter<"Weekly"> | string
    discussionTitle?: StringFilter<"Weekly"> | string
    discussionDescription?: StringFilter<"Weekly"> | string
    discussionImage?: StringFilter<"Weekly"> | string
    discussionCloses?: StringFilter<"Weekly"> | string
    citations?: ScriptureCitationListRelationFilter
    featuredEssays?: EssayListRelationFilter
  }

  export type WeeklyOrderByWithRelationInput = {
    id?: SortOrder
    saintName?: SortOrder
    saintDescription?: SortOrder
    saintFeastDay?: SortOrder
    featuredScriptureRef?: SortOrder
    featuredScriptureSummary?: SortOrder
    discussionTitle?: SortOrder
    discussionDescription?: SortOrder
    discussionImage?: SortOrder
    discussionCloses?: SortOrder
    citations?: ScriptureCitationOrderByRelationAggregateInput
    featuredEssays?: EssayOrderByRelationAggregateInput
  }

  export type WeeklyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeeklyWhereInput | WeeklyWhereInput[]
    OR?: WeeklyWhereInput[]
    NOT?: WeeklyWhereInput | WeeklyWhereInput[]
    saintName?: StringFilter<"Weekly"> | string
    saintDescription?: StringFilter<"Weekly"> | string
    saintFeastDay?: StringFilter<"Weekly"> | string
    featuredScriptureRef?: StringFilter<"Weekly"> | string
    featuredScriptureSummary?: StringFilter<"Weekly"> | string
    discussionTitle?: StringFilter<"Weekly"> | string
    discussionDescription?: StringFilter<"Weekly"> | string
    discussionImage?: StringFilter<"Weekly"> | string
    discussionCloses?: StringFilter<"Weekly"> | string
    citations?: ScriptureCitationListRelationFilter
    featuredEssays?: EssayListRelationFilter
  }, "id">

  export type WeeklyOrderByWithAggregationInput = {
    id?: SortOrder
    saintName?: SortOrder
    saintDescription?: SortOrder
    saintFeastDay?: SortOrder
    featuredScriptureRef?: SortOrder
    featuredScriptureSummary?: SortOrder
    discussionTitle?: SortOrder
    discussionDescription?: SortOrder
    discussionImage?: SortOrder
    discussionCloses?: SortOrder
    _count?: WeeklyCountOrderByAggregateInput
    _avg?: WeeklyAvgOrderByAggregateInput
    _max?: WeeklyMaxOrderByAggregateInput
    _min?: WeeklyMinOrderByAggregateInput
    _sum?: WeeklySumOrderByAggregateInput
  }

  export type WeeklyScalarWhereWithAggregatesInput = {
    AND?: WeeklyScalarWhereWithAggregatesInput | WeeklyScalarWhereWithAggregatesInput[]
    OR?: WeeklyScalarWhereWithAggregatesInput[]
    NOT?: WeeklyScalarWhereWithAggregatesInput | WeeklyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Weekly"> | number
    saintName?: StringWithAggregatesFilter<"Weekly"> | string
    saintDescription?: StringWithAggregatesFilter<"Weekly"> | string
    saintFeastDay?: StringWithAggregatesFilter<"Weekly"> | string
    featuredScriptureRef?: StringWithAggregatesFilter<"Weekly"> | string
    featuredScriptureSummary?: StringWithAggregatesFilter<"Weekly"> | string
    discussionTitle?: StringWithAggregatesFilter<"Weekly"> | string
    discussionDescription?: StringWithAggregatesFilter<"Weekly"> | string
    discussionImage?: StringWithAggregatesFilter<"Weekly"> | string
    discussionCloses?: StringWithAggregatesFilter<"Weekly"> | string
  }

  export type EssayWhereInput = {
    AND?: EssayWhereInput | EssayWhereInput[]
    OR?: EssayWhereInput[]
    NOT?: EssayWhereInput | EssayWhereInput[]
    id?: IntFilter<"Essay"> | number
    title?: StringFilter<"Essay"> | string
    category?: StringFilter<"Essay"> | string
    text?: StringFilter<"Essay"> | string
    createdAt?: DateTimeFilter<"Essay"> | Date | string
    authorId?: IntFilter<"Essay"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    featuredIn?: WeeklyListRelationFilter
  }

  export type EssayOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    featuredIn?: WeeklyOrderByRelationAggregateInput
  }

  export type EssayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EssayWhereInput | EssayWhereInput[]
    OR?: EssayWhereInput[]
    NOT?: EssayWhereInput | EssayWhereInput[]
    title?: StringFilter<"Essay"> | string
    category?: StringFilter<"Essay"> | string
    text?: StringFilter<"Essay"> | string
    createdAt?: DateTimeFilter<"Essay"> | Date | string
    authorId?: IntFilter<"Essay"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    featuredIn?: WeeklyListRelationFilter
  }, "id">

  export type EssayOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: EssayCountOrderByAggregateInput
    _avg?: EssayAvgOrderByAggregateInput
    _max?: EssayMaxOrderByAggregateInput
    _min?: EssayMinOrderByAggregateInput
    _sum?: EssaySumOrderByAggregateInput
  }

  export type EssayScalarWhereWithAggregatesInput = {
    AND?: EssayScalarWhereWithAggregatesInput | EssayScalarWhereWithAggregatesInput[]
    OR?: EssayScalarWhereWithAggregatesInput[]
    NOT?: EssayScalarWhereWithAggregatesInput | EssayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Essay"> | number
    title?: StringWithAggregatesFilter<"Essay"> | string
    category?: StringWithAggregatesFilter<"Essay"> | string
    text?: StringWithAggregatesFilter<"Essay"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Essay"> | Date | string
    authorId?: IntWithAggregatesFilter<"Essay"> | number
  }

  export type ScriptureCitationWhereInput = {
    AND?: ScriptureCitationWhereInput | ScriptureCitationWhereInput[]
    OR?: ScriptureCitationWhereInput[]
    NOT?: ScriptureCitationWhereInput | ScriptureCitationWhereInput[]
    id?: IntFilter<"ScriptureCitation"> | number
    reference?: StringFilter<"ScriptureCitation"> | string
    summary?: StringFilter<"ScriptureCitation"> | string
    weeklyId?: IntFilter<"ScriptureCitation"> | number
    weekly?: XOR<WeeklyScalarRelationFilter, WeeklyWhereInput>
  }

  export type ScriptureCitationOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    summary?: SortOrder
    weeklyId?: SortOrder
    weekly?: WeeklyOrderByWithRelationInput
  }

  export type ScriptureCitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScriptureCitationWhereInput | ScriptureCitationWhereInput[]
    OR?: ScriptureCitationWhereInput[]
    NOT?: ScriptureCitationWhereInput | ScriptureCitationWhereInput[]
    reference?: StringFilter<"ScriptureCitation"> | string
    summary?: StringFilter<"ScriptureCitation"> | string
    weeklyId?: IntFilter<"ScriptureCitation"> | number
    weekly?: XOR<WeeklyScalarRelationFilter, WeeklyWhereInput>
  }, "id">

  export type ScriptureCitationOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    summary?: SortOrder
    weeklyId?: SortOrder
    _count?: ScriptureCitationCountOrderByAggregateInput
    _avg?: ScriptureCitationAvgOrderByAggregateInput
    _max?: ScriptureCitationMaxOrderByAggregateInput
    _min?: ScriptureCitationMinOrderByAggregateInput
    _sum?: ScriptureCitationSumOrderByAggregateInput
  }

  export type ScriptureCitationScalarWhereWithAggregatesInput = {
    AND?: ScriptureCitationScalarWhereWithAggregatesInput | ScriptureCitationScalarWhereWithAggregatesInput[]
    OR?: ScriptureCitationScalarWhereWithAggregatesInput[]
    NOT?: ScriptureCitationScalarWhereWithAggregatesInput | ScriptureCitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScriptureCitation"> | number
    reference?: StringWithAggregatesFilter<"ScriptureCitation"> | string
    summary?: StringWithAggregatesFilter<"ScriptureCitation"> | string
    weeklyId?: IntWithAggregatesFilter<"ScriptureCitation"> | number
  }

  export type UserProfileCreateInput = {
    profilePic?: string | null
    tags?: UserProfileCreatetagsInput | string[]
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: number
    profilePic?: string | null
    tags?: UserProfileCreatetagsInput | string[]
  }

  export type UserProfileUpdateInput = {
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: UserProfileUpdatetagsInput | string[]
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: UserProfileUpdatetagsInput | string[]
  }

  export type UserProfileCreateManyInput = {
    userId: number
    profilePic?: string | null
    tags?: UserProfileCreatetagsInput | string[]
  }

  export type UserProfileUpdateManyMutationInput = {
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: UserProfileUpdatetagsInput | string[]
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: UserProfileUpdatetagsInput | string[]
  }

  export type UserCreateInput = {
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionCreateNestedManyWithoutAuthorInput
    replies?: ReplyCreateNestedManyWithoutAuthorInput
    essays?: EssayCreateNestedManyWithoutAuthorInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionUncheckedCreateNestedManyWithoutAuthorInput
    replies?: ReplyUncheckedCreateNestedManyWithoutAuthorInput
    essays?: EssayUncheckedCreateNestedManyWithoutAuthorInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUpdateManyWithoutAuthorNestedInput
    essays?: EssayUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUncheckedUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutAuthorNestedInput
    essays?: EssayUncheckedUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReplyCreateInput = {
    text: string
    title: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRepliesInput
    discussion: DiscussionCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutChildrenInput
    children?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    text: string
    title: string
    authorId: number
    discussionId: number
    createdAt?: Date | string
    parentId?: number | null
    children?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRepliesNestedInput
    discussion?: DiscussionUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutChildrenNestedInput
    children?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyCreateManyInput = {
    id?: number
    text: string
    title: string
    authorId: number
    discussionId: number
    createdAt?: Date | string
    parentId?: number | null
  }

  export type ReplyUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DiscussionCreateInput = {
    text: string
    title: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutDiscussionsInput
    replies?: ReplyCreateNestedManyWithoutDiscussionInput
  }

  export type DiscussionUncheckedCreateInput = {
    id?: number
    text: string
    authorId: number
    title: string
    createdAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutDiscussionInput
  }

  export type DiscussionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
    replies?: ReplyUpdateManyWithoutDiscussionNestedInput
  }

  export type DiscussionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutDiscussionNestedInput
  }

  export type DiscussionCreateManyInput = {
    id?: number
    text: string
    authorId: number
    title: string
    createdAt?: Date | string
  }

  export type DiscussionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyCreateInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
    citations?: ScriptureCitationCreateNestedManyWithoutWeeklyInput
    featuredEssays?: EssayCreateNestedManyWithoutFeaturedInInput
  }

  export type WeeklyUncheckedCreateInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
    citations?: ScriptureCitationUncheckedCreateNestedManyWithoutWeeklyInput
    featuredEssays?: EssayUncheckedCreateNestedManyWithoutFeaturedInInput
  }

  export type WeeklyUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
    citations?: ScriptureCitationUpdateManyWithoutWeeklyNestedInput
    featuredEssays?: EssayUpdateManyWithoutFeaturedInNestedInput
  }

  export type WeeklyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
    citations?: ScriptureCitationUncheckedUpdateManyWithoutWeeklyNestedInput
    featuredEssays?: EssayUncheckedUpdateManyWithoutFeaturedInNestedInput
  }

  export type WeeklyCreateManyInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
  }

  export type WeeklyUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
  }

  export type EssayCreateInput = {
    title: string
    category: string
    text: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutEssaysInput
    featuredIn?: WeeklyCreateNestedManyWithoutFeaturedEssaysInput
  }

  export type EssayUncheckedCreateInput = {
    id?: number
    title: string
    category: string
    text: string
    createdAt?: Date | string
    authorId: number
    featuredIn?: WeeklyUncheckedCreateNestedManyWithoutFeaturedEssaysInput
  }

  export type EssayUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutEssaysNestedInput
    featuredIn?: WeeklyUpdateManyWithoutFeaturedEssaysNestedInput
  }

  export type EssayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    featuredIn?: WeeklyUncheckedUpdateManyWithoutFeaturedEssaysNestedInput
  }

  export type EssayCreateManyInput = {
    id?: number
    title: string
    category: string
    text: string
    createdAt?: Date | string
    authorId: number
  }

  export type EssayUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ScriptureCitationCreateInput = {
    reference: string
    summary: string
    weekly: WeeklyCreateNestedOneWithoutCitationsInput
  }

  export type ScriptureCitationUncheckedCreateInput = {
    id?: number
    reference: string
    summary: string
    weeklyId: number
  }

  export type ScriptureCitationUpdateInput = {
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    weekly?: WeeklyUpdateOneRequiredWithoutCitationsNestedInput
  }

  export type ScriptureCitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    weeklyId?: IntFieldUpdateOperationsInput | number
  }

  export type ScriptureCitationCreateManyInput = {
    id?: number
    reference: string
    summary: string
    weeklyId: number
  }

  export type ScriptureCitationUpdateManyMutationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type ScriptureCitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    weeklyId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    profilePic?: SortOrder
    tags?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    profilePic?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    profilePic?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DiscussionListRelationFilter = {
    every?: DiscussionWhereInput
    some?: DiscussionWhereInput
    none?: DiscussionWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type EssayListRelationFilter = {
    every?: EssayWhereInput
    some?: EssayWhereInput
    none?: EssayWhereInput
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type DiscussionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EssayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiscussionScalarRelationFilter = {
    is?: DiscussionWhereInput
    isNot?: DiscussionWhereInput
  }

  export type ReplyNullableScalarRelationFilter = {
    is?: ReplyWhereInput | null
    isNot?: ReplyWhereInput | null
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type ReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    parentId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    createdAt?: SortOrder
    parentId?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    discussionId?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DiscussionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type DiscussionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type ScriptureCitationListRelationFilter = {
    every?: ScriptureCitationWhereInput
    some?: ScriptureCitationWhereInput
    none?: ScriptureCitationWhereInput
  }

  export type ScriptureCitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyCountOrderByAggregateInput = {
    id?: SortOrder
    saintName?: SortOrder
    saintDescription?: SortOrder
    saintFeastDay?: SortOrder
    featuredScriptureRef?: SortOrder
    featuredScriptureSummary?: SortOrder
    discussionTitle?: SortOrder
    discussionDescription?: SortOrder
    discussionImage?: SortOrder
    discussionCloses?: SortOrder
  }

  export type WeeklyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeeklyMaxOrderByAggregateInput = {
    id?: SortOrder
    saintName?: SortOrder
    saintDescription?: SortOrder
    saintFeastDay?: SortOrder
    featuredScriptureRef?: SortOrder
    featuredScriptureSummary?: SortOrder
    discussionTitle?: SortOrder
    discussionDescription?: SortOrder
    discussionImage?: SortOrder
    discussionCloses?: SortOrder
  }

  export type WeeklyMinOrderByAggregateInput = {
    id?: SortOrder
    saintName?: SortOrder
    saintDescription?: SortOrder
    saintFeastDay?: SortOrder
    featuredScriptureRef?: SortOrder
    featuredScriptureSummary?: SortOrder
    discussionTitle?: SortOrder
    discussionDescription?: SortOrder
    discussionImage?: SortOrder
    discussionCloses?: SortOrder
  }

  export type WeeklySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeeklyListRelationFilter = {
    every?: WeeklyWhereInput
    some?: WeeklyWhereInput
    none?: WeeklyWhereInput
  }

  export type WeeklyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EssayCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type EssayAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type EssayMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type EssayMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type EssaySumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type WeeklyScalarRelationFilter = {
    is?: WeeklyWhereInput
    isNot?: WeeklyWhereInput
  }

  export type ScriptureCitationCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    summary?: SortOrder
    weeklyId?: SortOrder
  }

  export type ScriptureCitationAvgOrderByAggregateInput = {
    id?: SortOrder
    weeklyId?: SortOrder
  }

  export type ScriptureCitationMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    summary?: SortOrder
    weeklyId?: SortOrder
  }

  export type ScriptureCitationMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    summary?: SortOrder
    weeklyId?: SortOrder
  }

  export type ScriptureCitationSumOrderByAggregateInput = {
    id?: SortOrder
    weeklyId?: SortOrder
  }

  export type UserProfileCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserProfileUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiscussionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DiscussionCreateWithoutAuthorInput, DiscussionUncheckedCreateWithoutAuthorInput> | DiscussionCreateWithoutAuthorInput[] | DiscussionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutAuthorInput | DiscussionCreateOrConnectWithoutAuthorInput[]
    createMany?: DiscussionCreateManyAuthorInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type ReplyCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReplyCreateWithoutAuthorInput, ReplyUncheckedCreateWithoutAuthorInput> | ReplyCreateWithoutAuthorInput[] | ReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput | ReplyCreateOrConnectWithoutAuthorInput[]
    createMany?: ReplyCreateManyAuthorInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type EssayCreateNestedManyWithoutAuthorInput = {
    create?: XOR<EssayCreateWithoutAuthorInput, EssayUncheckedCreateWithoutAuthorInput> | EssayCreateWithoutAuthorInput[] | EssayUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutAuthorInput | EssayCreateOrConnectWithoutAuthorInput[]
    createMany?: EssayCreateManyAuthorInputEnvelope
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type DiscussionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DiscussionCreateWithoutAuthorInput, DiscussionUncheckedCreateWithoutAuthorInput> | DiscussionCreateWithoutAuthorInput[] | DiscussionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutAuthorInput | DiscussionCreateOrConnectWithoutAuthorInput[]
    createMany?: DiscussionCreateManyAuthorInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReplyCreateWithoutAuthorInput, ReplyUncheckedCreateWithoutAuthorInput> | ReplyCreateWithoutAuthorInput[] | ReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput | ReplyCreateOrConnectWithoutAuthorInput[]
    createMany?: ReplyCreateManyAuthorInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type EssayUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<EssayCreateWithoutAuthorInput, EssayUncheckedCreateWithoutAuthorInput> | EssayCreateWithoutAuthorInput[] | EssayUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutAuthorInput | EssayCreateOrConnectWithoutAuthorInput[]
    createMany?: EssayCreateManyAuthorInputEnvelope
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DiscussionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DiscussionCreateWithoutAuthorInput, DiscussionUncheckedCreateWithoutAuthorInput> | DiscussionCreateWithoutAuthorInput[] | DiscussionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutAuthorInput | DiscussionCreateOrConnectWithoutAuthorInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutAuthorInput | DiscussionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DiscussionCreateManyAuthorInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutAuthorInput | DiscussionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutAuthorInput | DiscussionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type ReplyUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReplyCreateWithoutAuthorInput, ReplyUncheckedCreateWithoutAuthorInput> | ReplyCreateWithoutAuthorInput[] | ReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput | ReplyCreateOrConnectWithoutAuthorInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutAuthorInput | ReplyUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReplyCreateManyAuthorInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutAuthorInput | ReplyUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutAuthorInput | ReplyUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type EssayUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<EssayCreateWithoutAuthorInput, EssayUncheckedCreateWithoutAuthorInput> | EssayCreateWithoutAuthorInput[] | EssayUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutAuthorInput | EssayCreateOrConnectWithoutAuthorInput[]
    upsert?: EssayUpsertWithWhereUniqueWithoutAuthorInput | EssayUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: EssayCreateManyAuthorInputEnvelope
    set?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    disconnect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    delete?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    update?: EssayUpdateWithWhereUniqueWithoutAuthorInput | EssayUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: EssayUpdateManyWithWhereWithoutAuthorInput | EssayUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: EssayScalarWhereInput | EssayScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type DiscussionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DiscussionCreateWithoutAuthorInput, DiscussionUncheckedCreateWithoutAuthorInput> | DiscussionCreateWithoutAuthorInput[] | DiscussionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutAuthorInput | DiscussionCreateOrConnectWithoutAuthorInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutAuthorInput | DiscussionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DiscussionCreateManyAuthorInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutAuthorInput | DiscussionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutAuthorInput | DiscussionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReplyCreateWithoutAuthorInput, ReplyUncheckedCreateWithoutAuthorInput> | ReplyCreateWithoutAuthorInput[] | ReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutAuthorInput | ReplyCreateOrConnectWithoutAuthorInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutAuthorInput | ReplyUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReplyCreateManyAuthorInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutAuthorInput | ReplyUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutAuthorInput | ReplyUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type EssayUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<EssayCreateWithoutAuthorInput, EssayUncheckedCreateWithoutAuthorInput> | EssayCreateWithoutAuthorInput[] | EssayUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutAuthorInput | EssayCreateOrConnectWithoutAuthorInput[]
    upsert?: EssayUpsertWithWhereUniqueWithoutAuthorInput | EssayUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: EssayCreateManyAuthorInputEnvelope
    set?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    disconnect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    delete?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    update?: EssayUpdateWithWhereUniqueWithoutAuthorInput | EssayUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: EssayUpdateManyWithWhereWithoutAuthorInput | EssayUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: EssayScalarWhereInput | EssayScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutRepliesInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type DiscussionCreateNestedOneWithoutRepliesInput = {
    create?: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: DiscussionCreateOrConnectWithoutRepliesInput
    connect?: DiscussionWhereUniqueInput
  }

  export type ReplyCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ReplyCreateWithoutChildrenInput, ReplyUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutChildrenInput
    connect?: ReplyWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutParentInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    upsert?: UserUpsertWithoutRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepliesInput, UserUpdateWithoutRepliesInput>, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type DiscussionUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: DiscussionCreateOrConnectWithoutRepliesInput
    upsert?: DiscussionUpsertWithoutRepliesInput
    connect?: DiscussionWhereUniqueInput
    update?: XOR<XOR<DiscussionUpdateToOneWithWhereWithoutRepliesInput, DiscussionUpdateWithoutRepliesInput>, DiscussionUncheckedUpdateWithoutRepliesInput>
  }

  export type ReplyUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ReplyCreateWithoutChildrenInput, ReplyUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutChildrenInput
    upsert?: ReplyUpsertWithoutChildrenInput
    disconnect?: ReplyWhereInput | boolean
    delete?: ReplyWhereInput | boolean
    connect?: ReplyWhereUniqueInput
    update?: XOR<XOR<ReplyUpdateToOneWithWhereWithoutChildrenInput, ReplyUpdateWithoutChildrenInput>, ReplyUncheckedUpdateWithoutChildrenInput>
  }

  export type ReplyUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutParentInput | ReplyUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutParentInput | ReplyUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutParentInput | ReplyUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReplyUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutParentInput | ReplyUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutParentInput | ReplyUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutParentInput | ReplyUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput
    connect?: UserWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutDiscussionInput = {
    create?: XOR<ReplyCreateWithoutDiscussionInput, ReplyUncheckedCreateWithoutDiscussionInput> | ReplyCreateWithoutDiscussionInput[] | ReplyUncheckedCreateWithoutDiscussionInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscussionInput | ReplyCreateOrConnectWithoutDiscussionInput[]
    createMany?: ReplyCreateManyDiscussionInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutDiscussionInput = {
    create?: XOR<ReplyCreateWithoutDiscussionInput, ReplyUncheckedCreateWithoutDiscussionInput> | ReplyCreateWithoutDiscussionInput[] | ReplyUncheckedCreateWithoutDiscussionInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscussionInput | ReplyCreateOrConnectWithoutDiscussionInput[]
    createMany?: ReplyCreateManyDiscussionInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput
    upsert?: UserUpsertWithoutDiscussionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiscussionsInput, UserUpdateWithoutDiscussionsInput>, UserUncheckedUpdateWithoutDiscussionsInput>
  }

  export type ReplyUpdateManyWithoutDiscussionNestedInput = {
    create?: XOR<ReplyCreateWithoutDiscussionInput, ReplyUncheckedCreateWithoutDiscussionInput> | ReplyCreateWithoutDiscussionInput[] | ReplyUncheckedCreateWithoutDiscussionInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscussionInput | ReplyCreateOrConnectWithoutDiscussionInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutDiscussionInput | ReplyUpsertWithWhereUniqueWithoutDiscussionInput[]
    createMany?: ReplyCreateManyDiscussionInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutDiscussionInput | ReplyUpdateWithWhereUniqueWithoutDiscussionInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutDiscussionInput | ReplyUpdateManyWithWhereWithoutDiscussionInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutDiscussionNestedInput = {
    create?: XOR<ReplyCreateWithoutDiscussionInput, ReplyUncheckedCreateWithoutDiscussionInput> | ReplyCreateWithoutDiscussionInput[] | ReplyUncheckedCreateWithoutDiscussionInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscussionInput | ReplyCreateOrConnectWithoutDiscussionInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutDiscussionInput | ReplyUpsertWithWhereUniqueWithoutDiscussionInput[]
    createMany?: ReplyCreateManyDiscussionInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutDiscussionInput | ReplyUpdateWithWhereUniqueWithoutDiscussionInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutDiscussionInput | ReplyUpdateManyWithWhereWithoutDiscussionInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ScriptureCitationCreateNestedManyWithoutWeeklyInput = {
    create?: XOR<ScriptureCitationCreateWithoutWeeklyInput, ScriptureCitationUncheckedCreateWithoutWeeklyInput> | ScriptureCitationCreateWithoutWeeklyInput[] | ScriptureCitationUncheckedCreateWithoutWeeklyInput[]
    connectOrCreate?: ScriptureCitationCreateOrConnectWithoutWeeklyInput | ScriptureCitationCreateOrConnectWithoutWeeklyInput[]
    createMany?: ScriptureCitationCreateManyWeeklyInputEnvelope
    connect?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
  }

  export type EssayCreateNestedManyWithoutFeaturedInInput = {
    create?: XOR<EssayCreateWithoutFeaturedInInput, EssayUncheckedCreateWithoutFeaturedInInput> | EssayCreateWithoutFeaturedInInput[] | EssayUncheckedCreateWithoutFeaturedInInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutFeaturedInInput | EssayCreateOrConnectWithoutFeaturedInInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
  }

  export type ScriptureCitationUncheckedCreateNestedManyWithoutWeeklyInput = {
    create?: XOR<ScriptureCitationCreateWithoutWeeklyInput, ScriptureCitationUncheckedCreateWithoutWeeklyInput> | ScriptureCitationCreateWithoutWeeklyInput[] | ScriptureCitationUncheckedCreateWithoutWeeklyInput[]
    connectOrCreate?: ScriptureCitationCreateOrConnectWithoutWeeklyInput | ScriptureCitationCreateOrConnectWithoutWeeklyInput[]
    createMany?: ScriptureCitationCreateManyWeeklyInputEnvelope
    connect?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
  }

  export type EssayUncheckedCreateNestedManyWithoutFeaturedInInput = {
    create?: XOR<EssayCreateWithoutFeaturedInInput, EssayUncheckedCreateWithoutFeaturedInInput> | EssayCreateWithoutFeaturedInInput[] | EssayUncheckedCreateWithoutFeaturedInInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutFeaturedInInput | EssayCreateOrConnectWithoutFeaturedInInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
  }

  export type ScriptureCitationUpdateManyWithoutWeeklyNestedInput = {
    create?: XOR<ScriptureCitationCreateWithoutWeeklyInput, ScriptureCitationUncheckedCreateWithoutWeeklyInput> | ScriptureCitationCreateWithoutWeeklyInput[] | ScriptureCitationUncheckedCreateWithoutWeeklyInput[]
    connectOrCreate?: ScriptureCitationCreateOrConnectWithoutWeeklyInput | ScriptureCitationCreateOrConnectWithoutWeeklyInput[]
    upsert?: ScriptureCitationUpsertWithWhereUniqueWithoutWeeklyInput | ScriptureCitationUpsertWithWhereUniqueWithoutWeeklyInput[]
    createMany?: ScriptureCitationCreateManyWeeklyInputEnvelope
    set?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    disconnect?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    delete?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    connect?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    update?: ScriptureCitationUpdateWithWhereUniqueWithoutWeeklyInput | ScriptureCitationUpdateWithWhereUniqueWithoutWeeklyInput[]
    updateMany?: ScriptureCitationUpdateManyWithWhereWithoutWeeklyInput | ScriptureCitationUpdateManyWithWhereWithoutWeeklyInput[]
    deleteMany?: ScriptureCitationScalarWhereInput | ScriptureCitationScalarWhereInput[]
  }

  export type EssayUpdateManyWithoutFeaturedInNestedInput = {
    create?: XOR<EssayCreateWithoutFeaturedInInput, EssayUncheckedCreateWithoutFeaturedInInput> | EssayCreateWithoutFeaturedInInput[] | EssayUncheckedCreateWithoutFeaturedInInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutFeaturedInInput | EssayCreateOrConnectWithoutFeaturedInInput[]
    upsert?: EssayUpsertWithWhereUniqueWithoutFeaturedInInput | EssayUpsertWithWhereUniqueWithoutFeaturedInInput[]
    set?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    disconnect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    delete?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    update?: EssayUpdateWithWhereUniqueWithoutFeaturedInInput | EssayUpdateWithWhereUniqueWithoutFeaturedInInput[]
    updateMany?: EssayUpdateManyWithWhereWithoutFeaturedInInput | EssayUpdateManyWithWhereWithoutFeaturedInInput[]
    deleteMany?: EssayScalarWhereInput | EssayScalarWhereInput[]
  }

  export type ScriptureCitationUncheckedUpdateManyWithoutWeeklyNestedInput = {
    create?: XOR<ScriptureCitationCreateWithoutWeeklyInput, ScriptureCitationUncheckedCreateWithoutWeeklyInput> | ScriptureCitationCreateWithoutWeeklyInput[] | ScriptureCitationUncheckedCreateWithoutWeeklyInput[]
    connectOrCreate?: ScriptureCitationCreateOrConnectWithoutWeeklyInput | ScriptureCitationCreateOrConnectWithoutWeeklyInput[]
    upsert?: ScriptureCitationUpsertWithWhereUniqueWithoutWeeklyInput | ScriptureCitationUpsertWithWhereUniqueWithoutWeeklyInput[]
    createMany?: ScriptureCitationCreateManyWeeklyInputEnvelope
    set?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    disconnect?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    delete?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    connect?: ScriptureCitationWhereUniqueInput | ScriptureCitationWhereUniqueInput[]
    update?: ScriptureCitationUpdateWithWhereUniqueWithoutWeeklyInput | ScriptureCitationUpdateWithWhereUniqueWithoutWeeklyInput[]
    updateMany?: ScriptureCitationUpdateManyWithWhereWithoutWeeklyInput | ScriptureCitationUpdateManyWithWhereWithoutWeeklyInput[]
    deleteMany?: ScriptureCitationScalarWhereInput | ScriptureCitationScalarWhereInput[]
  }

  export type EssayUncheckedUpdateManyWithoutFeaturedInNestedInput = {
    create?: XOR<EssayCreateWithoutFeaturedInInput, EssayUncheckedCreateWithoutFeaturedInInput> | EssayCreateWithoutFeaturedInInput[] | EssayUncheckedCreateWithoutFeaturedInInput[]
    connectOrCreate?: EssayCreateOrConnectWithoutFeaturedInInput | EssayCreateOrConnectWithoutFeaturedInInput[]
    upsert?: EssayUpsertWithWhereUniqueWithoutFeaturedInInput | EssayUpsertWithWhereUniqueWithoutFeaturedInInput[]
    set?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    disconnect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    delete?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    connect?: EssayWhereUniqueInput | EssayWhereUniqueInput[]
    update?: EssayUpdateWithWhereUniqueWithoutFeaturedInInput | EssayUpdateWithWhereUniqueWithoutFeaturedInInput[]
    updateMany?: EssayUpdateManyWithWhereWithoutFeaturedInInput | EssayUpdateManyWithWhereWithoutFeaturedInInput[]
    deleteMany?: EssayScalarWhereInput | EssayScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEssaysInput = {
    create?: XOR<UserCreateWithoutEssaysInput, UserUncheckedCreateWithoutEssaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutEssaysInput
    connect?: UserWhereUniqueInput
  }

  export type WeeklyCreateNestedManyWithoutFeaturedEssaysInput = {
    create?: XOR<WeeklyCreateWithoutFeaturedEssaysInput, WeeklyUncheckedCreateWithoutFeaturedEssaysInput> | WeeklyCreateWithoutFeaturedEssaysInput[] | WeeklyUncheckedCreateWithoutFeaturedEssaysInput[]
    connectOrCreate?: WeeklyCreateOrConnectWithoutFeaturedEssaysInput | WeeklyCreateOrConnectWithoutFeaturedEssaysInput[]
    connect?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
  }

  export type WeeklyUncheckedCreateNestedManyWithoutFeaturedEssaysInput = {
    create?: XOR<WeeklyCreateWithoutFeaturedEssaysInput, WeeklyUncheckedCreateWithoutFeaturedEssaysInput> | WeeklyCreateWithoutFeaturedEssaysInput[] | WeeklyUncheckedCreateWithoutFeaturedEssaysInput[]
    connectOrCreate?: WeeklyCreateOrConnectWithoutFeaturedEssaysInput | WeeklyCreateOrConnectWithoutFeaturedEssaysInput[]
    connect?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEssaysNestedInput = {
    create?: XOR<UserCreateWithoutEssaysInput, UserUncheckedCreateWithoutEssaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutEssaysInput
    upsert?: UserUpsertWithoutEssaysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEssaysInput, UserUpdateWithoutEssaysInput>, UserUncheckedUpdateWithoutEssaysInput>
  }

  export type WeeklyUpdateManyWithoutFeaturedEssaysNestedInput = {
    create?: XOR<WeeklyCreateWithoutFeaturedEssaysInput, WeeklyUncheckedCreateWithoutFeaturedEssaysInput> | WeeklyCreateWithoutFeaturedEssaysInput[] | WeeklyUncheckedCreateWithoutFeaturedEssaysInput[]
    connectOrCreate?: WeeklyCreateOrConnectWithoutFeaturedEssaysInput | WeeklyCreateOrConnectWithoutFeaturedEssaysInput[]
    upsert?: WeeklyUpsertWithWhereUniqueWithoutFeaturedEssaysInput | WeeklyUpsertWithWhereUniqueWithoutFeaturedEssaysInput[]
    set?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    disconnect?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    delete?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    connect?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    update?: WeeklyUpdateWithWhereUniqueWithoutFeaturedEssaysInput | WeeklyUpdateWithWhereUniqueWithoutFeaturedEssaysInput[]
    updateMany?: WeeklyUpdateManyWithWhereWithoutFeaturedEssaysInput | WeeklyUpdateManyWithWhereWithoutFeaturedEssaysInput[]
    deleteMany?: WeeklyScalarWhereInput | WeeklyScalarWhereInput[]
  }

  export type WeeklyUncheckedUpdateManyWithoutFeaturedEssaysNestedInput = {
    create?: XOR<WeeklyCreateWithoutFeaturedEssaysInput, WeeklyUncheckedCreateWithoutFeaturedEssaysInput> | WeeklyCreateWithoutFeaturedEssaysInput[] | WeeklyUncheckedCreateWithoutFeaturedEssaysInput[]
    connectOrCreate?: WeeklyCreateOrConnectWithoutFeaturedEssaysInput | WeeklyCreateOrConnectWithoutFeaturedEssaysInput[]
    upsert?: WeeklyUpsertWithWhereUniqueWithoutFeaturedEssaysInput | WeeklyUpsertWithWhereUniqueWithoutFeaturedEssaysInput[]
    set?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    disconnect?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    delete?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    connect?: WeeklyWhereUniqueInput | WeeklyWhereUniqueInput[]
    update?: WeeklyUpdateWithWhereUniqueWithoutFeaturedEssaysInput | WeeklyUpdateWithWhereUniqueWithoutFeaturedEssaysInput[]
    updateMany?: WeeklyUpdateManyWithWhereWithoutFeaturedEssaysInput | WeeklyUpdateManyWithWhereWithoutFeaturedEssaysInput[]
    deleteMany?: WeeklyScalarWhereInput | WeeklyScalarWhereInput[]
  }

  export type WeeklyCreateNestedOneWithoutCitationsInput = {
    create?: XOR<WeeklyCreateWithoutCitationsInput, WeeklyUncheckedCreateWithoutCitationsInput>
    connectOrCreate?: WeeklyCreateOrConnectWithoutCitationsInput
    connect?: WeeklyWhereUniqueInput
  }

  export type WeeklyUpdateOneRequiredWithoutCitationsNestedInput = {
    create?: XOR<WeeklyCreateWithoutCitationsInput, WeeklyUncheckedCreateWithoutCitationsInput>
    connectOrCreate?: WeeklyCreateOrConnectWithoutCitationsInput
    upsert?: WeeklyUpsertWithoutCitationsInput
    connect?: WeeklyWhereUniqueInput
    update?: XOR<XOR<WeeklyUpdateToOneWithWhereWithoutCitationsInput, WeeklyUpdateWithoutCitationsInput>, WeeklyUncheckedUpdateWithoutCitationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutProfileInput = {
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionCreateNestedManyWithoutAuthorInput
    replies?: ReplyCreateNestedManyWithoutAuthorInput
    essays?: EssayCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionUncheckedCreateNestedManyWithoutAuthorInput
    replies?: ReplyUncheckedCreateNestedManyWithoutAuthorInput
    essays?: EssayUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUpdateManyWithoutAuthorNestedInput
    essays?: EssayUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUncheckedUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutAuthorNestedInput
    essays?: EssayUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DiscussionCreateWithoutAuthorInput = {
    text: string
    title: string
    createdAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutDiscussionInput
  }

  export type DiscussionUncheckedCreateWithoutAuthorInput = {
    id?: number
    text: string
    title: string
    createdAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutDiscussionInput
  }

  export type DiscussionCreateOrConnectWithoutAuthorInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutAuthorInput, DiscussionUncheckedCreateWithoutAuthorInput>
  }

  export type DiscussionCreateManyAuthorInputEnvelope = {
    data: DiscussionCreateManyAuthorInput | DiscussionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutAuthorInput = {
    text: string
    title: string
    createdAt?: Date | string
    discussion: DiscussionCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutChildrenInput
    children?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateWithoutAuthorInput = {
    id?: number
    text: string
    title: string
    discussionId: number
    createdAt?: Date | string
    parentId?: number | null
    children?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyCreateOrConnectWithoutAuthorInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutAuthorInput, ReplyUncheckedCreateWithoutAuthorInput>
  }

  export type ReplyCreateManyAuthorInputEnvelope = {
    data: ReplyCreateManyAuthorInput | ReplyCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EssayCreateWithoutAuthorInput = {
    title: string
    category: string
    text: string
    createdAt?: Date | string
    featuredIn?: WeeklyCreateNestedManyWithoutFeaturedEssaysInput
  }

  export type EssayUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    category: string
    text: string
    createdAt?: Date | string
    featuredIn?: WeeklyUncheckedCreateNestedManyWithoutFeaturedEssaysInput
  }

  export type EssayCreateOrConnectWithoutAuthorInput = {
    where: EssayWhereUniqueInput
    create: XOR<EssayCreateWithoutAuthorInput, EssayUncheckedCreateWithoutAuthorInput>
  }

  export type EssayCreateManyAuthorInputEnvelope = {
    data: EssayCreateManyAuthorInput | EssayCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    profilePic?: string | null
    tags?: UserProfileCreatetagsInput | string[]
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    profilePic?: string | null
    tags?: UserProfileCreatetagsInput | string[]
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type DiscussionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutAuthorInput, DiscussionUncheckedUpdateWithoutAuthorInput>
    create: XOR<DiscussionCreateWithoutAuthorInput, DiscussionUncheckedCreateWithoutAuthorInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutAuthorInput, DiscussionUncheckedUpdateWithoutAuthorInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutAuthorInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type DiscussionScalarWhereInput = {
    AND?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    OR?: DiscussionScalarWhereInput[]
    NOT?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    id?: IntFilter<"Discussion"> | number
    text?: StringFilter<"Discussion"> | string
    authorId?: IntFilter<"Discussion"> | number
    title?: StringFilter<"Discussion"> | string
    createdAt?: DateTimeFilter<"Discussion"> | Date | string
  }

  export type ReplyUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutAuthorInput, ReplyUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReplyCreateWithoutAuthorInput, ReplyUncheckedCreateWithoutAuthorInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutAuthorInput, ReplyUncheckedUpdateWithoutAuthorInput>
  }

  export type ReplyUpdateManyWithWhereWithoutAuthorInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    OR?: ReplyScalarWhereInput[]
    NOT?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    id?: IntFilter<"Reply"> | number
    text?: StringFilter<"Reply"> | string
    title?: StringFilter<"Reply"> | string
    authorId?: IntFilter<"Reply"> | number
    discussionId?: IntFilter<"Reply"> | number
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    parentId?: IntNullableFilter<"Reply"> | number | null
  }

  export type EssayUpsertWithWhereUniqueWithoutAuthorInput = {
    where: EssayWhereUniqueInput
    update: XOR<EssayUpdateWithoutAuthorInput, EssayUncheckedUpdateWithoutAuthorInput>
    create: XOR<EssayCreateWithoutAuthorInput, EssayUncheckedCreateWithoutAuthorInput>
  }

  export type EssayUpdateWithWhereUniqueWithoutAuthorInput = {
    where: EssayWhereUniqueInput
    data: XOR<EssayUpdateWithoutAuthorInput, EssayUncheckedUpdateWithoutAuthorInput>
  }

  export type EssayUpdateManyWithWhereWithoutAuthorInput = {
    where: EssayScalarWhereInput
    data: XOR<EssayUpdateManyMutationInput, EssayUncheckedUpdateManyWithoutAuthorInput>
  }

  export type EssayScalarWhereInput = {
    AND?: EssayScalarWhereInput | EssayScalarWhereInput[]
    OR?: EssayScalarWhereInput[]
    NOT?: EssayScalarWhereInput | EssayScalarWhereInput[]
    id?: IntFilter<"Essay"> | number
    title?: StringFilter<"Essay"> | string
    category?: StringFilter<"Essay"> | string
    text?: StringFilter<"Essay"> | string
    createdAt?: DateTimeFilter<"Essay"> | Date | string
    authorId?: IntFilter<"Essay"> | number
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: UserProfileUpdatetagsInput | string[]
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: UserProfileUpdatetagsInput | string[]
  }

  export type UserCreateWithoutRepliesInput = {
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionCreateNestedManyWithoutAuthorInput
    essays?: EssayCreateNestedManyWithoutAuthorInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRepliesInput = {
    id?: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionUncheckedCreateNestedManyWithoutAuthorInput
    essays?: EssayUncheckedCreateNestedManyWithoutAuthorInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
  }

  export type DiscussionCreateWithoutRepliesInput = {
    text: string
    title: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutDiscussionsInput
  }

  export type DiscussionUncheckedCreateWithoutRepliesInput = {
    id?: number
    text: string
    authorId: number
    title: string
    createdAt?: Date | string
  }

  export type DiscussionCreateOrConnectWithoutRepliesInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
  }

  export type ReplyCreateWithoutChildrenInput = {
    text: string
    title: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRepliesInput
    discussion: DiscussionCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutChildrenInput
  }

  export type ReplyUncheckedCreateWithoutChildrenInput = {
    id?: number
    text: string
    title: string
    authorId: number
    discussionId: number
    createdAt?: Date | string
    parentId?: number | null
  }

  export type ReplyCreateOrConnectWithoutChildrenInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutChildrenInput, ReplyUncheckedCreateWithoutChildrenInput>
  }

  export type ReplyCreateWithoutParentInput = {
    text: string
    title: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRepliesInput
    discussion: DiscussionCreateNestedOneWithoutRepliesInput
    children?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateWithoutParentInput = {
    id?: number
    text: string
    title: string
    authorId: number
    discussionId: number
    createdAt?: Date | string
    children?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyCreateOrConnectWithoutParentInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput>
  }

  export type ReplyCreateManyParentInputEnvelope = {
    data: ReplyCreateManyParentInput | ReplyCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRepliesInput = {
    update: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateWithoutRepliesInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUpdateManyWithoutAuthorNestedInput
    essays?: EssayUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUncheckedUpdateManyWithoutAuthorNestedInput
    essays?: EssayUncheckedUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DiscussionUpsertWithoutRepliesInput = {
    update: XOR<DiscussionUpdateWithoutRepliesInput, DiscussionUncheckedUpdateWithoutRepliesInput>
    create: XOR<DiscussionCreateWithoutRepliesInput, DiscussionUncheckedCreateWithoutRepliesInput>
    where?: DiscussionWhereInput
  }

  export type DiscussionUpdateToOneWithWhereWithoutRepliesInput = {
    where?: DiscussionWhereInput
    data: XOR<DiscussionUpdateWithoutRepliesInput, DiscussionUncheckedUpdateWithoutRepliesInput>
  }

  export type DiscussionUpdateWithoutRepliesInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpsertWithoutChildrenInput = {
    update: XOR<ReplyUpdateWithoutChildrenInput, ReplyUncheckedUpdateWithoutChildrenInput>
    create: XOR<ReplyCreateWithoutChildrenInput, ReplyUncheckedCreateWithoutChildrenInput>
    where?: ReplyWhereInput
  }

  export type ReplyUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ReplyWhereInput
    data: XOR<ReplyUpdateWithoutChildrenInput, ReplyUncheckedUpdateWithoutChildrenInput>
  }

  export type ReplyUpdateWithoutChildrenInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRepliesNestedInput
    discussion?: DiscussionUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutChildrenNestedInput
  }

  export type ReplyUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReplyUpsertWithWhereUniqueWithoutParentInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutParentInput, ReplyUncheckedUpdateWithoutParentInput>
    create: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutParentInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutParentInput, ReplyUncheckedUpdateWithoutParentInput>
  }

  export type ReplyUpdateManyWithWhereWithoutParentInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutParentInput>
  }

  export type UserCreateWithoutDiscussionsInput = {
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    replies?: ReplyCreateNestedManyWithoutAuthorInput
    essays?: EssayCreateNestedManyWithoutAuthorInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiscussionsInput = {
    id?: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    replies?: ReplyUncheckedCreateNestedManyWithoutAuthorInput
    essays?: EssayUncheckedCreateNestedManyWithoutAuthorInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiscussionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
  }

  export type ReplyCreateWithoutDiscussionInput = {
    text: string
    title: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutChildrenInput
    children?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateWithoutDiscussionInput = {
    id?: number
    text: string
    title: string
    authorId: number
    createdAt?: Date | string
    parentId?: number | null
    children?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyCreateOrConnectWithoutDiscussionInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutDiscussionInput, ReplyUncheckedCreateWithoutDiscussionInput>
  }

  export type ReplyCreateManyDiscussionInputEnvelope = {
    data: ReplyCreateManyDiscussionInput | ReplyCreateManyDiscussionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDiscussionsInput = {
    update: XOR<UserUpdateWithoutDiscussionsInput, UserUncheckedUpdateWithoutDiscussionsInput>
    create: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiscussionsInput, UserUncheckedUpdateWithoutDiscussionsInput>
  }

  export type UserUpdateWithoutDiscussionsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    replies?: ReplyUpdateManyWithoutAuthorNestedInput
    essays?: EssayUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiscussionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    replies?: ReplyUncheckedUpdateManyWithoutAuthorNestedInput
    essays?: EssayUncheckedUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutDiscussionInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutDiscussionInput, ReplyUncheckedUpdateWithoutDiscussionInput>
    create: XOR<ReplyCreateWithoutDiscussionInput, ReplyUncheckedCreateWithoutDiscussionInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutDiscussionInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutDiscussionInput, ReplyUncheckedUpdateWithoutDiscussionInput>
  }

  export type ReplyUpdateManyWithWhereWithoutDiscussionInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutDiscussionInput>
  }

  export type ScriptureCitationCreateWithoutWeeklyInput = {
    reference: string
    summary: string
  }

  export type ScriptureCitationUncheckedCreateWithoutWeeklyInput = {
    id?: number
    reference: string
    summary: string
  }

  export type ScriptureCitationCreateOrConnectWithoutWeeklyInput = {
    where: ScriptureCitationWhereUniqueInput
    create: XOR<ScriptureCitationCreateWithoutWeeklyInput, ScriptureCitationUncheckedCreateWithoutWeeklyInput>
  }

  export type ScriptureCitationCreateManyWeeklyInputEnvelope = {
    data: ScriptureCitationCreateManyWeeklyInput | ScriptureCitationCreateManyWeeklyInput[]
    skipDuplicates?: boolean
  }

  export type EssayCreateWithoutFeaturedInInput = {
    title: string
    category: string
    text: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutEssaysInput
  }

  export type EssayUncheckedCreateWithoutFeaturedInInput = {
    id?: number
    title: string
    category: string
    text: string
    createdAt?: Date | string
    authorId: number
  }

  export type EssayCreateOrConnectWithoutFeaturedInInput = {
    where: EssayWhereUniqueInput
    create: XOR<EssayCreateWithoutFeaturedInInput, EssayUncheckedCreateWithoutFeaturedInInput>
  }

  export type ScriptureCitationUpsertWithWhereUniqueWithoutWeeklyInput = {
    where: ScriptureCitationWhereUniqueInput
    update: XOR<ScriptureCitationUpdateWithoutWeeklyInput, ScriptureCitationUncheckedUpdateWithoutWeeklyInput>
    create: XOR<ScriptureCitationCreateWithoutWeeklyInput, ScriptureCitationUncheckedCreateWithoutWeeklyInput>
  }

  export type ScriptureCitationUpdateWithWhereUniqueWithoutWeeklyInput = {
    where: ScriptureCitationWhereUniqueInput
    data: XOR<ScriptureCitationUpdateWithoutWeeklyInput, ScriptureCitationUncheckedUpdateWithoutWeeklyInput>
  }

  export type ScriptureCitationUpdateManyWithWhereWithoutWeeklyInput = {
    where: ScriptureCitationScalarWhereInput
    data: XOR<ScriptureCitationUpdateManyMutationInput, ScriptureCitationUncheckedUpdateManyWithoutWeeklyInput>
  }

  export type ScriptureCitationScalarWhereInput = {
    AND?: ScriptureCitationScalarWhereInput | ScriptureCitationScalarWhereInput[]
    OR?: ScriptureCitationScalarWhereInput[]
    NOT?: ScriptureCitationScalarWhereInput | ScriptureCitationScalarWhereInput[]
    id?: IntFilter<"ScriptureCitation"> | number
    reference?: StringFilter<"ScriptureCitation"> | string
    summary?: StringFilter<"ScriptureCitation"> | string
    weeklyId?: IntFilter<"ScriptureCitation"> | number
  }

  export type EssayUpsertWithWhereUniqueWithoutFeaturedInInput = {
    where: EssayWhereUniqueInput
    update: XOR<EssayUpdateWithoutFeaturedInInput, EssayUncheckedUpdateWithoutFeaturedInInput>
    create: XOR<EssayCreateWithoutFeaturedInInput, EssayUncheckedCreateWithoutFeaturedInInput>
  }

  export type EssayUpdateWithWhereUniqueWithoutFeaturedInInput = {
    where: EssayWhereUniqueInput
    data: XOR<EssayUpdateWithoutFeaturedInInput, EssayUncheckedUpdateWithoutFeaturedInInput>
  }

  export type EssayUpdateManyWithWhereWithoutFeaturedInInput = {
    where: EssayScalarWhereInput
    data: XOR<EssayUpdateManyMutationInput, EssayUncheckedUpdateManyWithoutFeaturedInInput>
  }

  export type UserCreateWithoutEssaysInput = {
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionCreateNestedManyWithoutAuthorInput
    replies?: ReplyCreateNestedManyWithoutAuthorInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEssaysInput = {
    id?: number
    userName: string
    userEmail: string
    passwordHash: string
    createdAt?: Date | string
    isAdmin?: boolean
    discussions?: DiscussionUncheckedCreateNestedManyWithoutAuthorInput
    replies?: ReplyUncheckedCreateNestedManyWithoutAuthorInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEssaysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEssaysInput, UserUncheckedCreateWithoutEssaysInput>
  }

  export type WeeklyCreateWithoutFeaturedEssaysInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
    citations?: ScriptureCitationCreateNestedManyWithoutWeeklyInput
  }

  export type WeeklyUncheckedCreateWithoutFeaturedEssaysInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
    citations?: ScriptureCitationUncheckedCreateNestedManyWithoutWeeklyInput
  }

  export type WeeklyCreateOrConnectWithoutFeaturedEssaysInput = {
    where: WeeklyWhereUniqueInput
    create: XOR<WeeklyCreateWithoutFeaturedEssaysInput, WeeklyUncheckedCreateWithoutFeaturedEssaysInput>
  }

  export type UserUpsertWithoutEssaysInput = {
    update: XOR<UserUpdateWithoutEssaysInput, UserUncheckedUpdateWithoutEssaysInput>
    create: XOR<UserCreateWithoutEssaysInput, UserUncheckedCreateWithoutEssaysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEssaysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEssaysInput, UserUncheckedUpdateWithoutEssaysInput>
  }

  export type UserUpdateWithoutEssaysInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEssaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    discussions?: DiscussionUncheckedUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutAuthorNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WeeklyUpsertWithWhereUniqueWithoutFeaturedEssaysInput = {
    where: WeeklyWhereUniqueInput
    update: XOR<WeeklyUpdateWithoutFeaturedEssaysInput, WeeklyUncheckedUpdateWithoutFeaturedEssaysInput>
    create: XOR<WeeklyCreateWithoutFeaturedEssaysInput, WeeklyUncheckedCreateWithoutFeaturedEssaysInput>
  }

  export type WeeklyUpdateWithWhereUniqueWithoutFeaturedEssaysInput = {
    where: WeeklyWhereUniqueInput
    data: XOR<WeeklyUpdateWithoutFeaturedEssaysInput, WeeklyUncheckedUpdateWithoutFeaturedEssaysInput>
  }

  export type WeeklyUpdateManyWithWhereWithoutFeaturedEssaysInput = {
    where: WeeklyScalarWhereInput
    data: XOR<WeeklyUpdateManyMutationInput, WeeklyUncheckedUpdateManyWithoutFeaturedEssaysInput>
  }

  export type WeeklyScalarWhereInput = {
    AND?: WeeklyScalarWhereInput | WeeklyScalarWhereInput[]
    OR?: WeeklyScalarWhereInput[]
    NOT?: WeeklyScalarWhereInput | WeeklyScalarWhereInput[]
    id?: IntFilter<"Weekly"> | number
    saintName?: StringFilter<"Weekly"> | string
    saintDescription?: StringFilter<"Weekly"> | string
    saintFeastDay?: StringFilter<"Weekly"> | string
    featuredScriptureRef?: StringFilter<"Weekly"> | string
    featuredScriptureSummary?: StringFilter<"Weekly"> | string
    discussionTitle?: StringFilter<"Weekly"> | string
    discussionDescription?: StringFilter<"Weekly"> | string
    discussionImage?: StringFilter<"Weekly"> | string
    discussionCloses?: StringFilter<"Weekly"> | string
  }

  export type WeeklyCreateWithoutCitationsInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
    featuredEssays?: EssayCreateNestedManyWithoutFeaturedInInput
  }

  export type WeeklyUncheckedCreateWithoutCitationsInput = {
    id?: number
    saintName?: string
    saintDescription?: string
    saintFeastDay?: string
    featuredScriptureRef?: string
    featuredScriptureSummary?: string
    discussionTitle?: string
    discussionDescription?: string
    discussionImage?: string
    discussionCloses?: string
    featuredEssays?: EssayUncheckedCreateNestedManyWithoutFeaturedInInput
  }

  export type WeeklyCreateOrConnectWithoutCitationsInput = {
    where: WeeklyWhereUniqueInput
    create: XOR<WeeklyCreateWithoutCitationsInput, WeeklyUncheckedCreateWithoutCitationsInput>
  }

  export type WeeklyUpsertWithoutCitationsInput = {
    update: XOR<WeeklyUpdateWithoutCitationsInput, WeeklyUncheckedUpdateWithoutCitationsInput>
    create: XOR<WeeklyCreateWithoutCitationsInput, WeeklyUncheckedCreateWithoutCitationsInput>
    where?: WeeklyWhereInput
  }

  export type WeeklyUpdateToOneWithWhereWithoutCitationsInput = {
    where?: WeeklyWhereInput
    data: XOR<WeeklyUpdateWithoutCitationsInput, WeeklyUncheckedUpdateWithoutCitationsInput>
  }

  export type WeeklyUpdateWithoutCitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
    featuredEssays?: EssayUpdateManyWithoutFeaturedInNestedInput
  }

  export type WeeklyUncheckedUpdateWithoutCitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
    featuredEssays?: EssayUncheckedUpdateManyWithoutFeaturedInNestedInput
  }

  export type DiscussionCreateManyAuthorInput = {
    id?: number
    text: string
    title: string
    createdAt?: Date | string
  }

  export type ReplyCreateManyAuthorInput = {
    id?: number
    text: string
    title: string
    discussionId: number
    createdAt?: Date | string
    parentId?: number | null
  }

  export type EssayCreateManyAuthorInput = {
    id?: number
    title: string
    category: string
    text: string
    createdAt?: Date | string
  }

  export type DiscussionUpdateWithoutAuthorInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutDiscussionNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutDiscussionNestedInput
  }

  export type DiscussionUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutAuthorInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discussion?: DiscussionUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutChildrenNestedInput
    children?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EssayUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featuredIn?: WeeklyUpdateManyWithoutFeaturedEssaysNestedInput
  }

  export type EssayUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featuredIn?: WeeklyUncheckedUpdateManyWithoutFeaturedEssaysNestedInput
  }

  export type EssayUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyParentInput = {
    id?: number
    text: string
    title: string
    authorId: number
    discussionId: number
    createdAt?: Date | string
  }

  export type ReplyUpdateWithoutParentInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRepliesNestedInput
    discussion?: DiscussionUpdateOneRequiredWithoutRepliesNestedInput
    children?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    discussionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyDiscussionInput = {
    id?: number
    text: string
    title: string
    authorId: number
    createdAt?: Date | string
    parentId?: number | null
  }

  export type ReplyUpdateWithoutDiscussionInput = {
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutChildrenNestedInput
    children?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateWithoutDiscussionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutDiscussionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScriptureCitationCreateManyWeeklyInput = {
    id?: number
    reference: string
    summary: string
  }

  export type ScriptureCitationUpdateWithoutWeeklyInput = {
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type ScriptureCitationUncheckedUpdateWithoutWeeklyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type ScriptureCitationUncheckedUpdateManyWithoutWeeklyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type EssayUpdateWithoutFeaturedInInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutEssaysNestedInput
  }

  export type EssayUncheckedUpdateWithoutFeaturedInInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type EssayUncheckedUpdateManyWithoutFeaturedInInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyUpdateWithoutFeaturedEssaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
    citations?: ScriptureCitationUpdateManyWithoutWeeklyNestedInput
  }

  export type WeeklyUncheckedUpdateWithoutFeaturedEssaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
    citations?: ScriptureCitationUncheckedUpdateManyWithoutWeeklyNestedInput
  }

  export type WeeklyUncheckedUpdateManyWithoutFeaturedEssaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    saintName?: StringFieldUpdateOperationsInput | string
    saintDescription?: StringFieldUpdateOperationsInput | string
    saintFeastDay?: StringFieldUpdateOperationsInput | string
    featuredScriptureRef?: StringFieldUpdateOperationsInput | string
    featuredScriptureSummary?: StringFieldUpdateOperationsInput | string
    discussionTitle?: StringFieldUpdateOperationsInput | string
    discussionDescription?: StringFieldUpdateOperationsInput | string
    discussionImage?: StringFieldUpdateOperationsInput | string
    discussionCloses?: StringFieldUpdateOperationsInput | string
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