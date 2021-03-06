// !! NO EDIT ME unless you understand what happen !!

import React, { useEffect, PropsWithChildren } from "react";
import { createGlobalStyle } from "styled-components";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism.css";
import "katex/dist/katex.css";
import Menubar from "./Menubar";
import { GutenbergTheme } from "./theme";
import DocTemplate, { theme, config } from "../template";

const PageStyle = createGlobalStyle`
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
`;

const PreviewStyle = createGlobalStyle`
@media screen {
  html {
    background: gray !important;
  }

  body {
    width: 21cm;
    margin-top: 3cm;
    margin-bottom: 2cm;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1),
      0 6px 6px rgba(0, 0, 0, 0.2) !important;
  }
}
`;

export default function App({ children }: PropsWithChildren<{}>) {
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
    <GutenbergTheme>
      <>
        <PageStyle />
        <PreviewStyle />
      </>
      <DocTemplate>{children}</DocTemplate>
      <Menubar />
    </GutenbergTheme>
  );
}
