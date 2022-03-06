import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';

@InputType()
export class UpdateBookmarkInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: string;

  @Field(() => [String])
  @IsArray()
  @IsUrl(undefined, { each: true })
  links: string[];
}
