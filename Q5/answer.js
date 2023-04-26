function deepEquals(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a !== "object" || a === null || b === null) {
    return a === b;
  }
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (let key in a) {
    if (!deepEquals(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

// Primitives
deepEquals(42, 42);
deepEquals(42, "42");
deepEquals("hello", "hello");
deepEquals("hello", "world");
deepEquals(true, true);
deepEquals(true, false);
deepEquals(undefined, undefined);
deepEquals(undefined, null);
deepEquals(Symbol("foo"), Symbol("foo"));

// Objects
deepEquals({}, {});
deepEquals({ a: 1, b: "hello", c: true }, { a: 1, b: "hello", c: true });
deepEquals({ a: 1, b: "hello", c: true }, { c: true, a: 1, b: "hello" });
deepEquals({ a: 1, b: "hello", c: true }, { a: 1, b: "world", c: true });
deepEquals(
  { a: 1, b: [2, 3, 4], c: { d: 5 } },
  { a: 1, b: [2, 3, 4], c: { d: 5 } }
);
deepEquals(
  { a: 1, b: [2, 3, 4], c: { d: 5 } },
  { a: 1, b: [2, 3, 4], c: { d: 6 } }
);
deepEquals([], []);
deepEquals([1, "hello", true], [1, "hello", true]);
deepEquals([1, "hello", true], [true, "hello", 1]);
deepEquals([1, "hello", true], [1, "world", true]);
