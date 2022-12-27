import { useMemo, ReactNode } from 'react';
import { MODAL_PORTAL_ID } from '@common/constants';
import { createPortal } from 'react-dom';
import { StateType } from '@common/redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction } from '@common/redux';

export type ModalFuncPropsType = { modalProps: any; onClose: () => void };

type Props = {
  modalId: string;
  children: (props: ModalFuncPropsType) => ReactNode;
};

export const ModalCreate = ({ modalId, children }: Props) => {
  const dispatch = useDispatch();

  const { modalProps, openedModalIds } = useSelector(({ app }: StateType) => ({
    openedModalIds: app.openedModalIds,
    modalProps: app.modalProps,
  }));

  const portal = useMemo(() => {
    if (typeof document !== 'undefined') {
      return document?.getElementById(MODAL_PORTAL_ID);
    }

    return null;
  }, [openedModalIds]);

  const handleClose = () => {
    dispatch(closeModalAction({ modalId }));
  };

  if (!openedModalIds.includes(modalId) || !portal) {
    return null;
  }

  return createPortal(children({ modalProps: modalProps[modalId] ?? {}, onClose: handleClose }), portal);
};
