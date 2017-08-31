
import project from './routes/project';
import app from 'app';

const rootRoutes = {
  childRoutes: [
    {
      path: '/login',
      getComponents(location, callback) {
        require.ensure([], function (require) {
          callback(null, require('app/login/main/containers'))
        })
      },
    }, {
      path: '/',
      getComponents(location, callback) {
        require.ensure([], function (require) {
          callback(null, app)
        })
      },
      childRoutes: [
        project,
      ]
    }
  ]
}

export default rootRoutes