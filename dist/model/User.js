"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.Student = exports.Teacher = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const UserSchema = new Schema({
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
}, { timestamps: true });
const StudentSchema = new Schema({
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
}, { timestamps: true });
const TeacherSchema = new Schema({
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
}, { timestamps: true });
const RoleSchema = new Schema({
    role: {
        type: String,
        enum: ['teacher', 'student', 'manager', 'user', 'admin', 'staff'],
        default: 'user',
    },
});
exports.User = model('users', UserSchema);
exports.Teacher = model('users', TeacherSchema);
exports.Student = model('users', StudentSchema);
exports.Roles = model('users', RoleSchema);
