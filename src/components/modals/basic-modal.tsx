import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { DangerButton, SecondaryButton } from '../buttons';
import { ModalProps } from '.';

export const BasicModal: React.FC<ModalProps> = ({
 title,
 content,
 primaryAction,
 secondaryAction,
 isOpen,
 handleClose,
}) => {
 const { text: primaryText, onClick: primaryOnClick } = primaryAction || {};
 const { text: secondaryText, onClick: secondaryOnClick } =
  secondaryAction || {};

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) =>
     e.key === 'Escape' ? handleClose() : null;
    
     document.body.addEventListener("keydown", closeOnEscape);
    
    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleClose]);
  
 return (
  <>
   {isOpen &&
    createPortal(
     <ModalContainer onClick={() => {
      handleClose();
    }}>
      <BasicModalWrapper onClick={e => {
          e.stopPropagation();
        }}>
       <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        {content}
       </ModalContent>
       <ModalFooter>
        {!!secondaryAction && (
         <SecondaryButton text={secondaryText!} onClick={secondaryOnClick!} />
        )}
        {primaryAction && (
         <DangerButton text={primaryText} onClick={primaryOnClick} />
        )}
       </ModalFooter>
      </BasicModalWrapper>
     </ModalContainer>,
     document.body
    )}
  </>
 );
};

const ModalContainer = styled.div`
 position: absolute;
 inset: 0;
 background-color: #00000099;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: all 0.3s ease-in-out;
 z-index: 999;
`;

const BasicModalWrapper = styled.div`
 display: flex;
 flex-direction: column;
 background-color: white;
 -webkit-box-shadow: 6px 8px 40px -14px rgba(0, 0, 0, 0.63);
 -moz-box-shadow: 6px 8px 40px -14px rgba(0, 0, 0, 0.63);
 box-shadow: 6px 8px 40px -14px rgba(0, 0, 0, 0.63);
 border-radius: 0.5rem;
 max-width: 30rem;
`;

const ModalTitle = styled.h3`
 display: flex;
 margin-bottom: 0.5rem;
 color: black;
`;

const ModalContent = styled.div`
 display: flex;
 flex-direction: column;
 padding: 1.25rem 1.25rem 0.75rem;
 color: var(--color-gray-400);
`;

const ModalFooter = styled.div`
 background-color: #fafafb;
 display: flex;
 justify-content: end;
 padding: 0.75rem 1rem;
 gap: 0.75rem;
 border-radius: 0 0 1rem 1rem;
`;
