import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Gazin API',
    description: 'Potentital CRUD para api criada para a Gazin',
    version: '1.0.0'
  },
  servers: [{
    url: ''
  }],
  tags: [{
    name: 'Developer'
  }],
  schemas,
  components
}
