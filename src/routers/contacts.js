import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getStudentsController));

router.get('/contacts/:contactId', ctrlWrapper(getStudentByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
