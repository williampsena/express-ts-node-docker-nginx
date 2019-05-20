import { Application, Request, Response } from "express";

export const hello = (_req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
}

export default function register (app: Application) {
  app.get('/', hello)
}
