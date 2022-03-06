import { ArgsType, Field } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

@ArgsType()
export class GetLinksArgs {
  @Field(() => [String])
  @IsUrl(undefined, { each: true })
  urls: string[];
}
