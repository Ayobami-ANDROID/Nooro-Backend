import { Router } from 'express';
import * as TodoController from '../controllers/todoController';

const router = Router();

router.post('/', TodoController.createTodo);
router.get('/', TodoController.getAllTodos);
router.get('/:id', TodoController.getTodoById);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;