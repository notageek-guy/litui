import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";

interface FlexProps extends HTMLAttributes<HTMLDivElement>, FlexboxProps {}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
`;

const Flex = ({ children, ...rest }: FlexProps) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
