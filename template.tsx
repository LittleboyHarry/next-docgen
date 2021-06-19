import { PropsWithChildren } from "react";

export const config = {
  showCodeLineNumber: true,
};

export const theme = {
  boxColor: "#f7f7f7",
  fontSize: "12pt",
};

export default function DocTemplate({ children }: PropsWithChildren<{}>) {
  return <>{children}</>;
}
