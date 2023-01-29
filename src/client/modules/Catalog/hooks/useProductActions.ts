import { useNavigate } from 'react-router-dom';

import { useBasket } from '@common/hooks';

export const useProductActions = () => {
  const navigate = useNavigate();
  const { addProduct, editProduct, removeProduct, products, isLoading } = useBasket();

  const handleClickCard = (id: number) => {
    navigate(`/catalog/products/${id}`);
  };

  const handleChangeBasketCount = (id: number, quantity: number): Promise<void> => {
    if (products[id]) {
      if (!quantity) return removeProduct(products[id].cartId);

      return editProduct(products[id].cartId, quantity);
    }

    return addProduct(id, quantity);
  };

  const handleChangeFavourite = (id: number, value: boolean): Promise<void> => {
    console.log(id, value);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  const handleChangeCompare = (id: number, value: boolean): Promise<void> => {
    console.log(id, value);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  return {
    handleChangeCompare,
    handleChangeFavourite,
    handleChangeBasketCount,
    handleClickCard,
    isLoading,
  };
};
