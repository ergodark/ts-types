[![npm
version](https://badge.fury.io/js/%40ergodark%2Ftypes.svg)](https://badge.fury.io/js/%40ergodark%2Ftypes)

# @ergodark/types

This package contains various utility and helper types that can be imported by a
TypeScript project.

This package only contains TypeScript types.

## Install

```sh
npm install @ergodark/types
```

## Usage

You can use this library's types in your TypeScript projects like so:

```TypeScript
import type { TypeNameHere } from '@ergodark/types'

const variable: TypeNameHere;
```

```TypeScript
import type * as ErgoDark from '@ergodark/types'

const variable: ErgoDark.TypeNameHere;
```

## Type Glossary

This library provides the following types:

+ [Primitive](#primitive)
+ [Falsy](#falsy)
+ [Nullish](#nullish)
+ [DeepPartial&lt;T&gt;](#deeppartialt)
+ [AnyKey](#anykey)
+ [AnyFunction](#anyfunction)
+ [AnyConstructor](#anyconstructor)
+ [AnyClass](#anyclass)
+ [AnyRecord](#anyrecord)
+ [Awaited&lt;T&gt;](#awaitedt)
+ [HttpStatusCode](#httpstatuscode)

### Primitive

Represents all "primitive" types. Specifically: `string`, `number`, `bigint`,
`boolean`, `symbol`, `null`, and `undefined`.

```TypeScript
import type { Primitive } from '@ergodark/types'

let primitive: Primitive = "yes";
primitive = 1;
primitive = Symbol('yes');
primitive = null;
primitive = new Date(); // <== TypeScript error
```

### Falsy

Represents all "falsy" types. Specifically: `false`, `''`, `0`, `null`, and
`undefined`.

```TypeScript
import type { Falsy } from '@ergodark/types'

let falsy: Falsy = "";
falsy = 0;
falsy = false;
falsy = null;
falsy = true; // <== TypeScript error
```

### Nullish

Represents all "nullish" types. Specifically: `null` and `undefined`.

```TypeScript
import type { Nullish } from '@ergodark/types'

let nullish: Nullish = null;
nullish = undefined;
nullish = true; // <== TypeScript error
```

### DeepPartial&lt;T&gt;

TypeScript's
[Partial<T>](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
utility type but applied recursively to every property and any sub-properties.

```TypeScript
import type { DeepPartial } from '@ergodark/types'

type T = { a: string, b: { c: { d: number }}};

let t:T = { a: "enough!", b: { c: { d: 1 }}};
let t_bad:T = { a: "enough?" }; // <== TypeScript error

let t2:Partial<T> = { a: "enough?" };
let t2_bad:Partial<T> = { a: "enough?", b: {}}; // <== TypeScript error

let t3:DeepPartial<T> = { a: "enough?" };
let t3_ok:DeepPartial<T> = { a: "enough?", b: {}};
```

### AnyKey

Represents any possible object key.

```TypeScript
import type { AnyKey } from '@ergodark/types'

let key: AnyKey = "key";
key = Symbol('key');
key = true; // <== TypeScript error
```

### AnyFunction

Represents any possible function.

```TypeScript
import type { AnyFunction } from '@ergodark/types'

let fn: AnyFunction = () => true;
fn = Symbol('key'); // <== TypeScript error
```

### AnyConstructor

Represents any possible constructor.

```TypeScript
import type { AnyConstructor } from '@ergodark/types'

let myConstructor: AnyConstructor = Date;
myConstructor = Symbol('key'); // <== TypeScript error
```

### AnyClass

Represents any possible class.

```TypeScript
import type { AnyClass } from '@ergodark/types'

let MyClass: AnyClass = class { bark() { return 'woof!' }};
MyClass = Symbol('key'); // <== TypeScript error
```

### AnyRecord

Represents any object with string keys. Alias of `Record<string, unknown>`.

```TypeScript
import type { AnyRecord } from '@ergodark/types'

let record: AnyRecord = { a: 1 };
record = Symbol('key'); // <== TypeScript error
```

### Awaited&lt;T&gt;

Recursively unwrap the return value of a resolved promise.

```TypeScript
import type { Awaited } from '@ergodark/types'

const p1 = new Promise<boolean>(resolve => resolve(true));
const p2 = new Promise<typeof p1>(resolve => resolve(p1));

// Type of `p2` is Promise<Promise<boolean>> ...
let result: Awaited<typeof p2>; // <== However, type of `result` is boolean
```

### HttpStatusCode

Represents any valid (and a few invalid) [HTTP status
code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

```TypeScript
import fetch from 'isomorphic-unfetch'
import type { HttpStatusCode } from '@ergodark/types'

const res = await fetch('https://google.com');
const status: HttpStatusCode = res.status;
```

## Contributing

Issues and pull requests are welcome! In lieu of a formal styleguide, take care
to maintain the existing coding style.

Please test your code!

## Release History

* 1.0.x Initial release
