import React, { ReactNode, useState } from 'react';

import { ArrowBottomIcon, ArrowTopIcon } from '@ui/icons';

import { ContentContainer, Header, InnerContainer, Title, TitleIcon } from './styled';

type Props = {
  title?: string;
  children: ReactNode;
  isOpen?: boolean;
};

export const Accordion = ({ title, children, isOpen }: Props) => {
  const [opened, setOpened] = useState(!!isOpen);

  const ArrowComponent = opened ? ArrowTopIcon : ArrowBottomIcon;

  const onCLickToggleHandler = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <Header onClick={onCLickToggleHandler}>
        <Title>{title}</Title>
        <TitleIcon>
          <ArrowComponent />
        </TitleIcon>
      </Header>
      <ContentContainer opened={opened}>
        <InnerContainer>{children}</InnerContainer>
      </ContentContainer>
    </div>
  );
};
