import 'module-alias/register'
import { MongoHelper } from '@/infra/mongodb'
import app from '@/main/config/app'
import env from '@/main/config/env'

MongoHelper.connect(env.mongoUrl).then(() => {
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(console.error)
