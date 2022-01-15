import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useResizeWindow } from "../helpers/useResizeWindow";
import layoutReducer from "./LayoutReducer";

export type InitialStateTypes = {
  isMobile: boolean;
  breakpoint1340: boolean;
  isCollapsible: boolean;
  isDark: boolean;
};

const initialState = {
  isMobile: false,
  isCollapsible: false,
  breakpoint1340: false,
  isDark: true,
};

export const MOBILE_LAYOUT = "MOBILE_LAYOUT";
export const COLLAPSE = "COLLAPSE";
export const BREAKPOINT_1340 = "BREAKPOINT_1340";
export const THEME = "THEME";

type ContextType = {
  isMobile: boolean;
  isCollapsible: boolean;
  breakpoint1340: boolean;
  isDark: boolean;
  collapseSideMenu: (collapse: boolean) => void;
  changeTheme: (isDark: boolean) => void;
};

export const LayoutContext = createContext<ContextType>({
  isMobile: false,
  isCollapsible: false,
  breakpoint1340: false,
  isDark: true,
  collapseSideMenu: (collapse: boolean) => {},
  changeTheme: (isDark: boolean) => {},
});

export const useLayout = () => useContext(LayoutContext);

const LayoutProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  const [width] = useResizeWindow();

  const isMobile = width <= 768;
  const breakpoint1340 = width <= 1340;

  const isMobileLayout = () => {
    dispatch({ type: MOBILE_LAYOUT, payload: isMobile });
    dispatch({ type: COLLAPSE, payload: isMobile });
  };

  const isBreackPointFunc = () => {
    dispatch({ type: BREAKPOINT_1340, payload: breakpoint1340 });
  };

  const collapseSideMenu = (collapse: boolean) => {
    console.log(collapse);
    dispatch({ type: COLLAPSE, payload: collapse });
  };

  const changeTheme = (isDark: boolean) => {
    console.log(isDark);
    dispatch({ type: THEME, payload: isDark });
  };

  useEffect(() => {
    isMobileLayout();
    // eslint-disable-next-line
  }, [isMobile]);

  useEffect(() => {
    isBreackPointFunc();
    // eslint-disable-next-line
  }, [breakpoint1340]);

  const values = {
    isMobile: state?.isMobile,
    isCollapsible: state?.isCollapsible,
    breakpoint1340: state?.breakpoint1340,
    isDark: state?.isDark,
    collapseSideMenu,
    changeTheme,
  };
  return (
    <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
