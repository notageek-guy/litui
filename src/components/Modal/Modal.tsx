import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";

interface ModalProps extends SpaceProps, LayoutProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div<SpaceProps>`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  ${space};
`;

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, ...rest }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent {...rest}>{children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
