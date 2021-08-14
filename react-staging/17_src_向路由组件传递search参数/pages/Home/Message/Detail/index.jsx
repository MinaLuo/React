import React, { Component } from 'react';
import qs from 'querystring';

let obj = { name: 'tom', age: 18 }//name=tom&age=18 key=value&key=value
console.log(qs.stringify(obj))

let str = 'carNmae=奔驰&price=199'
console.log(qs.parse(str))

const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，尚硅谷' },
    { id: '03', content: '你好，未来的自己' }
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        //接收params参数
        // const { id, title } = this.props.match.params;

        //接收search参数
        const { search } = this.props.location;
        const { id, title } = qs.parse(search.slice(1));
        const findResult = DetailData.find(detailObj => detailObj.id === id)
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
