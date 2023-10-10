import React, { ReactNode, LabelHTMLAttributes } from "react";
import styled from "styled-components";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

const LabelStyled = styled.label<LabelProps>`
  /* Add your styles here */
`;

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <LabelStyled {...rest}>{children}</LabelStyled>;
};

export default Label;
