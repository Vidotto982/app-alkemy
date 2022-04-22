export interface MenuItems {
  id: number;
  tile: string;
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
