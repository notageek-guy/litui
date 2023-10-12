import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface VStackProps extends SpaceProps {
  children?: React.ReactNode;
}

const StyledVStack = styled.div<VStackProps>`
  display: flex;
  flex-direction: column;
  ${space};
`;

const VStack: React.FC<VStackProps> = ({ children, ...rest }) => {
  return <StyledVStack {...rest}>{children}</StyledVStack>;
};

export default VStack;
