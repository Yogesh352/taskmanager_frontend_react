import {
  createContext,
  ReactNode,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

export type SettingsContextState = {
  screenSize: number | undefined;
  activeMenu: boolean;
};

type SettingsContextValue = {
  state: SettingsContextState;
  // type, you get when hovering over `setState` from `useState`
  setState: Dispatch<SetStateAction<SettingsContextState>>;
};

const appCtxDefaultValue: SettingsContextValue = {
  state: { screenSize: 0, activeMenu: true },
  setState: (state) => {}, // noop default callback
};
export const SettingsContext = createContext(appCtxDefaultValue);

interface ContextProviderProps {
  children?: ReactNode;
}

export const SettingsContextProvider = ({ children }: ContextProviderProps) => {
  const [state, setState] = useState(appCtxDefaultValue.state);
  return (
    <SettingsContext.Provider value={{ state, setState }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useStateContext = () => useContext(SettingsContext);
