import React, { useEffect } from "react";

import styled, { css, Interpolation } from "styled-components";

import { X } from "lucide-react";

import { createPortal } from "react-dom";
interface ModalConfig {
  overlayStyles?: Interpolation<ModalConfig>;
  containerStyles?: Interpolation<ModalConfig>;
  closeButtonStyles?: Interpolation<ModalConfig>;
}

interface ModalProps {
  open: boolean;
  config?: ModalConfig;
  onClose: () => void;
  children: React.ReactNode;
}
const CloseButton = styled.button<ModalConfig>`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  ${({ closeButtonStyles }) =>
    closeButtonStyles &&
    css`
      ${closeButtonStyles}
    `}
`;

const ModalOverlay = styled.div<ModalConfig>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ${({ overlayStyles }) =>
    overlayStyles &&
    css`
      ${overlayStyles}
    `}
`;

const ModalContainer = styled.div<ModalConfig>`
  background: white;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  ${({ containerStyles }) =>
    containerStyles &&
    css`
      ${containerStyles}
    `}
`;

const Modal: React.FC<ModalProps> = ({ children, onClose, open, config }) => {
  useEffect(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.prepend(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  if (!open) return null;

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    throw new Error("modal-root element not found");
  }

  return createPortal(
    <ModalOverlay overlayStyles={config?.overlayStyles}>
      <ModalContainer containerStyles={config?.containerStyles}>
        <CloseButton
          onClick={onClose}
          closeButtonStyles={config?.closeButtonStyles}
        >
          <X />
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
