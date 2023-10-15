import {useState} from 'react'

export function Counter({initialValue, incrementValue}){
    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter((c) => {
            return c + incrementValue
        })
    }

    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

