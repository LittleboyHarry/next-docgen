// !! NO EDIT ME unless you understand what happen !!

import InternalApp from "../internal/App";

export default function App({ Component, pageProps }: any) {
  return (
    <InternalApp>
      <Component {...pageProps} />
    </InternalApp>
  );
}
