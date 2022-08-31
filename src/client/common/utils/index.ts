export * from "./ajax";

export const isClient = () => {
  return typeof window !== "undefined";
};
