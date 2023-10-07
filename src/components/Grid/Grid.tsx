import React, { ReactNode } from "react";
import styled from "styled-components";
import { grid, GridProps, space, SpaceProps } from "styled-system";

interface GridWrapperProps extends GridProps, SpaceProps {
  children?: ReactNode;
}

const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  ${grid}
  ${space}
`;

const GridItemWrapper = styled.div<SpaceProps>`
  ${space}
`;

interface GridComposition {
  GridItem: React.FC<SpaceProps>;
}
interface GridItemProps extends SpaceProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridWrapperProps> & GridComposition = ({
  children,
  ...props
}) => {
  return <GridWrapper {...props}>{children}</GridWrapper>;
};

const GridItem: React.FC<GridItemProps> = ({ children, ...props }) => {
  return <GridItemWrapper {...props}>{children}</GridItemWrapper>;
};

Grid.GridItem = GridItem;

export default Grid;
