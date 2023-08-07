import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalContent = styled.div`
  width: auto;
  max-width: 34%;
  background-color: white;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 64%;
  }
`;

export const ModalHeader = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: left;
  margin-bottom: 1rem;
`;

export const WarningIcon = styled.i`
  font-size: 1.5rem;
  color: red;
  margin-right: 0.5rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: black;
  margin: 0;
  text-align: left; /* Add this line to align the title to the left */
`;

export const ModalBody = styled.p`
  margin: 0 0 0 2rem;
  text-align: left;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ConfirmButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.4rem;
  background-color: ${(props) => (props.primary ? "red" : "#ccc")};
  color: white;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.4rem;
  background-color: #ccc;
  color: white;
  cursor: pointer;
`;
