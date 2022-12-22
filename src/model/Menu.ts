import mongoose, { Document, Schema, model } from 'mongoose';

interface MenuDocument extends Document {
  name: string;
  link?: string;
  icon?: any;
  subMenu?: subMenu[];
  createdAt: Date;
  updatedAt: Date;
}

interface subMenu {
  name: string;
  link?: string;
  icon?: any;
}

const menuSchema = new Schema(
  {
    name: String,
    link: String,
    icon: String,
    subMenu: Array,
  },
  { timestamps: true }
);

export default model<MenuDocument>('menus', menuSchema);
