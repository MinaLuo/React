import React, { Component } from 'react'

export default class Demo extends Component {
    //react16
    //document捕获 
    // 父元素原生捕获 
    // 子元素原生捕获 
    // 子元素原生冒泡 
    // 父元素原生冒泡 
    //先执行React注册的事假处理函数dispachEvent,重新模拟一遍捕获和冒泡的流程
    // 父元素React事件捕获 
    // 子元素React事件捕获 
    // 子元素React事件冒泡 
    // 父元素React事件冒泡 
    // document冒泡

    //react17
    // document捕获
    // 父元素React事件捕获
    // 子元素React事件捕获
    //父元素原生捕获
    // 子元素原生捕获
    // 子元素原生冒泡
    // 父元素原生冒泡
    // 子元素React事件冒泡
    // 父元素React事件冒泡
    // document冒泡
    parentRef = React.createRef();
    childRef = React.createRef();
    componentDidMount() {
        this.parentRef.current.addEventListener('click', () => {
            console.log('父元素原生捕获')
        }, true)//这里true意为事件捕获
        this.parentRef.current.addEventListener('click', () => {
            console.log('父元素原生冒泡')
        })
        this.childRef.current.addEventListener('click', () => {
            console.log('子元素原生捕获')
        }, true)
        this.childRef.current.addEventListener('click', () => {
            console.log('子元素原生冒泡')
        })
        document.addEventListener('click', () => {
            console.log('document捕获')
        }, true)
        document.addEventListener('click', () => {
            console.log('document冒泡')
        })
    }
    parentBubble = () => {
        console.log('父元素React事件冒泡')
    }
    childBubble = () => {
        console.log('子元素React事件冒泡')
    }
    parentCapture = () => {
        console.log('父元素React事件捕获')
    }
    childCapture = () => {
        console.log('子元素React事件捕获')
    }
    render() {
        return (
            <div ref={this.parentRef} onClick={this.parentBubble} onClickCapture={this.parentCapture}>
                <p ref={this.childRef} onClick={this.childBubble} onClickCapture={this.childCapture}>
                    事件执行顺序
                </p>
            </div>
        )
    }
}
