import React from "react";
import styled from "styled-components";

import { space, SpaceProps, flexbox, FlexboxProps } from "styled-system";

interface HStackProps extends SpaceProps, FlexboxProps {
  children?: React.ReactNode;
}

const StyledHStack = styled.div<HStackProps>`
  display: flex;
  ${space};
  ${flexbox}
`;

const HStack: React.FC<HStackProps> = ({ children, ...rest }) => {
  return <StyledHStack {...rest}>{children}</StyledHStack>;
};

export default HStack;
