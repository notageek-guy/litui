import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { space, typography, SpaceProps, TypographyProps } from "styled-system";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, SpaceProps, TypographyProps {}

const StyledInput = styled.input<InputProps>`
  ${space}
  ${typography}
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
`;

const Input = ({ ...rest }: InputProps) => {
  return <StyledInput {...rest} />;
};

export default Input;
