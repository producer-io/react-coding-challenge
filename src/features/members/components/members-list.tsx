import React, { useState } from "react";
import styled from "styled-components";
import { Member } from "../models/member";
import { DeleteMemberModal } from "./delete-member-modal";
import { MembersListItem } from "./members-list-item";

type MembersListProps = {
  members: Member[];
  onDelete: (memberId: string) => void;
};

export const MembersList: React.FC<MembersListProps> = ({
  members,
  onDelete,
}) => {
  const [deletingMemberId, setDeletingMemberId] = useState<string | null>(null);

  const confirmDeleteMember = () => {
    console.log(deletingMemberId);
    if (deletingMemberId === null) return;
    onDelete(deletingMemberId);
    setDeletingMemberId(null);
  };

  return (
    <Container>
      <DeleteMemberModal
        show={deletingMemberId !== null}
        onCancel={() => {
          setDeletingMemberId(null);
        }}
        onConfirm={confirmDeleteMember}
      />
      <thead>
        <Header>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Role</th>
          <th />
        </Header>
      </thead>

      <tbody>
        {members.map((member) => (
          <MembersListItem
            key={member._id}
            member={member}
            onDelete={() => {
              setDeletingMemberId(member._id);
            }}
          />
        ))}
      </tbody>
    </Container>
  );
};

const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.8rem;
  overflow: hidden;
`;

const Header = styled.tr`
  background: #fafafb;
  text-align: left;
  border-radius: 0.8rem 0.8rem 0 0;
  height: 3.2rem;

  th:first-child {
    padding-left: 1.6rem;
  }
`;
