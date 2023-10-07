import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  typography,
  color,
  space,
  TypographyProps,
  ColorProps,
  SpaceProps,
} from "styled-system";

interface TextProps extends TypographyProps, ColorProps, SpaceProps {
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const StyledText = styled.span<TextProps>`
  ${typography}
  ${color}
  ${space}
`;

const Text: React.FC<TextProps> = ({ children, as = "span", ...props }) => {
  return (
    <StyledText as={as} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
