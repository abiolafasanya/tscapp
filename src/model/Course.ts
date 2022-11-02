import mongoose, { Document, Schema, model } from 'mongoose';

enum Status {
  NOTACTIVE = 'NOT ACTIVE',
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
}

interface CourseDocument extends Document {
  name: string;
  description: string;
  category: string;
  tutor: mongoose.Schema.Types.ObjectId;
  price?: number;
  image?: string;
  rating?: number;
  comments?: mongoose.Schema.Types.ObjectId;
  lessons?: mongoose.Schema.Types.ObjectId;
  students?: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

interface LessonDocument extends Document {
  course: mongoose.Schema.Types.ObjectId;
  lessonId: number;
  title: string;
  description: string;
  video?: string;
  materials?: any[];
  like?: number;
  dislikes?: number;
  createdAt: Date;
  updatedAt: Date;
}

interface StudentDocument extends Document {
  user: mongoose.Schema.Types.ObjectId;
  course: mongoose.Schema.Types.ObjectId;
  status: string;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

interface TutorDocument extends Document {
  user: mongoose.Schema.Types.ObjectId;
  course?: mongoose.Schema.Types.ObjectId;
  refreshToken?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}

const tutorSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
    refreshToken: String,
    status: { type: String, enum: Status, default: Status.NOTACTIVE },
  },
  { timestamps: true }
);

const studentSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    course: mongoose.Schema.Types.ObjectId,
    status: { type: String, enum: Status, default: Status.NOTACTIVE },
    progress: Number,
  },
  { timestamps: true }
);

const lessonSchema = new Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
    title: String,
    description: String,
    video: String,
    materials: Array,
    likes: Number,
    dislikes: Number,
    comments: Array,
  },
  { timestamps: true }
);

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: Number,
    image: String,
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'tutors' },
    lessons: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
  },
  { timestamps: true }
);

export default model<CourseDocument>('courses', courseSchema);
export const Lesson = model<LessonDocument>('course-lessons', lessonSchema);
export const Tutor = model<TutorDocument>('tutors', tutorSchema);
export const Student = model<StudentDocument>('students', studentSchema);
