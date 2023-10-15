import {useState} from 'react'

export function Counter(){
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((c) => {
            return c + 1
        })
    }

    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}