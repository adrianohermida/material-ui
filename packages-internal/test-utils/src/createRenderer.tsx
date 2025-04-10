/* eslint-env mocha */
import createEmotionCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import {
  buildQueries,
  cleanup,
  prettyDOM,
  queries,
  RenderResult,
  act as rtlAct,
  fireEvent as rtlFireEvent,
  screen as rtlScreen,
  Screen,
  render as testingLibraryRender,
  within,
} from '@testing-library/react/pure';
import { userEvent } from '@testing-library/user-event';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useFakeTimers } from 'sinon';
import reactMajor from './reactMajor';

function queryAllDescriptionsOf(baseElement: HTMLElement, element: Element): HTMLElement[] {
  const ariaDescribedBy = element.getAttribute('aria-describedby');
  if (ariaDescribedBy === null) {
    return [];
  }
  return ariaDescribedBy
    .split(' ')
    .map((id) => {
      return document.getElementById(id);
    })
    .filter((maybeElement): maybeElement is HTMLElement => {
      return maybeElement !== null && baseElement.contains(maybeElement);
    });
}

const [
  queryDescriptionOf,
  getAllDescriptionsOf,
  getDescriptionOf,
  findAllDescriptionsOf,
  findDescriptionOf,
] = buildQueries<[Element]>(
  queryAllDescriptionsOf,
  function getMultipleError() {
    return `Found multiple descriptions.`;
  },
  function getMissingError() {
    return `Found no describing element.`;
  },
);

const customQueries = {
  queryDescriptionOf,
  queryAllDescriptionsOf,
  getDescriptionOf,
  getAllDescriptionsOf,
  findDescriptionOf,
  findAllDescriptionsOf,
};

interface RenderConfiguration {
  /**
   * https://testing-library.com/docs/react-testing-library/api#container
   */
  container?: HTMLElement;
  /**
   * if true does not cleanup before mount
   */
  disableUnmount?: boolean;
  /**
   * wrap in React.StrictMode?
   */
  strict?: boolean;
  /**
   * Set to `true` if the test fails due to [Strict Effects](https://github.com/reactwg/react-18/discussions/19).
   */
  strictEffects?: boolean;
  wrapper: React.JSXElementConstructor<{ children?: React.ReactNode }>;
}

interface ClientRenderConfiguration extends RenderConfiguration {
  /**
   * https://testing-library.com/docs/react-testing-library/api#hydrate
   */
  hydrate: boolean;
}

interface ServerRenderConfiguration extends RenderConfiguration {
  container: HTMLElement;
}

export type RenderOptions = Partial<RenderConfiguration>;

export interface MuiRenderResult extends RenderResult<typeof queries & typeof customQueries> {
  user: ReturnType<typeof userEvent.setup>;
  forceUpdate(): void;
  /**
   * convenience helper. Better than repeating all props.
   */
  setProps(props: object): void;
}

export interface MuiRenderToStringResult {
  container: HTMLElement;
  hydrate(): MuiRenderResult;
}

interface DataAttributes {
  [key: `data-${string}`]: string;
}

function render(
  element: React.ReactElement<DataAttributes>,
  configuration: ClientRenderConfiguration,
): MuiRenderResult {
  const { container, hydrate, wrapper } = configuration;

  const testingLibraryRenderResult = testingLibraryRender(element, {
    container,
    hydrate,
    queries: { ...queries, ...customQueries },
    wrapper,
  });
  const result: MuiRenderResult = {
    ...testingLibraryRenderResult,
    user: userEvent.setup(),
    forceUpdate() {
      testingLibraryRenderResult.rerender(
        React.cloneElement(element, {
          'data-force-update': String(Math.random()),
        }),
      );
    },
    setProps(props) {
      testingLibraryRenderResult.rerender(React.cloneElement(element, props));
    },
  };

  return result;
}

function renderToString(
  element: React.ReactElement<DataAttributes>,
  configuration: ServerRenderConfiguration,
): { container: HTMLElement; hydrate(): MuiRenderResult } {
  const { container, wrapper: Wrapper } = configuration;

  container.innerHTML = ReactDOMServer.renderToString(<Wrapper>{element}</Wrapper>);

  return {
    container,
    hydrate() {
      return render(element, { ...configuration, hydrate: true });
    },
  };
}

export interface Clock {
  /**
   * Runs all timers until there are no more remaining.
   * WARNING: This may cause an infinite loop if a timeout constantly schedules another timeout.
   * Prefer to to run only pending timers with `runToLast` and unmount your component directly.
   */
  runAll(): void;
  /**
   * Runs only the currently pending timers.
   */
  runToLast(): void;
  /**
   * Tick the clock ahead `timeoutMS` milliseconds.
   * @param timeoutMS
   */
  tick(timeoutMS: number): void;
  /**
   * Returns true if we're running with "real" i.e. native timers.
   */
  isReal(): boolean;
  /**
   * Runs the current test suite (i.e. `describe` block) with fake timers.
   */
  withFakeTimers(): void;
  /**
   * Restore the real timer
   */
  restore(): void;
}

export type ClockConfig = undefined | number | Date;

const isVitest =
  // VITEST is present on the environment when not in browser mode.
  process.env.VITEST === 'true' ||
  // VITEST_BROWSER_DEBUG is present on vitest in browser mode.
  typeof process.env.VITEST_BROWSER_DEBUG !== 'undefined';

function createVitestClock(
  defaultMode: 'fake' | 'real',
  config: ClockConfig,
  options: Exclude<Parameters<typeof useFakeTimers>[0], number | Date>,
  vi: any,
): Clock {
  if (defaultMode === 'fake') {
    beforeEach(() => {
      vi.useFakeTimers(options);
      if (config) {
        vi.setSystemTime(config);
      }
    });
    afterEach(() => {
      vi.useRealTimers();
    });
  } else {
    beforeEach(() => {
      if (config) {
        vi.setSystemTime(config);
      }
    });
    afterEach(() => {
      vi.useRealTimers();
    });
  }

  return {
    withFakeTimers: () => {
      beforeEach(() => {
        vi.useFakeTimers(options);
      });
      afterEach(() => {
        vi.useRealTimers();
      });
    },
    runToLast: () => {
      rtlAct(() => {
        vi.runOnlyPendingTimers();
      });
    },
    isReal() {
      return !vi.isFakeTimers();
    },
    restore() {
      vi.useRealTimers();
    },
    tick(timeoutMS: number) {
      rtlAct(() => {
        vi.advanceTimersByTime(timeoutMS);
      });
    },
    runAll() {
      rtlAct(() => {
        vi.runAllTimers();
      });
    },
  };
}

function createClock(
  defaultMode: 'fake' | 'real',
  config: ClockConfig,
  options: Exclude<Parameters<typeof useFakeTimers>[0], number | Date>,
  vi: any,
): Clock {
  if (isVitest) {
    return createVitestClock(defaultMode, config, options, vi);
  }

  let clock: ReturnType<typeof useFakeTimers> | null = null;

  let mode = defaultMode;

  beforeEach(() => {
    if (mode === 'fake') {
      clock = useFakeTimers({
        now: config,
        // useIsFocusVisible schedules a global timer that needs to persist regardless of whether components are mounted or not.
        // Technically we'd want to reset all modules between tests but we don't have that technology.
        // In the meantime just continue to clear native timers like with did for the past years when using `sinon` < 8.
        shouldClearNativeTimers: true,
        ...options,
      });
    }
  });

  afterEach(() => {
    clock?.restore();
    clock = null;
  });

  return {
    tick(timeoutMS: number) {
      if (clock === null) {
        throw new Error(`Can't advance the real clock. Did you mean to call this on fake clock?`);
      }
      rtlAct(() => {
        clock!.tick(timeoutMS);
      });
    },
    runAll() {
      if (clock === null) {
        throw new Error(`Can't advance the real clock. Did you mean to call this on fake clock?`);
      }
      rtlAct(() => {
        clock!.runAll();
      });
    },
    runToLast() {
      if (clock === null) {
        throw new Error(`Can't advance the real clock. Did you mean to call this on fake clock?`);
      }
      rtlAct(() => {
        clock!.runToLast();
      });
    },
    isReal() {
      return setTimeout.hasOwnProperty('clock') === false;
    },
    withFakeTimers() {
      before(() => {
        mode = 'fake';
      });

      after(() => {
        mode = defaultMode;
      });
    },
    restore() {
      clock?.restore();
    },
  };
}

export interface Renderer {
  clock: Clock;
  render(element: React.ReactElement<DataAttributes>, options?: RenderOptions): MuiRenderResult;
  renderToString(
    element: React.ReactElement<DataAttributes>,
    options?: RenderOptions,
  ): MuiRenderToStringResult;
}

export interface CreateRendererOptions extends Pick<RenderOptions, 'strict' | 'strictEffects'> {
  /**
   * @default 'real'
   */
  clock?: 'fake' | 'real';
  clockConfig?: ClockConfig;
  clockOptions?: Parameters<typeof createClock>[2];
  /**
   * Vitest needs to be injected because this file is transpiled to commonjs and vitest is an esm module.
   * @default {}
   */
  vi?: any;
}

export function createRenderer(globalOptions: CreateRendererOptions = {}): Renderer {
  const {
    clock: clockMode = 'real',
    clockConfig,
    strict: globalStrict = true,
    strictEffects: globalStrictEffects = globalStrict,
    vi = (globalThis as any).vi || {},
    clockOptions,
  } = globalOptions;
  // save stack to re-use in test-hooks
  const { stack: createClientRenderStack } = new Error();
  const clock = createClock(clockMode, clockConfig, clockOptions, vi);

  /**
   * Flag whether `createRenderer` was called in a suite i.e. describe() block.
   * For legacy reasons `createRenderer` might accidentally be called in a before(Each) hook.
   */
  let wasCalledInSuite = false;
  before(function beforeHook() {
    wasCalledInSuite = true;
  });

  let emotionCache: import('@emotion/cache').EmotionCache = null!;
  /**
   * target container for SSR
   */
  let serverContainer: HTMLElement;
  /**
   * Flag whether all setup for `configuredClientRender` was completed.
   * For legacy reasons `configuredClientRender` might accidentally be called in a before(Each) hook.
   */
  let prepared = false;
  beforeEach(function beforeEachHook() {
    if (!wasCalledInSuite) {
      const error = new Error(
        'Unable to run `before` hook for `createRenderer`. This usually indicates that `createRenderer` was called in a `before` hook instead of in a `describe()` block.',
      );
      error.stack = createClientRenderStack;
      throw error;
    }

    let id: string | null = null;

    if (isVitest) {
      // @ts-expect-error
      id = expect.getState().currentTestName;
    } else {
      id = this.currentTest?.fullTitle() ?? null;
    }

    if (!id) {
      throw new Error(
        'Unable to find the currently running test. This is a bug with the client-renderer. Please report this issue to a maintainer.',
      );
    }

    emotionCache = createEmotionCache({ key: 'emotion-client-render' });

    serverContainer = document.createElement('div');
    document.body.appendChild(serverContainer);

    prepared = true;
  });

  afterEach(() => {
    if (!clock.isReal()) {
      const error = new Error(
        "Can't cleanup before fake timers are restored.\n" +
          'Be sure to:\n' +
          '  1. Only use `clock` from `createRenderer`.\n' +
          '  2. Call `createRenderer` in a suite and not any test hook (for example `beforeEach`) or test itself (for example `it`).',
      );
      // Use saved stack otherwise the stack trace will not include the test location.
      error.stack = createClientRenderStack;
      throw error;
    }

    cleanup();

    emotionCache.sheet.tags.forEach((styleTag) => {
      styleTag.remove();
    });
    emotionCache = null!;

    serverContainer.remove();
    serverContainer = null!;
  });

  function createWrapper(options: Partial<RenderConfiguration>) {
    const {
      strict = globalStrict,
      strictEffects = globalStrictEffects,
      wrapper: InnerWrapper = React.Fragment,
    } = options;

    const usesLegacyRoot = reactMajor < 18;
    const Mode = strict && (strictEffects || usesLegacyRoot) ? React.StrictMode : React.Fragment;
    return function Wrapper({ children }: { children?: React.ReactNode }) {
      return (
        <Mode>
          <EmotionCacheProvider value={emotionCache}>
            <InnerWrapper>{children}</InnerWrapper>
          </EmotionCacheProvider>
        </Mode>
      );
    };
  }

  return {
    clock,
    render(element: React.ReactElement<DataAttributes>, options: RenderOptions = {}) {
      if (!prepared) {
        throw new Error(
          'Unable to finish setup before `render()` was called. ' +
            'This usually indicates that `render()` was called in a `before()` or `beforeEach` hook. ' +
            'Move the call into each `it()`. Otherwise you cannot run a specific test and we cannot isolate each test.',
        );
      }

      return render(element, {
        ...options,
        hydrate: false,
        wrapper: createWrapper(options),
      });
    },
    renderToString(element: React.ReactElement<DataAttributes>, options: RenderOptions = {}) {
      if (!prepared) {
        throw new Error(
          'Unable to finish setup before `render()` was called. ' +
            'This usually indicates that `render()` was called in a `before()` or `beforeEach` hook. ' +
            'Move the call into each `it()`. Otherwise you cannot run a specific test and we cannot isolate each test.',
        );
      }

      const { container = serverContainer, ...localOptions } = options;
      return renderToString(element, {
        ...localOptions,
        container,
        wrapper: createWrapper(options),
      });
    },
  };
}

const fireEvent = rtlFireEvent;

const originalFireEventKeyDown = rtlFireEvent.keyDown;
fireEvent.keyDown = (desiredTarget, options = {}) => {
  const element = desiredTarget as Element | Document;
  // `element` shouldn't be `document` but we catch this later anyway
  const document = element.ownerDocument || element;
  const target = document.activeElement || document.body || document.documentElement;
  if (target !== element) {
    // see https://www.w3.org/TR/uievents/#keydown
    const error = new Error(
      `\`keydown\` events can only be targeted at the active element which is ${prettyDOM(
        target,
        undefined,
        { maxDepth: 1 },
      )}`,
    );
    // We're only interested in the callsite of fireEvent.keyDown
    error.stack = error
      .stack!.split('\n')
      .filter((line) => !/at Function.key/.test(line))
      .join('\n');
    throw error;
  }

  return originalFireEventKeyDown(element, options);
};

const originalFireEventKeyUp = rtlFireEvent.keyUp;
fireEvent.keyUp = (desiredTarget, options = {}) => {
  const element = desiredTarget as Element | Document;
  // `element` shouldn't be `document` but we catch this later anyway
  const document = element.ownerDocument || element;
  const target = document.activeElement || document.body || document.documentElement;
  if (target !== element) {
    // see https://www.w3.org/TR/uievents/#keyup
    const error = new Error(
      `\`keyup\` events can only be targeted at the active element which is ${prettyDOM(
        target,
        undefined,
        { maxDepth: 1 },
      )}`,
    );
    // We're only interested in the callsite of fireEvent.keyUp
    error.stack = error
      .stack!.split('\n')
      .filter((line) => !/at Function.key/.test(line))
      .join('\n');
    throw error;
  }

  return originalFireEventKeyUp(element, options);
};

export function fireTouchChangedEvent(
  target: Element,
  type: 'touchstart' | 'touchmove' | 'touchend',
  options: { changedTouches: Array<Pick<TouchInit, 'clientX' | 'clientY'>> },
): void {
  const { changedTouches } = options;
  const originalGetBoundingClientRect = target.getBoundingClientRect;
  target.getBoundingClientRect = () => ({
    x: 0,
    y: 0,
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    toJSON() {
      return {
        x: 0,
        y: 0,
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
      };
    },
  });

  const event = new window.TouchEvent(type, {
    bubbles: true,
    cancelable: true,
    composed: true,
    changedTouches: changedTouches.map(
      (opts) =>
        new window.Touch({
          target,
          identifier: 0,
          ...opts,
        }),
    ),
  });

  fireEvent(target, event);
  target.getBoundingClientRect = originalGetBoundingClientRect;
}

function act<T>(callback: () => T | Promise<T>): Promise<T>;
function act(callback: () => void): void;
function act<T>(callback: () => void | T | Promise<T>) {
  return rtlAct(callback);
}

const bodyBoundQueries = within(document.body, { ...queries, ...customQueries });

export * from '@testing-library/react/pure';
export { act, fireEvent };
export const screen: Screen & typeof bodyBoundQueries = { ...rtlScreen, ...bodyBoundQueries };
