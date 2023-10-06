import React from "react";

import styled, { keyframes } from "styled-components";

import { space, SpaceProps } from "styled-system";

interface SpinnerProps extends SpaceProps {
  size?: number;
  color?: string;
}
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const SpinnerWrapper = styled.div<SpinnerProps>`
  display: inline-block;
  border: 2px solid ${({ color }) => color || "gray"};
  border-top-color: transparent;
  border-radius: 50%;
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  animation: ${spin} 0.6s linear infinite;
  ${space}
`;
const Spinner: React.FC<SpinnerProps> = ({ size, color, ...rest }) => {
  return <SpinnerWrapper size={size} color={color} {...rest} />;
};

export default Spinner;
