// src/routes/studentsRoutes.js

import { Router } from 'express';
import {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
} from '../controllers/studentsController.js';
import { celebrate } from 'celebrate';
import {
  createStudentSchema,
  updateStudentSchema,
  studentIdParamSchema,
} from '../validations/studentsValidation.js';
import { getStudentsSchema } from '../validations/studentsValidation.js';

const router = Router();

router.get('/students', celebrate(getStudentsSchema), getStudents);

router.get('/students', getStudents);
router.get(
  '/students/:studentId',
  celebrate(studentIdParamSchema),
  getStudentById,
);
router.delete(
  '/students/:studentId',
  celebrate(studentIdParamSchema),
  deleteStudent,
);
router.post('/students', celebrate(createStudentSchema), createStudent);
router.patch(
  '/students/:studentId',
  celebrate(updateStudentSchema),
  updateStudent,
);

export default router;
