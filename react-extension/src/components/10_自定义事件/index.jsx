import React, { Component } from 'react';
var EventEmitter = require('events').EventEmitter;

let emitter = new EventEmitter();

class ListItem extends Component {
    static defaultProps = {
        checked: false
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
                <span>{this.props.value}</span>
            </li>
        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list.map(entry => ({
                text: entry.text,
                checked: entry.checked || false
            }))
        };
        console.log(this.state);
    }

    onItemChange(entry) {
        const { list } = this.state;
        this.setState({
            list: list.map(prevEntry => ({
                text: prevEntry.text,
                checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked
            }))
        });
        //这里触发事件
        emitter.emit('ItemChange', entry);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((entry, index) => {
                        return (<ListItem
                            key={`list-${index}`}
                            value={entry.text}
                            checked={entry.checked}
                            onChange={this.onItemChange.bind(this, entry)}
                        />);
                    })}
                </ul>
            </div>
        );
    }
}

export default class Container extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.itemChange = emitter.addListener('ItemChange', (msg, data) => console.log(msg));//注册事件
    }
    componentWillUnmount() {
        emitter.removeListener(this.itemChange);//取消事件
    }
    render() {
        return (
            <List list={[{ text: 1 }, { text: 2 }]} />
        )
    }
}
