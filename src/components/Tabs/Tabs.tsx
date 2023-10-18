import React, {
  useState,
  useCallback,
  useMemo,
  ReactElement,
  createContext,
  useContext,
  FC,
  Children,
} from "react";

import styled from "styled-components";

export interface ITabs {
  children: React.ReactNode;
}
export interface ITab extends ITabs {
  label: string;
  tabIndex: number;
}

interface TabsContextProps {
  changeTab: (id: number) => void;
  currentTab: number;
}

interface ITabsProvider {
  children: React.ReactNode;
  initialTab: number;
}
export const TabsContext = createContext<TabsContextProps | undefined>(
  undefined
);

export interface ITabStyled {
  $isActive?: boolean;
}

const TabContainer = styled.div``;

const TabsProvider: FC<ITabsProvider> = ({ children, initialTab }) => {
  const [currentTab, setCurrentTab] = useState<number>(initialTab);
  const changeTab = useCallback((tab: number) => {
    setCurrentTab(tab);
  }, []);
  return (
    <TabsContext.Provider
      value={{
        currentTab,
        changeTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("use Tabs can't be used outisde the TabsContext");
  return context;
};

const Tabs: FC<ITabs> = ({ children }) => {
  const initialTab: ReactElement | null = useMemo(() => {
    const firstChild = Children.toArray(children)[0];
    if (React.isValidElement(firstChild)) {
      return firstChild;
    }
    return null;
  }, [children]);
  const tabIndex = initialTab ? initialTab.props.tabIndex : undefined;
  return (
    <TabsProvider initialTab={tabIndex}>
      <TabContainer>{children}</TabContainer>
    </TabsProvider>
  );
};

export default Tabs;
