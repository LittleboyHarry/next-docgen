import { useState, useLayoutEffect, PropsWithChildren } from "react";

import "gutenberg-css/dist/gutenberg.css";

// @ts-ignore
import oldStyle from "!!raw-loader!gutenberg-css/dist/themes/oldstyle.min.css";
// @ts-ignore
import bookStyle from "!!raw-loader!gutenberg-css/dist/themes/book.min.css";
// @ts-ignore
import modernStyle from "!!raw-loader!gutenberg-css/dist/themes/modern.min.css";

type Theme = "oldstyle" | "book" | "modern";

export const defaultTheme: Theme = "modern";

let setStylesCallback = (_: any) => {};

let themeMeta =
  typeof window !== "undefined"
    ? window.document.querySelector<HTMLMetaElement>(
        'meta[name="next-docgen:theme"]'
      )
    : null;

export function switchTo(theme: Theme) {
  switch (theme) {
    case "oldstyle":
      setStylesCallback(oldStyle);
      break;
    case "book":
      setStylesCallback(bookStyle + " body {padding: 2cm;}");
      break;
    case "modern":
      setStylesCallback(modernStyle);
      break;
  }
  if (themeMeta) themeMeta.content = theme;
}

export function GutenbergTheme({ children }: PropsWithChildren<{}>) {
  const [styles, setStyles] = useState("");

  setStylesCallback = setStyles;
  if (typeof window !== "undefined")
    useLayoutEffect(() => {
      if (!themeMeta) {
        themeMeta = window.document.createElement("meta");
        themeMeta.name = "next-docgen:theme";
        themeMeta.content = defaultTheme;
        window.document.head.appendChild(themeMeta);
      }
      switchTo(themeMeta.content as Theme);
    }, []);

  return (
    <div>
      {children}
      <style>{styles}</style>
    </div>
  );
}
