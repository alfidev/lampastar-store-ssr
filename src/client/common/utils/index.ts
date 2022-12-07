export * from './ajax';
export * from './data';
export * from './requests';

export const isClient = () => {
  return typeof window !== 'undefined';
};
