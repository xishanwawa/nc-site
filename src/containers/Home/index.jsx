/**
 * Created by ***
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//导入UI组件
import Counter from "components/Home/Counter"

//导入action方法
import { onIncrement, onDecrement } from "actions/home"

class Home extends React.Component {

  constructor(props) {
    super(props)
    let data = [
      {
        name: "ytm1",
      }, {
        name: "ytm2",
      }, {
        name: "ytm3"
      }
    ]
    data = data.map((item, index) => {
      return Object.assign({}, item, { localIndex: index })
    })

    this.state = {
      data
    }
  }

  componentDidMount() {
  }

  onDelete = (localIndex) => {
    let localData = this.state.data;
    if(localData[localIndex]["isAdd"]){
      localData.splice(localIndex, 1)
    }else{
      localData[localIndex]["delete"] = 1;
    };

    this.setState({data: localData});
  }

  addItem = () => {
    let localData = this.state.data;
    localData.push({name:"add", localIndex: localData.length, isAdd: 1})
    this.setState({data: localData});
  }

  submit =()=>{
    let localData = this.state.data;

    localData = localData.map((item=>{
      return item
    }))
    console.log(localData);
  }

  render() {

    let renderUiData = this.state.data.filter((item) => {
      return item.delete != 1;
    });

    let nodeUi = renderUiData.map((item) => {
      return <div>{item.name}<button onClick={() => {this.onDelete(item.localIndex)}}>{"删除"}</button></div>
    });

    return (
      <div>
        <button onClick={() => {this.addItem()}}>{"新增"}</button>
        {nodeUi}
        <button onClick={() => {this.submit()}}>{"提交"}</button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    $$state: state.home
  }
}

module.exports = connect(mapStateToProps, {
  onIncrement,
  onDecrement,
})(Home)



//or

// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }
// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)


