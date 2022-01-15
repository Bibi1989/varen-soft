import {
  BREAKPOINT_1340,
  COLLAPSE,
  InitialStateTypes,
  MOBILE_LAYOUT,
  THEME,
} from "./LayoutProvider";

type State = InitialStateTypes;

type ActionType<T> = {
  type: string;
  payload: T;
};

const layoutReducer = (state: State, action: ActionType<boolean>) => {
  switch (action.type) {
    case MOBILE_LAYOUT:
      return {
        ...state,
        isMobile: action.payload,
      };
    case COLLAPSE:
      return {
        ...state,
        isCollapsible: action.payload,
      };
    case BREAKPOINT_1340:
      return {
        ...state,
        breakpoint1340: action.payload,
      };
    case THEME:
      return {
        ...state,
        isDark: action.payload,
      };

    default:
      return state;
  }
};

export default layoutReducer;
