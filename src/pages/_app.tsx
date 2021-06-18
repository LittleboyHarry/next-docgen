import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import "gutenberg-css/dist/gutenberg.css";
import "gutenberg-css/dist/themes/modern.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism.css";

const background = "#f7f7f7";

const GlobalStyle = createGlobalStyle`
body{
  font-size:12pt;
}

pre{
  border-radius: 0.2cm;
  background: ${background} !important;
  font-size:0.9em;

  &>code{
    display: inline-block;
    font-size: inherit;
  }
}

blockquote {
  background: ${background} !important;
  margin-left: 0;
  margin-right: 0;
}

@media screen {
  html {
    background: gray !important;
  }

  body {
    width: 21cm;
    margin-top: 3cm;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23) !important;
  }
}
`;

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    (async function () {
      document.body.classList.add("line-numbers");
      const Prism = await import("prismjs");
      // @ts-ignore
      await import("prismjs/plugins/line-numbers/prism-line-numbers.js");
      Prism.highlightAll();
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
