import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}

body {
   margin: 0;
   padding: 0;
   background: ${({ theme }: any) => theme.white};
   color: ${({ theme }: any) => theme.text};
   font-family: sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}`;

export const theme = {
  white: "#ffffff",
  text: "#11142D",
  textLink: "#5f75ee",
  goalBackground: "#A0D7E7",
  purple: "#6C5DD3",
  green: "#7FBA7A",
  red: "#FF754C",
  blue: "#3F8CFF",
  background: "#FDFDFD",
  badge: "#FF754C",
  yellow: "#FFCE73",
  pink: "#FFA2C0",
};

export const themeDark = {
  white: "#242731",
  text: "#eeeeee",
  textLink: "#5f75ee",
  goalBackground: "#A0D7E7",
  purple: "#6C5DD3",
  green: "#7FBA7A",
  red: "#FF754C",
  blue: "#3F8CFF",
  background: "#21232C",
  badge: "#FF754C",
  yellow: "#FFCE73",
  pink: "#FFA2C0",
};
