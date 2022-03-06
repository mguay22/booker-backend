import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class BookmarkDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  userId: string;

  @Prop()
  links: string[];
}

export const BookmarkSchema = SchemaFactory.createForClass(BookmarkDocument);
