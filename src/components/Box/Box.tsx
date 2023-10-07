import React from "react";

import styled from "styled-components";

import {
  space,
  color,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  boxShadow,
  FlexboxProps,
} from "styled-system";

interface BoxProps extends SpaceProps, ColorProps, LayoutProps, FlexboxProps {
  children?: React.ReactNode;
}
const StyledBox = styled.div<BoxProps>`
  ${space}
  ${color}
  ${layout}
  ${boxShadow}
  ${flexbox}
`;

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
export default Box;
