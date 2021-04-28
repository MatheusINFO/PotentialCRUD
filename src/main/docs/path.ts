import {
  addDeveloperPath,
  deleteDeveloperPath,
  updateDeveloperPath
} from './paths/index'

export default {
  '/developers': addDeveloperPath,
  '/developers/{id}': deleteDeveloperPath,
  '/developers/{ID}': updateDeveloperPath
}
