interface ProductMedia {
  type: string;
  url: string;
}

export interface Product {
  rating: number;
  image: string;
  title: string;
  media: ProductMedia[];
  price: number;
  desc: string;
  slug: string;
}
