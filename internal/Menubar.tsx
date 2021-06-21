import { useMemo, useState, useRef, useLayoutEffect, useEffect } from "react";
import styled, { css } from "styled-components";
import { themeChangeIcon, printIcon, navigateIcon } from "./icons";
import { defaultTheme, switchTo } from "./theme";

const MenubarRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  font-family: sans-serif;

  @media print {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  right: 1cm;
  bottom: 1cm;

  display: flex;
  flex-direction: column;
  gap: 0.6cm;
`;

const CircleButton = styled.button<{ color: string; whiteText?: boolean }>`
  width: 1.2cm;
  height: 1.2cm;
  border-radius: 50%;
  border: none;
  background: ${(p) => p.color} !important;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important;

  display: grid;
  place-items: center;

  transition: 0.3s filter;

  &:active {
    filter: brightness(1.618);
  }

  &:enabled {
    cursor: pointer;
  }

  ${(p) =>
    p.whiteText &&
    css`
      color: white;
    `}
`;

const StyledNavigationButton = styled(CircleButton).attrs(() => {
  return {
    color: "white",
    disabled: true,
    title: "not implemented",
  };
})`
  position: absolute;
  left: 1cm;
  bottom: 1cm;
  /* cursor: pointer; */
`;

function NavigationButton() {
  return <StyledNavigationButton>{navigateIcon}</StyledNavigationButton>;
}

const transitionSecond = 0.3;

const ThemeChangeMenuRoot = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
  transform: translate(-100%, -100%);
  visibility: hidden;
  opacity: 0;
  transition: visibility ${transitionSecond}s,
    opacity ${transitionSecond}s linear;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  select {
    background: white !important;
    outline: none;
    overflow-y: auto;
    padding: 12px 8px;
    border-radius: 4px;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important;
  }
`;

function ThemeChangeMenu({ controller }: { controller: { show: () => void } }) {
  const [visible, setVisible] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  controller.show = () => setVisible(true);

  if (typeof window !== "undefined")
    useLayoutEffect(() => {
      const element = selectRef?.current;
      if (element) {
        element.onblur = () => setVisible(false);
        element.oninput = () => switchTo(element.value as any);
      }
    }, [selectRef.current]);

  useEffect(() => {
    if (visible && selectRef.current) {
      setTimeout(
        (element) => {
          element.focus();
        },
        transitionSecond * 1000,
        selectRef.current
      );
    }
  }, [visible]);

  return (
    <ThemeChangeMenuRoot {...(visible && { className: "show" })}>
      <select ref={selectRef} size={4} defaultValue={defaultTheme}>
        <optgroup label="Builin Gutenberg Theme">
          <option value="oldstyle">old</option>
          <option value="book">book</option>
          <option value="modern">modern</option>
        </optgroup>
      </select>
    </ThemeChangeMenuRoot>
  );
}

const ThemeChangeButtonRoot = styled.div`
  position: relative;
`;

function ThemeChangeButton() {
  const themeMenuController = useMemo(() => ({ show() {} }), []);

  return (
    <ThemeChangeButtonRoot>
      <CircleButton
        title="not changeable"
        color="#1976d2"
        onClick={() => {
          themeMenuController.show();
        }}
      >
        {themeChangeIcon}
      </CircleButton>
      <ThemeChangeMenu controller={themeMenuController} />
    </ThemeChangeButtonRoot>
  );
}

function isPreview(): boolean {
  return typeof window !== "undefined" && window.location.protocol !== "file:";
}

export default function Menubar() {
  return (
    <div suppressHydrationWarning={true}>
      {isPreview() && (
        <MenubarRoot>
          <ButtonGroup>
            <CircleButton
              title="preview size not changeable"
              color="#e0e0e0"
              disabled
              style={{ fontWeight: "bold" }}
            >
              A4
            </CircleButton>
            <ThemeChangeButton />
            <CircleButton
              title="Print (^+p)"
              color="rgb(220, 0, 78)"
              onClick={() => window.print()}
            >
              {printIcon}
            </CircleButton>
          </ButtonGroup>
          <NavigationButton />
        </MenubarRoot>
      )}
    </div>
  );
}
