import { Request, Response, NextFunction } from 'express';
import Course, { Student } from '../model/Course';
import { Tutor } from './../model/Course';

export default class CourseController {
  static createCourse = async (req: Request, res: Response) => {
    let body = req.body;
    const course = new Course(body);
    try {
      const newCourse = await course.save();
      res.status(201).json(newCourse);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  static getCourses = async (req: Request, res: Response) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  static getCourse = async (req: Request, res: Response) => {
    try {
      const course = await Course.findById(req.params.id);
      if (course == null) {
        return res.status(404).json({ message: 'Cannot find course' });
      }
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  static updateCourse = async (req: Request, res: Response) => {
    try {
      let body = req.body;
      const course = await Course.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
      if (course == null) {
        return res.status(404).json({ message: 'Cannot find course' });
      }
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  static deleteCourse = async (req: Request, res: Response) => {
    try {
      const course = await Course.findById(req.params.id);
      if (course == null) {
        return res.status(404).json({ message: 'Cannot find course' });
      }
      await course.remove();
      res.status(200).json({ message: 'Deleted course' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  /*
   * Tutor body requirements {userId, status(optional)}
   */
  static addTutor = async (req: Request, res: Response) => {
    let body = req.body;
    const newTutor = new Tutor(body);
    try {
      const tutor = await newTutor.save();
      if (tutor != null) return res.status(201).json(tutor);
      return res.status(400).json({ message: 'failed to add tutor' });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };

  static getTutors = async (req: Request, res: Response) => {
    try {
      console.log('tutors here');
      const tutors = await Tutor.find();
      return res.status(200).json(tutors);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };

  static getTutor = async (req: Request, res: Response) => {
    try {
      const tutor = await Tutor.findById(req.params.id);
      if (tutor == null) {
        return res.status(404).json({ message: 'Cannot find tutor' });
      }
      return res.status(200).json(tutor);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  /*
   * update tutor course information
   * header params {tutor.id}
   * accepted body params {status, course.id }
   */
  static updateTutor = async (req: Request, res: Response) => {
    let body = req.body;
    const tutor = await Tutor.findByIdAndUpdate(req.params.id, body, {
      new: true,
    });
    if (tutor != null)
      return res.status(200).json({ message: 'tutor account updated', tutor });
  };

  /*
   * remove tutor account
   * requirements are: must be an admin account
   * header params: tutor.id
   */
  static removeTutor = async (req: Request, res: Response) => {
    try {
      const tutor = await Tutor.findById(req.params.id);
      if (tutor == null) {
        return res.status(404).json({ message: 'Cannot find tutor' });
      }
      await tutor.remove();
      res.status(200).json({ message: 'Deleted tutor' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  /*
   * Add student
   * userId is required for this registration
   */
  static addStudent = async (req: Request, res: Response) => {
    let body = req.body;
    const student = new Student(body);
    try {
      await student.save();
      return res.status(200).json({
        message: 'you have successfully registerd for course',
        student,
      });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };

  static getStudents = async (req: Request, res: Response) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  static getStudent = async (req: Request, res: Response) => {
    try {
      const student = await Student.findById(req.params.id);
      if (student == null) {
        return res.status(404).json({ message: 'Cannot find student' });
      }
      res.status(200).json(student);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };

  /*
   * update student information
   */
  static updateStudent = async (req: Request, res: Response) => {
    let body = req.body;
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
      if (student == null)
        return res.status(404).json({ message: 'student not found' });
      return res.status(200).json({ message: 'student updated', student });
    } catch (err) {}
  };

  static removeStudent = async (req: Request, res: Response) => {
    try {
      const student = await Student.findById(req.params.id);
      if (student == null) {
        return res.status(404).json({ message: 'Cannot find student' });
      }
      await student.remove();
      res.status(200).json({ message: 'Deleted student' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  };
}
