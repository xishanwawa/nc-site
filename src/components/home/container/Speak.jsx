import React, { Component, PropTypes } from 'react'
import { Mention } from 'antd';
const { toString, toContentState } = Mention;

import './speak.less'

class Speak extends React.Component {

    static defaultProps = {
        users: ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'],
        tags: ['1.0', '2.0', '3.0']
    }

    constructor(props) {
        super(props);
        this.state = {
            contentState: '',
            suggestion: []
        }
    }

    onMentionChange = (contentState) => {
        this.setState({
            contentState
        })
    }

    onSelect = (suggestion) => {
       this.setState({
            suggestion
       })
    }

    onSearchChange = (value, trigger) => {
        console.log('onSearchChange', value, trigger);
        const dataSource = trigger === '@' ? this.props.users : this.props.tags;
        this.setState({
           suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
        });
    }

    addnotice = () => {
        let that = this;
        
        this.setState({
            contentState: toContentState('@')
        }, function(){
           that.refs.mention.focus()
        })
    

    }

    render() {
        return <div>
            <Mention
                prefix={['@', '#']}
                value = {this.state.contentState}
                style={{ width: '100%', height: 100 }}
                suggestions={this.state.suggestions}
                onSearchChange={this.onSearchChange}
                onChange={this.onMentionChange}
                onSelect={this.onSelect}
                ref = "mention"
            />
            <div className="speak-tool-box">
              <div className="speak-tool-item">表情</div>
              <div className="speak-tool-item" onClick = {this.addnotice.bind(this)}>@*</div>
              <div className="speak-tool-item">话题</div>
            </div>
        </div>
    }
}

export default Speak