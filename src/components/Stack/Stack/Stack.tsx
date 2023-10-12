import React from "react";
import styled from "styled-components";

import { space, SpaceProps, flexbox, FlexboxProps } from "styled-system";

interface StackProps extends SpaceProps, FlexboxProps {
  direction?: "row" | "col";
  children?: React.ReactNode;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  ${space};
  ${flexbox};
  flex-direction: ${(props) => props.dir || "row"};
`;

const Stack: React.FC<StackProps> = ({ children, ...rest }) => (
  <StyledStack {...rest}>{children}</StyledStack>
);
export default Stack;
