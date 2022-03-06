import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Link {
  @Field()
  readonly title: string;

  @Field()
  readonly siteName: string;

  @Field()
  readonly url: string;

  @Field(() => [String])
  readonly images: string[];
}
