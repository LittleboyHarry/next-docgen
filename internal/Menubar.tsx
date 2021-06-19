import styled, { css } from "styled-components";
import { themeChangeIcon, printIcon, navigateIcon } from "./icons";

const MenubarRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

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

export default function Menubar() {
  return (
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
        <CircleButton title="not changeable" color="#1976d2" disabled>
          {themeChangeIcon}
        </CircleButton>
        <CircleButton color="rgb(220, 0, 78)" onClick={() => window.print()}>
          {printIcon}
        </CircleButton>
      </ButtonGroup>
      <NavigationButton />
    </MenubarRoot>
  );
}
