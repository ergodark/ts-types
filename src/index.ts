/* eslint-disable @typescript-eslint/no-explicit-any */
// * Several of these types were inspired by tsdef:
// * https://github.com/joonhocho/tsdef/blob/master/src/index.ts

export type Primitive =
    | string
    | number
    | bigint
    | boolean
    | symbol
    | null
    | undefined;

export type Falsy = false | '' | 0 | null | undefined;
export type Nullish = null | undefined;

// Make all properties optional recursively including nested objects. Keep in
// mind that this should be used on json / plain objects only. Otherwise, it
// will make class methods optional as well.
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I>
        ? Array<DeepPartial<I>>
        : DeepPartial<T[P]>
};

// Matches string | number | symbol
export type AnyKey = string | number | symbol;

// Matches any function
export type AnyFunction = (...args: any[]) => unknown;

// Matches any constructor
export type AnyConstructor = new (...args: any[]) => unknown;

// Matches any class
export interface AnyClass {
    prototype: unknown,
    new (...args: any[]): unknown
}

// Sugar for Record<string, unknown>
export type AnyRecord = Record<string, unknown>;

// TODO:
export type Awaited<T> = T extends PromiseLike<infer U>
  ? { 0: Awaited<U>; 1: U }[T extends PromiseLike<unknown> ? 0 : 1]
  : T;
// TODO: enable this instead of the above when typescript 4.1 is out
//export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
// TODO:

export type HttpStatusCode =
      100 | 101 | 102

    | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226
    | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308

    | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418
    | 419 | 420 | 420 | 422 | 423 | 424 | 424 | 425 | 426 | 428 | 429 | 431 | 444 | 449 | 450 | 451 | 451 | 494 | 495
    | 496 | 497 | 499

    | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511 | 555 | 598 | 599;
