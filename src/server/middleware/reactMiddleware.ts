import { NextFunction, Request, Response } from 'express';
import { getPipeableAsync } from 'server/ssr/pipeableReactAsync';

/**
 * Creates a React Server Side Rendering middleware.
 *
 * Install it right after the static files middleware.
 *
 * @returns The react SSR middleware function.
 */
export function reactMiddleware() {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await getPipeableAsync(req, res);
    } catch (error) {
      next(error);
    }
  };
}
