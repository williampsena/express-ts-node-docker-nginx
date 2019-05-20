import express from 'express'
import registerRoutes from './routes';

const { PORT = 3000 }  = process.env
const app: express.Application = express()

registerRoutes(app)

app.listen(PORT, () => {
  console.log(`🔥  Application is listening on port ${PORT}!`)
})
