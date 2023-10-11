import React, { useState } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { ToggleLeft, ToggleRight } from "lucide-react";

const StyledSwitcher = styled.label<SpaceProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  ${space};
`;

const StyledToggle = styled.div<{ on: boolean }>`
  width: 40px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 2px;
  background-color: ${(props) => (props.on ? "#4caf50" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.on ? "#45a049" : "#bbb")};
  }

  div {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    transform: translateX(${(props) => (props.on ? "16px" : "2px")});
    transition: transform 0.3s ease;
  }
`;

interface SwitcherProps {
  open: boolean;
  toggleOpen: () => void;
  className?: string;
}

const Switcher: React.FC<SwitcherProps> = ({ open, toggleOpen, className }) => {
  const [on, setOn] = useState(open);

  const handleToggle = () => {
    setOn(!on);
    toggleOpen();
  };

  return (
    <StyledSwitcher className={className} {...space}>
      <StyledToggle on={on} onClick={handleToggle}>
        <div>{on ? <ToggleRight /> : <ToggleLeft />}</div>
      </StyledToggle>
    </StyledSwitcher>
  );
};

export default Switcher;
