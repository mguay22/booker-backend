import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';
import { GetLinksArgs } from './dto/args/get-links-args.dto';

@Injectable()
export class LinksService {
  async getLinks(getLinksArgs: GetLinksArgs) {
    return Promise.all(
      getLinksArgs.urls.map(async (url) => {
        return getLinkPreview(url);
      }),
    );
  }
}
