import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      min: 3,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

const StudentSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
    },
    classId: {
      type: String,
      required: true,
      min: 3,
    },
    club: String,
  },
  { timestamps: true }
);

const TeacherSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
    },
    classId: {
      type: String,
      required: true,
      min: 3,
    },
  },
  { timestamps: true }
);

const RoleSchema = new Schema({
  role: {
    type: String,
    enum: ['teacher', 'student', 'manager', 'user', 'admin', 'staff'],
    default: 'user',
  },
});

export const User = model('users', UserSchema);
export const Teacher = model('users', TeacherSchema);
export const Student = model('users', StudentSchema);
export const Roles = model('users', RoleSchema);
