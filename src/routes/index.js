
//import project from './routes/project';
// import app from 'app';

const rootRoutes = {
  childRoutes: [
    {
      path: '/login',
      getComponents(location, cb) {
        require.ensure([], function (require) {
          cb(null, require('components/login/container').default)
        })
      }
    },
    {
      path: '/crmweb',
      getComponents(location, cb) {
        require.ensure([], function (require) {
          cb(null,  require('components/home/container').default)
        })
      },
      getIndexRoute(location, cb) {
        require.ensure([], function (require) {
          cb(null, {
            component: require('components/project/list/container').default
          })
        })
      },
      getChildRoutes(location, cb) {
        require.ensure([], function (require) {
          cb(null, [
            require('./routes/project').default,
            require('./routes/user').default
          ])
        })
      },
    }
  ]
}

export default rootRoutes