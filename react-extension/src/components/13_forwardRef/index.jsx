import React, { useRef, forwardRef } from 'react';

const Foo = forwardRef((params, inputRef) => {
    // const inputRef = useRef()
    const onClick = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={onClick}>聚焦</button>
        </div>
    )
})

export default function Demo() {
    const inputRef = useRef()
    const onClick = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <Foo ref={inputRef} />
            <button onClick={onClick}>父组件</button>
        </div>
    )
}