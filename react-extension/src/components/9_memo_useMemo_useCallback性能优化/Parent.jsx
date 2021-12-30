import React, {
    // Component, PureComponent, 
    useState, memo,
    //  useCallback, 
    useMemo
} from 'react'

const Child = memo(props => {
    console.log('Child render')
    return (
        <div>
            {props.count}
            <ul>
                {props.render}
            </ul>
        </div>

    )
})

// class Child extends PureComponent {
//     render() {
//         console.log('Child render')
//         return (
//             <div>
//                 {this.props.count}
//                 {/* <ul>
//                     {this.props.render()}
//                 </ul> */}
//             </div>

//         )
//     }
// }


export default function Parent() {
    const [count, setCount] = useState(0)
    const [range, setRange] = useState({ min: 0, max: 100 })

    // const render = useCallback(() => {
    //     let list = []
    //     console.log(1)
    //     for (let i = 0; i < range.max; i++) {
    //         list.push(<li key={i}>{i}</li>)
    //     }
    //     return list
    // }, [range])

    const render = useMemo(() => {
        let list = []
        console.log(1)
        for (let i = 0; i < range.max; i++) {
            list.push(<li key={i}>{i}</li>)
        }
        return list
    }, [range])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>点击加1</button><br />
            <button onClick={() => setRange({
                ...range,
                max: range.max + 1
            })}>点击下边列表加1</button>
            <Child render={render} count={1} />
        </div>
    )
}