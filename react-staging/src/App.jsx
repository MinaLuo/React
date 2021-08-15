//创建”外壳“组件App
import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import { WechatOutlined, WeiboSquareOutlined, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { RangePicker } = DatePicker;

//创建并暴露App组件
export default class App extends Component {
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    render() {
        return (
            <div>
                App......
                <button>点我</button>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <WechatOutlined />
                <WeiboSquareOutlined />
                <DatePicker onChange={this.onChange} />
                <RangePicker />
            </div>
        )
    }
}