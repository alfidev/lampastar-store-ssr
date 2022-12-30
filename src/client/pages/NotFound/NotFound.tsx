import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteComponent } from '@common/components/RouteComponent';
import { ErrorRouterContext } from '@common/context';
import { ButtonContained } from '@ui/components';
import { Typography } from '@ui/components';

import { ErrorWrapper, InfoBlock, ErrorText, ErrorCode, ErrorDescription, ImageBox, StyledSvg } from './styled';

export const NotFound = () => {
  const { setStatusCode } = useContext(ErrorRouterContext);

  const navigate = useNavigate();

  const onClick = () => {
    if (setStatusCode) setStatusCode(0);
    navigate('/');
  };

  return (
    <RouteComponent title={'Страница не найдена'}>
      <ErrorWrapper>
        <InfoBlock>
          <ErrorCode>404</ErrorCode>
          <ErrorText>Ошибка</ErrorText>
        </InfoBlock>
        <ErrorDescription>
          <Typography variant="body5">
            Так уж получилось, что из множества страниц нашего сайта Вы оказались как раз на той, которая не существует…
          </Typography>
        </ErrorDescription>
        <ImageBox>
          <StyledSvg />
        </ImageBox>
        <ButtonContained onClick={onClick}>Перейти на главную</ButtonContained>
      </ErrorWrapper>
    </RouteComponent>
  );
};
