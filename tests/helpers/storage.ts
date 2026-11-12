/**
 * tests/helpers/storage.ts
 * 
 * In-memory Mock Storage implementation for Web Storage APIs (sessionStorage, localStorage)
 * Supports isolated test environments, quota simulation, and session resets.
 */

export class MockStorage implements Storage {
  private store: Map<string, string> = new Map();
  public throwOnSetItem: boolean = false;

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    if (this.throwOnSetItem) {
      const err = new Error('QuotaExceededError: DOM Exception 22');
      err.name = 'QuotaExceededError';
      throw err;
    }
    this.store.set(String(key), String(value));
  }
}

export function resetStorage(): void {
  if (typeof globalThis.sessionStorage !== 'undefined') {
    globalThis.sessionStorage.clear();
  }
  if (typeof globalThis.localStorage !== 'undefined') {
    globalThis.localStorage.clear();
  }
}
