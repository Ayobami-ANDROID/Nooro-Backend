import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

// Custom error class
class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Global error handler middleware
export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      status: 'validation error',
      errors: err.errors
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Prisma specific error handling
    switch (err.code) {
      case 'P2002':
        return res.status(409).json({
          status: 'conflict',
          message: 'Unique constraint violation'
        });
      case 'P2025':
        return res.status(404).json({
          status: 'not found',
          message: 'Record not found'
        });
      default:
        return res.status(500).json({
          status: 'database error',
          message: 'An unexpected database error occurred'
        });
    }
  }

  // Catch-all for unhandled errors
  res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
};

// Async wrapper to handle async route errors
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Not found middleware
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(`Not Found - ${req.originalUrl}`, 404);
  next(error);
};

export { AppError };