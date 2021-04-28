import {
  addDeveloperPath,
  deleteDeveloperPath,
  listOneDeveloperPath,
  updateDeveloperPath
} from './paths/index'

export default {
  '/developers': addDeveloperPath,
  '/developers/{id}': deleteDeveloperPath,
  '/developers/{ID}': updateDeveloperPath,
  '/developers/{devId}': listOneDeveloperPath
}
