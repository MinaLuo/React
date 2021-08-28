import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users: [
            { id: '001', name: 'tom', age: 18 },
            { id: '002', name: 'jack', age: 19 },
            { id: '003', name: 'peiqi', age: 20 },
        ]
        // users: 'abc'
    }

    demo = () => {

    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map(usersObject => {
                        return <h4 key={usersObject.id}>{usersObject.name}-----{usersObject.age}</h4>
                    })
                }
            </div>
        )
    }
}