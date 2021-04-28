import {
  updateDeveloperParamsSchema ,
  addDeveloperParamsSchema ,
  errorSchema ,
  developerSchema
} from './schemas/index'

export default {
  error: errorSchema,
  developer: developerSchema,
  addDeveloperParams: addDeveloperParamsSchema,
  updateDeveloperParams: updateDeveloperParamsSchema
}
