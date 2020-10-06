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
export type AnyFunction = (...args: unknown[]) => unknown;

// Matches any constructor
export type AnyConstructor = new (...args: unknown[]) => unknown;

// Matches any class
export interface AnyClass {
    prototype: unknown,
    new (...args: unknown[]): unknown
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

// ? Export something so the generated file is not empty (eslint complains on
// ? import)
export const __typed = true;
