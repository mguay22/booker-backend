import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksRepository } from './bookmarks.repository';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './models/bookmark.model';
import { BookmarkSchema } from './models/bookmark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bookmark.name,
        schema: BookmarkSchema,
      },
    ]),
  ],
  providers: [BookmarksResolver, BookmarksService, BookmarksRepository],
})
export class BookmarksModule {}
