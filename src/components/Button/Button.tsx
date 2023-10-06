import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { variant, space, SpaceProps } from 'styled-system';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, SpaceProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

const StyledButton = styled.button<ButtonProps>`
  ${variant({
    variants: {
      primary: {
        backgroundColor: '#007bff',
        color: 'white',
        '&:hover': {
          backgroundColor: '#0069d9',
        },
      },
      secondary: {
        backgroundColor: '#6c757d',
        color: 'white',
        '&:hover': {
          backgroundColor: '#5a6268',
        },
      },
      danger: {
        backgroundColor: '#dc3545',
        color: 'white',
        '&:hover': {
          backgroundColor: '#c82333',
        },
      },
      success: {
        backgroundColor: '#28a745',
        color: 'white',
        '&:hover': {
          backgroundColor: '#218838',
        },
      },
    },
  })}
  ${space}
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
`;

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
