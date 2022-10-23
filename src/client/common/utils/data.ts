export const formatSum = (input: number) =>
  input.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
