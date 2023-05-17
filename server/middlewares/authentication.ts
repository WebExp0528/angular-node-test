import { Request } from 'express';
export async function expressAuthentication(request: Request, securityName: string, _scopes?: string[]) {
  return Promise.resolve(request);
}
