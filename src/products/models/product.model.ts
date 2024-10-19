import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  direct: string;

  @Field(type => String)
  resolved: string;

  @Field(type => String)
  combined: string;

  @Field(type => String)
  parent: string;
}
