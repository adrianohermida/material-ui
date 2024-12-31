import * as React from 'react';
import { useRouter } from 'next/router';
import { debounce } from '@mui/material/utils';
import useEventCallback from '@mui/utils/useEventCallback';

const QUERY_UPDATE_WAIT_MS = 220;

/**
 * Similar to `React.useState`, but it syncs back the current state to a query
 * parameter in the URL, therefore it only supports strings. Wrap the result with
 * parse/stringify logic if more complex values are needed.
 *
 * REMARK: this doesn't listen for router changes (yet) to update back the state.
 */
export default function useQueryParameterState(
  name: string,
  initialValue = '',
): [string, (newValue: string) => void] {
  const initialValueRef = React.useRef(initialValue);
  const router = useRouter();
  const queryParamValue = router.query[name];
  const urlValue = Array.isArray(queryParamValue) ? queryParamValue[0] : queryParamValue;
  const [state, setState] = React.useState(urlValue || initialValue);

  const setUrlValue = React.useMemo(
    () =>
      debounce((newValue = '') => {
        const query = new URLSearchParams(window.location.search);
        if (newValue && newValue !== initialValueRef.current) {
          query.set(name, newValue);
        } else {
          query.delete(name);
        }
        const newSearch = query.toString();
        if (window.location.search !== newSearch) {
          router.replace(
            {
              pathname: router.pathname,
              // TODO: this resets the scroll position, even though we have scroll: false
              // hash: window.location.hash,
              search: newSearch,
            },
            undefined,
            {
              scroll: false,
              shallow: true,
            },
          );
        }
      }, QUERY_UPDATE_WAIT_MS),
    [name, router],
  );

  React.useEffect(
    () => () => {
      setUrlValue.clear();
    },
    [setUrlValue],
  );

  // TODO remove useEventCallback with App Router migration
  // https://github.com/vercel/next.js/discussions/45969 see for why
  const setUserState = useEventCallback(
    (newValue: string) => {
      setUrlValue(newValue);
      setState(newValue);
    });

  // Make sure to initialize the state when route params are only available client-side
  const isInitialized = React.useRef(false);
  React.useEffect(() => {
    if (isInitialized.current) {
      return;
    }

    isInitialized.current = true;
    const query = new URLSearchParams(window.location.search);
    const value = query.get(name);
    setState(value || initialValue);
  }, [name, initialValue]);

  return [state, setUserState];
}
