export interface MenuItems {
  id: number;
  title: string;
  image: string;
  imageType: string;
  restaurantChain: string;
  servingSize: string;
  servings: Servings;
  name: string;
  features: string;
}

export interface Servings {
  number: string;
  size: number;
  unit: string;
}
