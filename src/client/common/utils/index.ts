export * from './ajax';
export * from './data';

export const isClient = () => {
  return typeof window !== 'undefined';
};
