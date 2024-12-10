import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { asyncHandler, AppError } from '../middleware/errorMiddleware';

const prisma = new PrismaClient();

const TodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  color:z.string(),
  completed: z.boolean().optional()
});

export const createTodo = asyncHandler(async (req: Request, res: Response) => {
  const validatedData = TodoSchema.parse(req.body);
  const todo = await prisma.todo.create({ data: validatedData });
  res.status(201).json(todo);
});

export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

export const getTodoById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await prisma.todo.findUnique({ where: { id: parseInt(id) } });
  
  if (!todo) {
    throw new AppError('Todo not found', 404);
  }
  
  res.json(todo);
});

export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const validatedData = TodoSchema.partial().parse(req.body);
  
  const todo = await prisma.todo.update({
    where: { id: parseInt(id) },
    data: validatedData
  });
  
  res.json(todo);
});

export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  await prisma.todo.delete({ where: { id: parseInt(id) } });
  res.status(204).send();
});