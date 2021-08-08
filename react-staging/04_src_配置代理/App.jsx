//创建”外壳“组件App
import React, { Component } from 'react';
import axios from 'axios';

//创建并暴露App组件
export default class App extends Component {

    geStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => { console.log('成功了', response.data); },
            error => { console.log('失败了', error); }
        )
    }

    geCarData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => { console.log('成功了', response.data); },
            error => { console.log('失败了', error); }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.geStudentData}>点我获取学生数据</button>
                <button onClick={this.geCarData}>点我获取汽车数据</button>
            </div>
        )
    }
}