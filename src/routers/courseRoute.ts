import { Express } from 'express';
import controller from '../controllers/CourseController';

export default function (app: Express) {
  app
    .get('/courses/', controller.getCourses)
    .get('/course/:id', controller.getCourse)
    .post('/course/add', controller.createCourse)
    .put('/course/:id', controller.updateCourse)
    .delete('/course/:id', controller.deleteCourse);

  // tutor course registration
  app
    .get('/course/tutor/all', controller.getTutors)
    .get('/course/tutor/:id', controller.getTutor)
    .post('/course/tutor/add', controller.addTutor)
    .put('/course/tutor/:id', controller.updateTutor)
    .delete('/course/tutor/:id', controller.removeTutor);

  // student course registration
  app
    .get('/course/student/all', controller.getStudents)
    .get('/course/student/:id', controller.getStudent)
    .post('/course/student/add', controller.addStudent)
    .put('/course/student/:id', controller.updateStudent)
    .delete('/course/student/:id', controller.removeStudent);
}
