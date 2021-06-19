// !! NO EDIT ME unless you understand what happen !!

import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import "gutenberg-css/dist/gutenberg.css";
import "gutenberg-css/dist/themes/modern.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism.css";
import DocTemplate, { theme, config } from "../template";
import "katex/dist/katex.css";
import Menubar from "../internal/Menubar";

const GlobalStyle = createGlobalStyle`
body{
  font-size:${theme.fontSize};
}

pre{
  border-radius: 0.2cm;
  background: ${theme.boxColor} !important;
  font-size:0.9em;

  &>code{
    display: inline-block;
    font-size: inherit;
  }
}

blockquote {
  background: ${theme.boxColor} !important;
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
    margin-bottom: 2cm;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23) !important;
  }
}
`;

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    (async function () {
      if (config.showCodeLineNumber)
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
      <DocTemplate>
        <Component {...pageProps} />
      </DocTemplate>
      <Menubar />
    </>
  );
}
