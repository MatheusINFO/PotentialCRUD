import {
  addDeveloperPath,
  deleteDeveloperPath,
  listAllDevelopersPath,
  listOneDeveloperPath,
  updateDeveloperPath
} from './paths/index'

export default {
  '/developers': addDeveloperPath,
  '/developers/{id}': deleteDeveloperPath,
  '/developers/{ID}': updateDeveloperPath,
  '/developers/{devId}': listOneDeveloperPath,
  '/developers?': listAllDevelopersPath
}
