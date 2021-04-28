import {
  addDeveloperPath,
  deleteDeveloperPath
} from './paths/index'

export default {
  '/developers': addDeveloperPath,
  '/developers/{id}': deleteDeveloperPath
}
