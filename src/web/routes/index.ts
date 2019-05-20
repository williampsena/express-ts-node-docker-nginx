import { Application } from 'express'
import registerHomeRoute from './home'

export type RegisterRoute = (app: Application) => void

export const routes: Record<string, RegisterRoute> = {
  home: registerHomeRoute
}

export default function registerRoutes(app: Application) {
  Object.values(routes).forEach(register => {
    register(app)
  })
}

