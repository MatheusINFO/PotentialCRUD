import {
  developersSchema ,
  updateDeveloperParamsSchema ,
  addDeveloperParamsSchema ,
  errorSchema ,
  developerSchema
} from './schemas/index'

export default {
  error: errorSchema,
  developer: developerSchema,
  developers: developersSchema,
  addDeveloperParams: addDeveloperParamsSchema,
  updateDeveloperParams: updateDeveloperParamsSchema
}
