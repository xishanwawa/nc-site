import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

const routes = {
  path: '/',
  childRoutes: [
    { 
      path: 'home', 
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/Home'))
        })
      }
    },
    { 
      path: 'list', 
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/List'))
        })
      }
    },
  ],
  component: require('containers'),
  indexRoute: { component: require('containers/Home') },
  // getComponent(nextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, require('containers'))
  //   })
  // }
}

export default class Routes extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
          <Router routes={routes} history={browserHistory} />
        )
    }
}