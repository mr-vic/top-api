import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import mongoose, { Types } from 'mongoose';
import { ProductModel as Product } from '../product/product.model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReviewModel extends Base {}

export class ReviewModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  rating: number;

  //FIXME: Fix needed
  @prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  productId: Product;
}
