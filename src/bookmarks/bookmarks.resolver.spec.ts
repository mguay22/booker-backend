import { Test, TestingModule } from '@nestjs/testing';
import { BookmarksResolver } from './bookmarks.resolver';

describe('BookmarksResolver', () => {
  let resolver: BookmarksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarksResolver],
    }).compile();

    resolver = module.get<BookmarksResolver>(BookmarksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
