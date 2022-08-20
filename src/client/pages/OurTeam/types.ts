type MemberType = {
  id: number;
  name: string;
  description: string;
  image?: string;
  hidden?: boolean;
};

export type Department =
  | "HEAD"
  | "SALE"
  | "TENDER"
  | "FINANCE"
  | "DELIVERY"
  | "STOCK"
  | "HR"
  | "IT";

export type TeamType = {
  [name in Department]: MemberType[];
};
