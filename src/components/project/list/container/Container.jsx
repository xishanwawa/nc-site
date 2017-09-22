import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';

export default class Container extends Component {
  constructor(props){
    super(props)
    this.state = {
      formlist: []
    }
  }

  changeList = (item) => {
       var obj = Object.assign({}, this.state);
       obj.formlist.push({
          id: 1,
          text: 'Write a cool JS library'
       })
       this.setState({
         formlist: obj.formlist
       })
  }
  
  changeSortList = (dragIndex, hoverIndex, dragCard) => {
    this.setState(update(this.state, {
      formlist: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));
  }
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="单行文本" changeList = {this.changeList.bind(this, 'input')} />
            <Box name="多行文本" changeList = {this.changeList.bind(this, 'textarea')} />
            <Box name="数值" changeList = {this.changeList.bind(this, 'number')} />
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin list = {this.state.formlist} changeList = {this.changeSortList} />
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}