import { Injectable } from '@nestjs/common';
import { ProductRest } from './models/product.rest';
import { products } from './products.mock';

@Injectable()
export class ProductsService {
  async getProducts(): Promise<ProductRest[]> {
    return products as ProductRest[];
  }
}
