import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { TextButton, ElevatedButton } from "../buttons";

export const BasicModal: React.FC<any> = ({
 title,
 content,
 primaryAction,
 secondaryAction,
}) => {
 const { text: primaryText, onClick: primaryOnClick } = primaryAction || {};
 const { text: secondaryText, onClick: secondaryOnClick } =
  secondaryAction || {};

 return createPortal(
  <ModalContainer>
   <BasicModalWrapper>
    <ModalContent>
     <ModalTitle>{title}</ModalTitle>

     {content}
    </ModalContent>
    <ModalFooter>
     {secondaryAction && (
      <ElevatedButton text={secondaryText} onClick={secondaryOnClick} />
     )}
     {primaryAction && (
      <TextButton text={primaryText} onClick={primaryOnClick} />
     )}
    </ModalFooter>
   </BasicModalWrapper>
  </ModalContainer>,
  document.body
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
 border: 1px solid black;
 border-radius: 0.5rem;
 max-width: 30rem;
`;

const ModalTitle = styled.h3`
 display: flex;
 margin-bottom: 0.5rem;
`;

const ModalContent = styled.div`
 display: flex;
 flex-direction: column;
 padding: 1.25rem 1.25rem 0.75rem;
`;

const ModalFooter = styled.div`
 background-color: #fafafb;
 display: flex;
 justify-content: end;
 padding: 0.5rem 1rem;
 border-radius: 0 0 1rem 1rem;
`;
