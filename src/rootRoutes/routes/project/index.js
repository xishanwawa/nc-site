 
 
 import project_list from './routes/list';

 const route = {
  path: 'project',
  indexRoute: { component: require('app/project/list/containers/') },
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        project_list,
      ])
    })
  }
}

export default route