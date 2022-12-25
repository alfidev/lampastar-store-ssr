import React from 'react';
import { ModalCreate, ModalFuncPropsType } from '@components/ModalCreate';
import { FullImageSlider, ModalBackground } from '@ui/components';
import { ImageWithSizeType } from '@common/types';

type Props = {
  modalId: string;
  images: ImageWithSizeType[];
};

export const ImageModal = ({ modalId, images }: Props) => {
  return (
    <ModalCreate modalId={modalId}>
      {({
        modalProps: { currentImageId },
        onClose,
      }: ModalFuncPropsType & { modalProps: { currentImageId?: number } }) => (
        <ModalBackground onClick={onClose}>
          <FullImageSlider images={images} currentImageId={currentImageId} onClose={onClose} />
        </ModalBackground>
      )}
    </ModalCreate>
  );
};
