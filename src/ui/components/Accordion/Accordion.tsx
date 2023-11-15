import React, { ReactNode, useState } from 'react';

import { ContentContainer, Header, InnerContainer, Title, TitleIcon } from './styled';
import { ArrowTop, ArrowBottom } from '../../icons';
import { Icon } from '../Icon';

type Props = {
  title?: string;
  children: ReactNode;
  isOpen?: boolean;
};

export const Accordion = ({ title, children, isOpen }: Props) => {
  const [opened, setOpened] = useState(!!isOpen);

  const ArrowComponent = opened ? ArrowTop : ArrowBottom;

  const onCLickToggleHandler = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <Header onClick={onCLickToggleHandler}>
        <Title>{title}</Title>
        <TitleIcon>
          <Icon icon={ArrowComponent} size="l" />
        </TitleIcon>
      </Header>
      <ContentContainer opened={opened}>
        <InnerContainer>{children}</InnerContainer>
      </ContentContainer>
    </div>
  );
};
