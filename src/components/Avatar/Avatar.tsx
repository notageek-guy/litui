import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface AvatarProps extends SpaceProps {
  size?: string;
  src: string;
  alt: string;
}

const StyledAvatar = styled.img<AvatarProps>`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  border-radius: 50%;
  ${space}
`;

const Avatar: React.FC<AvatarProps> = ({ size, src, alt, ...rest }) => {
  return <StyledAvatar size={size} src={src} alt={alt} {...rest} />;
};

export default Avatar;
