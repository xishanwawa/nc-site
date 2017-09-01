
//import project from './routes/project';
// import app from 'app';

const rootRoutes = {
  childRoutes: [
    {
      path: '/login',
      getComponents(location, cb) {
        require.ensure([], function (require) {
          cb(null, require('components/login/container'))
        })
      },
    },
    {
      path: '/',
      getComponents(location, cb) {
        require.ensure([], function (require) {
          cb(null,  require('components/home/container'))
        })
      },
      getChildRoutes(location, cb) {
        require.ensure([], function (require) {
          cb(null, [
            require('./routes/project').default
          ])
        })
      },
    }
  ]
}

export default rootRoutes