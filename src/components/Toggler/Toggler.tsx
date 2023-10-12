import React from "react";
import styled from "styled-components";

const StyledCheckBox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

interface TogglerProps {
  isOn?: boolean;
  handleToggle?: () => void;
  size?: number;
}

interface StyledLabelProps {
  size?: number;
  isOn?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: ${(props) => props.size || "100px"};
  height: 50px;
  background: ${(props) => (props.isOn ? "#4caf50" : "grey")};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  padding: 2px;
`;

const StyledSpan = styled.span<{ isOn?: boolean }>`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 46px;
  height: 46px;
  border-radius: 45px;
  transition: 0.2s;
  background: white;
  transform: ${(props) => (props.isOn ? "translateX(50px)" : "translateX(0)")};
`;

const Toggler: React.FC<TogglerProps> = ({ isOn, handleToggle, size }) => {
  return (
    <>
      <StyledCheckBox
        checked={isOn}
        onChange={handleToggle}
        id="react-switch"
        type="checkbox"
      />
      <StyledLabel htmlFor="react-switch" isOn={isOn} size={size}>
        <StyledSpan isOn={isOn} />
      </StyledLabel>
    </>
  );
};

export default Toggler;
