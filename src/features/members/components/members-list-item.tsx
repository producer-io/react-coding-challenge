import React, { useState } from "react";
import { Member } from "../models/member";
import styled from "styled-components";
import { TextButton } from "../../../components/buttons";
import { ConfirmationModal } from "../../../components/modal/ConfirmationModal";

type MembersListItemProps = {
  member: Member;
  onDelete: (memberId: string) => void;
};

export const MembersListItem: React.FC<MembersListItemProps> = ({
  member,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState("");

  const handleDeleteClick = (memberId: string) => {
    setMemberToDelete(memberId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(memberToDelete);
    setMemberToDelete("");
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setMemberToDelete("");
    setIsModalOpen(false);
  };

  const displayName = `${member.firstName} ${member.lastName}`;

  return (
    <>
      <Container>
        <td>{displayName}</td>
        <td>{member.title}</td>
        <td>{member.email}</td>
        <td>{member.role}</td>
        <td>
          <TextButton
            text={"Deactivate"}
            onClick={() => handleDeleteClick(member._id)}
          />
        </td>
        {isModalOpen && (
          <ConfirmationModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.tr`
  color: #6b7280;

  td:first-child {
    font-weight: 500;
    color: black;
    padding-left: 1.6rem;
  }

  td:last-child {
    text-align: right;
  }
`;
