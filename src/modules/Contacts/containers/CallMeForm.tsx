import { Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import React from 'react';
import styled from 'styled-components';

import { FieldMobile } from '../../../common/components/Field';
import { adaptive, ButtonContained } from '../../../ui/components';
import { TELEPHONE_FIELD } from '../constants';
import { useContacts } from '../hooks';
import { CallMeFormValuesType } from '../types';
import { callMeValidationSchema } from '../utils';

export const CallForm = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.indents.m};

  ${adaptive.maxWidth.mobile} {
    flex-direction: column;
  }
`;

const initialValues = {
  [TELEPHONE_FIELD]: '',
};

export const MobileSubmitButton = styled(ButtonContained)`
  ${adaptive.minWidth.tablet} {
    margin-left: ${({ theme }) => theme.indents.xl};
  }
`;

export const CallMeForm = () => {
  const { sendCallMe } = useContacts();

  const onSubmitHandler = (values: CallMeFormValuesType, { resetForm }: FormikHelpers<CallMeFormValuesType>) => {
    sendCallMe(values).then((data) => data?.success && resetForm());
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler} validationSchema={callMeValidationSchema}>
      <Form>
        <CallForm>
          <FieldMobile name={TELEPHONE_FIELD} placeholder="+7(___)___-__-__" validation />
          <MobileSubmitButton>Заказать звонок</MobileSubmitButton>
        </CallForm>
      </Form>
    </Formik>
  );
};
