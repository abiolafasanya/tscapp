import mongoose, { Document, Schema, model } from 'mongoose';

interface ProfileDocument extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  firstname?: string;
  lastname?: string;
  email?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserDocument extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  profileId?: mongoose.Schema.Types.ObjectId;
  role?: number;
  verified?: boolean;
  refreshToken?: string;
  isActive?: boolean;
  googleId?: string;
  createdAt: Date;
  updatedAt: Date;
}

enum Role {
  user,
  student,
  teacher,
  admin,
  superAdmin,
}

const UserSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'auths' },
    profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    verified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
    refreshToken: String,
    role: { type: Number, enum: Role, default: Role.user },
    googleId: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const ProfileSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'auths' },
    firstname: String,
    lastname: String,
    email: String,
    department: String,
    classId: String,
    club: String,
    phone: String,
  },
  { timestamps: true }
);

export default model<UserDocument>('users', UserSchema);
export const Profile = model<ProfileDocument>('profiles', ProfileSchema);
