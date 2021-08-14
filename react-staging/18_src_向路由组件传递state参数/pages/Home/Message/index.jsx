import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ]
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msgObk => {
                            return (
                                <li key={msgObk.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObk.id}/${msgObk.title}`}>{msgObk.title}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObk.id}&title=${msgObk.title}`}>{msgObk.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{ pathname: "/home/message/detail", state: { id: msgObk.id, title: msgObk.title } }}>{msgObk.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search参数无需声明接收,正常注册路由即可 */}
                {/* <Route path="/home/message/detail/" component={Detail} /> */}

                {/* state参数无需声明接收,正常注册路由即可 */}
                <Route path="/home/message/detail/" component={Detail} />
            </div>
        )
    }
}
