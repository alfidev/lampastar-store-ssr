import { Request, Response } from 'express';

/**
 * Custom middleware for error handling.
 *
 * In development environment, it will write the stack in the response.
 *
 * Always put error middlewares last in the request pipeline.
 *
 * @returns The error middleware function.
 */
export function errorMiddleware() {
  if (__PRODUCTION__) {
    // return function (err: Error, _req: Request, res: Response, next: NextFunction) {
    return function (err: Error, _req: Request, res: Response) {
      console.error(err.stack);
      res.status(500).send('Internal server error.');
    };
  }

  // return function (err: Error, _req: Request, res: Response, next: NextFunction) {
  return function (err: Error, _req: Request, res: Response) {
    console.error(err);
    res.status(500).send('Internal server error.   Stack:   ' + err.stack);
  };
}
