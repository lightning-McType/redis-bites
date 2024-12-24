import type { Response, Request, NextFunction } from 'express';
import { errorResponse } from '../utils/responses.js';

export function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	console.error(err);
	return errorResponse(res, 500, err);
}
