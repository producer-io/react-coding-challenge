import React, { useRef, useState } from 'react';

import { MembersList } from '../features/members/components/members-list';
import { useMembers } from '../api/use-members';
import { Page } from '../components/layout/page';
import { BasicModal } from '../components/modals';

export const MemberPage = () => {
 const { members, deleteMember } = useMembers();
 const [isDeactivateModalOpen, setIsDeactivateModalOpen] =
  useState<boolean>(false);

 const memberIdRef = useRef<string>();

 const validateDeactivateUser = (memberId: string) => {
  setIsDeactivateModalOpen(true);
  memberIdRef.current = memberId;
 };

 return (
  <>
   <Page
    title="Users"
    description="A list of all the users in your account including their name, title, email and role."
   >
    <MembersList members={members} onDelete={validateDeactivateUser} />
   </Page>

   {
    <BasicModal
     isOpen={isDeactivateModalOpen}
     title="Deactivate Account"
     content="Are you sure you want to deactivate your account? All of your data will be
   permanently removed. This action cannot be undone."
     primaryAction={{
      onClick: () => {
       deleteMember(memberIdRef.current!);
       memberIdRef.current = undefined;
       setIsDeactivateModalOpen(false);
      },
      text: 'Deactivate',
     }}
     secondaryAction={{
      onClick: () => {
       setIsDeactivateModalOpen(false);
      },
      text: 'Cancel',
     }}
    />
   }
  </>
 );
};
