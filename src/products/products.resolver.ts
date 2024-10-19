import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Product } from './models/product.model';
import { ProductRest } from './models/product.rest';

@Resolver(() => Product)
export class ProductsResolver {

  @ResolveField(returns => String)
  resolved(product: ProductRest) {
    // It's just an example. A 1:1 map doesn't need to use a resolver.
    // But wanted to show that nothing special is happening here.
    return product.resolved;
  }

  @ResolveField(returns => String)
  combined(product: ProductRest) {
    // Slightly more difficult but still, a simple string concatenation.
    // Think about it as `fullName` = `fistName` + `lastName`
    return product.direct + product.resolved;
  }

  @ResolveField(returns => String)
  parent(@Parent() product: ProductRest) {
    // With @Parent() decorator
    return product.resolved;
  }
}
