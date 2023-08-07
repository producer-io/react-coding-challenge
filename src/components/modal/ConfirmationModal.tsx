import React, { useEffect } from "react";
import { WarningIconSvg } from "../../icons/WarningIconSvg";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  WarningIcon,
  ModalTitle,
  ModalBody,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./ConfirmationModal.style";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <WarningIcon>{WarningIconSvg}</WarningIcon>
            <ModalTitle>Deactivate Account</ModalTitle>
          </ModalHeader>
          <ModalBody>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </ModalBody>
          <ModalButtons>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <ConfirmButton primary onClick={onConfirm}>
              Deactivate
            </ConfirmButton>
          </ModalButtons>
        </ModalContent>
      </ModalOverlay>
    )
  );
};
