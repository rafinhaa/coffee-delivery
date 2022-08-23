export type TCoffee = {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
};

export type TCoffeesProps = {
  coffee: TCoffee;
};
