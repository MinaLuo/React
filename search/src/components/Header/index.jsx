import { Select, Input } from 'antd';
import './index.less';
const { Option } = Select;
const { Search } = Input;

function Header(props) {
    const handleChange = (value) => {
        props.handleChange(value);
    }
    const onSearch = (value) => {
        props.onSearch(value);
    }

    return (
        <div className="header">
            <Select defaultValue="2" style={{ width: 120 }} onChange={handleChange}>
                <Option value="2">全部性别</Option>
                <Option value="0">男</Option>
                <Option value="1">女</Option>
            </Select>
            <Search placeholder="搜索ID或名称" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    );
}

export default Header;