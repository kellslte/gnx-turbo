import { Product } from "../products/interfaces/product.interface";

interface ProductData {
  products: Product[];
}
export interface ProductResponse {
  status: boolean;
  message: string;
  data: ProductData;
}
