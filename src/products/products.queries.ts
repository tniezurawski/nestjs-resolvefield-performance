import { Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './models/product.model';

@Injectable()
export class ProductsQueries {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product], { name: 'products' })
  async getProductsConnection() {
    return this.productsService.getProducts();
  }
}
