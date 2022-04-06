const { Router } = require('express');
const { check } = require('express-validator');

const {
  validateToken,
  validateFields,
  validateTaskId,
  validateTaskExists,
} = require('../middlewares');

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require('../controllers/task.controller');

const router = Router();

router.get('/', validateToken, getAllTasks);

router.get(
  '/:id',
  [validateToken, validateTaskId, validateTaskExists],
  getTaskById
);

router.post(
  '/',
  [
    validateToken,
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('description', 'La descripción es requerida').not().isEmpty(),
    validateFields,
  ],
  createTask
);

router.put(
  '/:id',
  [
    validateToken,
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('description', 'La descripción es requerida').not().isEmpty(),
    validateFields,
    validateTaskId,
    validateTaskExists,
  ],
  updateTaskById
);

router.delete(
  '/:id',
  [validateToken, validateTaskId, validateTaskExists],
  deleteTaskById
);

module.exports = router;
