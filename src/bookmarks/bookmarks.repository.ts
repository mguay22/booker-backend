import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../database/abstract.repository';
import { Bookmark } from './models/bookmark.model';
import { BookmarkDocument } from './models/bookmark.schema';

@Injectable()
export class BookmarksRepository extends AbstractRepository<BookmarkDocument> {
  protected readonly logger = new Logger(BookmarksRepository.name);

  constructor(
    @InjectModel(Bookmark.name) bookmarkModel: Model<BookmarkDocument>,
  ) {
    super(bookmarkModel);
  }
}
