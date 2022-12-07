import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { TypographyNames } from '@layouts/Lampastar';

type TextSkeletonType = {
  width?: string | number;
  size?: TypographyNames;
};

const textSizes: Partial<Record<TypographyNames, string>> = {
  title1: '',
  title2: '',
  main1: '',
  main2: '',
  mini1: '',
  mini2: '12px',
  body1: '',
  body2: '15px',
  body3: '16px',
  body4: '',
  body5: '',
};

const animation = keyframes`
  from {
    opacity: 1;
  }
  
  50% {
    opacity: .3;
  }

  to {
    opacity: 1;
  }
`;

const animationStyle = css`
  animation: ${animation} 1.5s linear infinite;
`;

const BaseSkeleton = styled.div`
  border-radius: ${({ theme }) => theme.radius.xxs};
  background: ${({ theme }) => theme.color.background.skeletonPrimary};
  ${animationStyle}
`;

const BaseSkeletonSecondary = styled.div`
  background: ${({ theme }) => theme.color.background.skeletonSecondary};
  ${animationStyle}
`;

export const TextSkeleton = styled(BaseSkeletonSecondary)<TextSkeletonType>`
  border-radius: ${({ theme }) => theme.radius.xxxs};
  height: ${({ size }) => (size && textSizes[size]) || textSizes['body3']};
  width: ${({ width }) => (!width ? '100%' : typeof width === 'number' ? `${width}px` : width)};
`;

const ListItemSkeletonPadding = styled.div`
  padding: ${({ theme }) => theme.indents.s};
`;

export const ListItemSkeleton = ({ width, active, size }: TextSkeletonType & { active?: boolean }) =>
  active ? (
    <BaseSkeleton>
      <ListItemSkeletonPadding>
        <TextSkeleton width={width} size={size || 'body3'} />
      </ListItemSkeletonPadding>
    </BaseSkeleton>
  ) : (
    <ListItemSkeletonPadding>
      <TextSkeleton width={width} size={size || 'body3'} />
    </ListItemSkeletonPadding>
  );
