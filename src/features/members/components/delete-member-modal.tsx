import styled from "styled-components";
import WarningIcon from "../../../assets/icons/warning.svg";

interface DeleteMemberModalProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteMemberModal = ({
  show,
  onConfirm,
  onCancel,
}: DeleteMemberModalProps) => {
  return show ? (
    <Overlay>
      <Modal>
        <Container>
          <Image src={WarningIcon} alt="warning" />
          <ModalBody>
            <h2>Deactivate account</h2>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
          </ModalBody>
        </Container>
        <ModalFooter>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Deactivate</ConfirmButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  ) : null;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  border-radius: 0.8rem;
  width: 50rem;
  max-width: 90%;
  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Container = styled.div`
  padding: 1.9rem 1.5rem 1.5rem 1.5rem;
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 3rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 605px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ModalBody = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: #7c7e84;
  }

  @media screen and (max-width: 605px) {
    text-align: center;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.2rem 1.5rem;
  background-color: #fafafb;

  @media screen and (max-width: 605px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ModalButton = styled.button`
  padding: 0.6rem 1.3rem;
  border-radius: 0.4rem;
  border: 1px solid #aaaaaa;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const CancelButton = styled(ModalButton)`
  background: white;
  color: #333333;
  margin-right: 1.5rem;
  @media screen and (max-width: 605px) {
    margin-right: 0;
  }
  &:hover {
    background: #e3e3e3;
  }
`;

const ConfirmButton = styled(ModalButton)`
  background: #dc2727;
  color: white;
  border: none;
  &:hover {
    background: #b71c1c;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
