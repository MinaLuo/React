import './index.less';

function List(props) {
    return (
        <div className="list">
            {
                props.mockData.map(mock => {
                    return <div className="item" key={mock.id}>
                        <div>{mock.name}</div>
                        <div>
                            <span>ID：</span>
                            {mock.id}
                        </div>
                        <div>
                            <span>性别：</span>
                            {mock.sex}
                        </div>
                    </div>
                })
            }

        </div>
    );
}

export default List;