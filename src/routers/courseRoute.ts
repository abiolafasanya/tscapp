import { Express } from 'express';
import controller from '../controllers/CourseController';
import { auth } from '../middlewares/auth';

export default function (app: Express) {
  app
    .get('/courses', controller.getCourses)
    .get('/course/:id', auth, controller.getCourse)
    .post('/course/add', auth, controller.createCourse)
    .put('/course/:id', auth, controller.updateCourse)
    .delete('/course/:id', auth, controller.deleteCourse);

  // tutor course registration
  app
    .get('/course/tutor/all', auth, controller.getTutors)
    .get('/course/tutor/:id', auth, controller.getTutor)
    .post('/course/tutor/add', auth, controller.addTutor)
    .put('/course/tutor/:id', auth, controller.updateTutor)
    .delete('/course/tutor/:id', auth, controller.removeTutor);

  // student course registration
  app
    .get('/course/student/all', auth, controller.getStudents)
    .get('/course/student/:id', auth, controller.getStudent)
    .post('/course/student/add', auth, controller.addStudent)
    .put('/course/student/:id', auth, controller.updateStudent)
    .delete('/course/student/:id', auth, controller.removeStudent);
}
