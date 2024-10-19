import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { ProductsQueries } from './products.queries';

@Module({
  providers: [ProductsResolver, ProductsService, ProductsQueries],
})
export class ProductsModule {}
