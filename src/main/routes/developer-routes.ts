import { Router } from 'express'
import { adaptRoute } from '@/main/adapter'
import {
  makeAddDeveloperController ,
  makeDeleteDeveloper,
  makeListAllDevelopersController,
  makeListOneDeveloper,
  makeUpdateDeveloper
} from '@/main/factories'

export default (router: Router): void => {
  router.post('/developers', adaptRoute(makeAddDeveloperController()))
  router.get('/developers?', adaptRoute(makeListAllDevelopersController()))
  router.get('/developers/:id', adaptRoute(makeListOneDeveloper()))
  router.put('/developers/:id', adaptRoute(makeUpdateDeveloper()))
  router.delete('/developers/:id', adaptRoute(makeDeleteDeveloper()))
}
