import { Module } from '@nestjs/common';
import { LinksResolver } from './links.resolver';
import { LinksService } from './links.service';

@Module({
  providers: [LinksResolver, LinksService]
})
export class LinksModule {}
