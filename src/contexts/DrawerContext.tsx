import { createContext, ReactNode, useState } from 'react';

const initialState = {
  isActive: false,
  onToggle: () => {},
};
type CollapseDrawerProviderProps = {
  children?: ReactNode;
};

const CounterContext = createContext(initialState);

function DrawerContext({ children }: CollapseDrawerProviderProps) {
  const [drawerState, setDrawerState] = useState({
    isActive: false,
  });

  const onToggleDrawer = () => {
    setDrawerState({ isActive: !drawerState.isActive });
  };

  return (
    <CounterContext.Provider
      value={{
        isActive: drawerState.isActive,
        onToggle: onToggleDrawer,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, DrawerContext };
