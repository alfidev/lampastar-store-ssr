import React, { Fragment, ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { DOWN_SHEET_PORTAL_ID } from '@common/constants';
import { ModalBackground, DownSheet as DownSheetComponent } from '@ui/components';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
};

export const DownSheet = ({ isOpen, onClose, children, title }: Props) => {
  const portal = useMemo(() => {
    if (typeof document !== 'undefined') {
      return document?.getElementById(DOWN_SHEET_PORTAL_ID);
    }

    return null;
  }, [document, isOpen]);

  if (!isOpen || !portal) return null;

  const TitleComponent = title ? DownSheetComponent.DownSheetTitle : Fragment;

  const getDownSheetBody = () => (
    <ModalBackground onClick={onClose} isBottomContent fullWidth>
      <DownSheetComponent>
        <TitleComponent>{title}</TitleComponent>
        {children}
      </DownSheetComponent>
    </ModalBackground>
  );

  return createPortal(getDownSheetBody(), portal);
};
