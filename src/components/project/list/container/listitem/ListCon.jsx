import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';

const style = {
  width: 400,
};

//@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      list: [{
        id: 1,
        text: 'Write a cool JS library',
      }, {
        id: 2,
        text: 'Make it generic enough',
      }, {
        id: 3,
        text: 'Write README',
      }, {
        id: 4,
        text: 'Create some examples',
      }, {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      }, {
        id: 6,
        text: '???',
      }, {
        id: 7,
        text: 'PROFIT',
      }],
    };
  }

  moveCard(dragIndex, hoverIndex) {
    //const { list } = this.state;
    const { list } = this.props;
    const dragCard = list[dragIndex];

    this.setState(update(this.state, {
      list: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));
  }

  render() {
    //const { list } = this.state;
    const { list } = this.props;
    return (
      <div style={style}>
        {list.map((item, i) => (
          <Card
            key={item.id}
            index={i}
            text={item.text}
            moveCard={this.moveCard}
          />
        ))}
      </div>
    );
  }
}