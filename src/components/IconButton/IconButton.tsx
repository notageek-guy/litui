import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { space, color, SpaceProps, ColorProps } from "styled-system";

interface IconButtonProps
  extends SpaceProps,
    ColorProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children: ReactNode;
}

const StyledButton = styled.button<IconButtonProps>`
  ${space}
  ${color}
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const IconButton: React.FC<IconButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default IconButton;
