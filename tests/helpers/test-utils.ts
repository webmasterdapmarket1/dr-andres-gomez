/**
 * tests/helpers/test-utils.ts
 * 
 * DOM and Opaque-Box UI Helpers
 * Facilitates accessible element querying, event dispatching, and route simulation.
 */

import { MockStorage } from './storage.ts';

export interface SimulatedRoute {
  path: string;
  search?: string;
  state?: any;
}

export class OpaqueBoxHarness {
  public currentRoute: string = '/';
  public queryParams: URLSearchParams = new URLSearchParams();
  public history: string[] = ['/'];
  public historyIndex: number = 0;

  constructor(initialRoute: string = '/') {
    const [pathPart, queryPart] = initialRoute.split('?');
    this.currentRoute = pathPart || '/';
    this.queryParams = new URLSearchParams(queryPart || '');
    this.history = [initialRoute];
    this.historyIndex = 0;
  }

  navigate(to: string): void {
    const [pathPart, queryPart] = to.split('?');
    this.currentRoute = pathPart || '/';
    this.queryParams = new URLSearchParams(queryPart || '');
    this.history = this.history.slice(0, this.historyIndex + 1);
    this.history.push(to);
    this.historyIndex = this.history.length - 1;
  }

  replace(to: string): void {
    const [pathPart, queryPart] = to.split('?');
    this.currentRoute = pathPart || '/';
    this.queryParams = new URLSearchParams(queryPart || '');
    this.history[this.historyIndex] = to;
  }

  back(): void {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const target = this.history[this.historyIndex];
      const [pathPart, queryPart] = target.split('?');
      this.currentRoute = pathPart || '/';
      this.queryParams = new URLSearchParams(queryPart || '');
    }
  }

  forward(): void {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      const target = this.history[this.historyIndex];
      const [pathPart, queryPart] = target.split('?');
      this.currentRoute = pathPart || '/';
      this.queryParams = new URLSearchParams(queryPart || '');
    }
  }
}

export interface DrawerController {
  isOpen: () => boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  handleKeyDown: (key: string) => void;
  getAriaExpanded: () => string;
}

export function createDrawerController(): DrawerController {
  let open = false;
  return {
    isOpen: () => open,
    open: () => { open = true; },
    close: () => { open = false; },
    toggle: () => { open = !open; },
    handleKeyDown: (key: string) => {
      if (key === 'Escape') open = false;
    },
    getAriaExpanded: () => (open ? 'true' : 'false')
  };
}

export interface SubmissionGuard {
  execute: (fn: () => void) => boolean;
  reset: () => void;
  isInFlight: () => boolean;
}

export function createSubmissionGuard(): SubmissionGuard {
  let inFlight = false;
  return {
    execute: (fn: () => void) => {
      if (inFlight) return false;
      inFlight = true;
      fn();
      return true;
    },
    reset: () => {
      inFlight = false;
    },
    isInFlight: () => inFlight
  };
}
