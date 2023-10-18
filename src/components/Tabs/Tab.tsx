import React, { FC } from "react";
import { ITab, ITabStyled, useTabs } from "./Tabs";
import styled from "styled-components";
const TabPanel = styled.div<ITabStyled>``;
const TabButton = styled.button<ITabStyled>``;
const TabContent = styled.div<ITabStyled>``;
const Tab: FC<ITab> = ({ children, label, tabIndex }) => {
  const { currentTab, changeTab } = useTabs();
  return (
    <TabPanel>
      <TabButton
        $isActive={currentTab === tabIndex}
        onClick={() => changeTab(tabIndex)}
      >
        {label}
      </TabButton>
      {currentTab === tabIndex && (
        <TabContent $isActive={currentTab === tabIndex}>{children}</TabContent>
      )}
    </TabPanel>
  );
};

export default Tab;
