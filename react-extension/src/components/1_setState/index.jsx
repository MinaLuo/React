import React, { Component } from 'react'

export default class Demo extends Component {

    state = {
        count: 0,
    }

    add = () => {
        //对象式的setState
        // //1.获取原来的count值
        // const { count } = this.state;
        // //2.更新状态
        // this.setState({ count: count + 1 }, () => {
        //     console.log(this.state.count, '14行的输出')
        // })
        // // console.log(this.state.count, '16行的输出');//0

        //函数式的setState
        // this.setState(state => ({ count: state.count + 1 }))
        setTimeout(() => {
            // console.log('点击同步减少前', this.state.count)
            // // this.setState(state => ({ count: state.count + 1 }))
            // this.setState({ count: this.state.count + 1 })
            // console.log('点击同步减少后', this.state.count)
        })

        new Promise((reslove, reject) => {
            reslove(1)
        }).then(() => {
            console.log('点击同步减少前', this.state.count)
            // this.setState(state => ({ count: state.count + 1 }))
            this.setState({ count: this.state.count + 1 })
            console.log('点击同步减少后', this.state.count)
        })
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
