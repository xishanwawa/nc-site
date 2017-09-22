import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import ListCon from './listitem/ListCon'

const style = {
  minHeight: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

const boxTarget = {
  drop() {
    return { name: '自定义表单框' };
  },
};

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Dustbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let nodeList = this.props.list.map((item)=>{
          return <div><span>{item.name}</span>|<span>{item.type}</span></div>
    })

    let backgroundColor = '#f7f7f7';
    if (isActive) {
      backgroundColor = '#f5f5f5';
    } else if (canDrop) {
      backgroundColor = '#eeeeee';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        { nodeList }
        <ListCon list={ this.props.list } changeList = {this.props.changeList} />
      </div>,
    );
  }
}