import React, { useReducer } from 'react';

function Demo() {

    const constReducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1;
            case 'minus':
                return state - 1;
            default:
                return state
        }
    }

    const [count, countDispatch] = useReducer(constReducer, 0)

    const onClick = () => {
        countDispatch({ type: 'minus' })
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={onClick}>button</button>
        </div>
    )
}

export default Demo;