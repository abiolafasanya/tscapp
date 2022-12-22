import mongoose, { Document, Schema, model } from 'mongoose';

interface PostDocument extends Document {
  title: string;
  content: string;
  headline?: string;
  image?: any;
  tags?: any[];
  author: any;
  comments?: Comment[];
  category: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface Comment {
  comment: string;
  user?: any;
  likes?: any;
  dislikes?: any;
  date?: Date;
}

const postSchema = new Schema(
  {
    title: String,
    content: String,
    headline: String,
    image: String,
    tags: Array,
    category: { type: Array, default: ['general'] },
    comments: Array,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'auths'},
  },
  { timestamps: true }
);

export default model<PostDocument>('posts', postSchema);
