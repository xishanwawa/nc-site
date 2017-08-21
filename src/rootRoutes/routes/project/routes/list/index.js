
import projectList from 'app/project/list/containers';

const route = {
  path: 'list',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, projectList)
    })
  }
}

export default route