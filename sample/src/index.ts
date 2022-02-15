import express from 'express'
import cors from 'cors'
import { BeagleApp } from '@zup-it/beagle-backend-express'
import { routes as beagleRoutes } from './beagle/screens'
import { applyRoutes } from './routes'

const port = 3000
const expressApp = express()

expressApp.use(cors()).use(express.json())

expressApp.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

applyRoutes(expressApp)
new BeagleApp(expressApp, beagleRoutes, { basePath: '/beagle' })
