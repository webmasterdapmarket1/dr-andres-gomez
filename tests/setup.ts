/**
 * tests/setup.ts
 * 
 * Global test environment initialization and polyfills
 * Compatible with Happy-DOM, JSDOM, and native Node.js environments.
 */

import { MockStorage } from './helpers/storage.ts';

// Ensure standard global window / globalThis storage APIs
if (typeof globalThis.sessionStorage === 'undefined') {
  const sessionInstance = new MockStorage();
  Object.defineProperty(globalThis, 'sessionStorage', {
    value: sessionInstance,
    writable: true,
    configurable: true,
  });
}

if (typeof globalThis.localStorage === 'undefined') {
  const localInstance = new MockStorage();
  Object.defineProperty(globalThis, 'localStorage', {
    value: localInstance,
    writable: true,
    configurable: true,
  });
}

// Window polyfills for browser simulation
const win = (typeof window !== 'undefined' ? window : globalThis) as any;

if (!win.matchMedia) {
  Object.defineProperty(win, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

if (!win.scrollTo) {
  Object.defineProperty(win, 'scrollTo', {
    writable: true,
    configurable: true,
    value: () => {},
  });
}

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!win.IntersectionObserver) {
  Object.defineProperty(win, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!win.ResizeObserver) {
  Object.defineProperty(win, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: MockResizeObserver,
  });
}

// Automatic storage reset hook
if (typeof (globalThis as any).beforeEach === 'function') {
  (globalThis as any).beforeEach(() => {
    globalThis.sessionStorage.clear();
    globalThis.localStorage.clear();
  });
}
