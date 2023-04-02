import { useFormikContext } from 'formik';
import React from 'react';

import { Container, Row, Typography } from '@ui/components';

import { CUSTOMER_FIELDS } from '../constants';
import { OrderFormValuesType } from '../types';
import { OrderColumn } from './OrderColumn';
import { OrderOption } from './OrderOption';

export const ShippingForm = () => {
  const { values } = useFormikContext<OrderFormValuesType>();

  const shippingMethods = [
    {
      id: 1,
      icon: '',
      name: 'Самовывоз',
      description: 'из магазина, бесплатно',
    },
  ];

  return (
    <Container>
      <Row indent={12}>
        {shippingMethods.map(({ id, name, description }) => (
          <OrderColumn key={id}>
            <OrderOption
              active={values[CUSTOMER_FIELDS.SHIPPING_METHOD] === id.toString()}
              name={CUSTOMER_FIELDS.SHIPPING_METHOD}
              value={id.toString()}
            >
              <Typography>{name}</Typography>
              <Typography tag="div" variant="mini1" color="copyright">
                {description}
              </Typography>
            </OrderOption>
          </OrderColumn>
        ))}
      </Row>
    </Container>
  );
};
