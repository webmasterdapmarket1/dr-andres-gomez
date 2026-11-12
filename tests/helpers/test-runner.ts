/**
 * tests/helpers/test-runner.ts
 * 
 * Unified Test Runner and Assertion Engine
 * Natively compatible with Vitest and Node.js (v24+ node:test).
 */

import { describe as nDescribe, it as nIt, beforeEach as nBeforeEach } from 'node:test';
import assert from 'node:assert';
import '../setup.ts';

export const describe = nDescribe;
export const it = nIt;
export const beforeEach = nBeforeEach;

export function expect(actual: any) {
  return {
    toBe(expected: any) {
      assert.strictEqual(actual, expected, `Expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);
    },
    toEqual(expected: any) {
      assert.deepStrictEqual(actual, expected, `Expected deep equality: ${JSON.stringify(actual)} vs ${JSON.stringify(expected)}`);
    },
    toContain(item: any) {
      if (typeof actual === 'string' || Array.isArray(actual)) {
        assert.ok(
          actual.includes(item),
          `Expected ${JSON.stringify(actual)} to contain ${JSON.stringify(item)}`
        );
      } else if (actual instanceof Set || actual instanceof Map) {
        assert.ok(actual.has(item), `Expected collection to contain ${JSON.stringify(item)}`);
      } else {
        assert.fail(`Actual value is not a string, array, Set or Map: ${typeof actual}`);
      }
    },
    toHaveLength(len: number) {
      assert.strictEqual(
        actual?.length,
        len,
        `Expected length ${len}, but got ${actual?.length}`
      );
    },
    toBeTruthy() {
      assert.ok(Boolean(actual), `Expected value to be truthy, got: ${actual}`);
    },
    toBeFalsy() {
      assert.ok(!actual, `Expected value to be falsy, got: ${actual}`);
    },
    toBeDefined() {
      assert.notStrictEqual(actual, undefined, `Expected value to be defined, got undefined`);
    },
    toBeUndefined() {
      assert.strictEqual(actual, undefined, `Expected value to be undefined, got: ${actual}`);
    },
    toBeNull() {
      assert.strictEqual(actual, null, `Expected value to be null, got: ${actual}`);
    },
    toBeGreaterThan(expected: number) {
      assert.ok(actual > expected, `Expected ${actual} > ${expected}`);
    },
    toBeGreaterThanOrEqual(expected: number) {
      assert.ok(actual >= expected, `Expected ${actual} >= ${expected}`);
    },
    toBeLessThan(expected: number) {
      assert.ok(actual < expected, `Expected ${actual} < ${expected}`);
    },
    toBeLessThanOrEqual(expected: number) {
      assert.ok(actual <= expected, `Expected ${actual} <= ${expected}`);
    },
    toMatch(regex: RegExp | string) {
      const reg = typeof regex === 'string' ? new RegExp(regex) : regex;
      assert.match(String(actual), reg, `Expected '${actual}' to match pattern ${reg}`);
    },
    toThrow(expectedError?: string | RegExp) {
      if (typeof actual !== 'function') {
        assert.fail(`Actual value is not a function: ${typeof actual}`);
      }
      let threw = false;
      let caughtErr: any = null;
      try {
        actual();
      } catch (err: any) {
        threw = true;
        caughtErr = err;
      }
      assert.ok(threw, `Expected function to throw, but it executed without error.`);
      if (expectedError) {
        if (typeof expectedError === 'string') {
          assert.ok(
            caughtErr?.message?.includes(expectedError) || caughtErr?.name?.includes(expectedError),
            `Expected error to include '${expectedError}', got: '${caughtErr?.message}'`
          );
        } else {
          assert.match(String(caughtErr?.message || caughtErr), expectedError);
        }
      }
    },
    get not() {
      return {
        toBe(expected: any) {
          assert.notStrictEqual(actual, expected, `Expected ${JSON.stringify(actual)} not to be ${JSON.stringify(expected)}`);
        },
        toEqual(expected: any) {
          assert.notDeepStrictEqual(actual, expected, `Expected ${JSON.stringify(actual)} not to deep-equal ${JSON.stringify(expected)}`);
        },
        toContain(item: any) {
          if (typeof actual === 'string' || Array.isArray(actual)) {
            assert.ok(
              !actual.includes(item),
              `Expected ${JSON.stringify(actual)} NOT to contain ${JSON.stringify(item)}`
            );
          } else if (actual instanceof Set || actual instanceof Map) {
            assert.ok(!actual.has(item), `Expected collection NOT to contain ${JSON.stringify(item)}`);
          }
        },
        toHaveLength(len: number) {
          assert.notStrictEqual(actual?.length, len, `Expected length NOT to be ${len}`);
        },
        toBeTruthy() {
          assert.ok(!actual, `Expected value NOT to be truthy, got: ${actual}`);
        },
        toBeFalsy() {
          assert.ok(Boolean(actual), `Expected value NOT to be falsy, got: ${actual}`);
        },
        toBeDefined() {
          assert.strictEqual(actual, undefined, `Expected value NOT to be defined`);
        },
        toBeUndefined() {
          assert.notStrictEqual(actual, undefined, `Expected value NOT to be undefined`);
        },
        toBeNull() {
          assert.notStrictEqual(actual, null, `Expected value NOT to be null`);
        },
        toMatch(regex: RegExp | string) {
          const reg = typeof regex === 'string' ? new RegExp(regex) : regex;
          assert.ok(!reg.test(String(actual)), `Expected '${actual}' NOT to match pattern ${reg}`);
        },
        toThrow() {
          if (typeof actual !== 'function') return;
          try {
            actual();
          } catch (err: any) {
            assert.fail(`Expected function NOT to throw, but it threw: ${err.message}`);
          }
        }
      };
    }
  };
}
