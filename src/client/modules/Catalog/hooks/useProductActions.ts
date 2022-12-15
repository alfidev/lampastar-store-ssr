import { useNavigate } from 'react-router-dom';

export const useProductActions = () => {
  const navigate = useNavigate();

  const handleClickCard = (id: number) => {
    navigate(`/catalog/products/${id}`);
  };

  return {
    handleChangeFavourite: () => console.log('11'),
    handleChangeCount: () => console.log('11'),
    handleClickCard,
  };
};
