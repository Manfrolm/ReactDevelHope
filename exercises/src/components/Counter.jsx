import {useState} from 'react'
import { CounterDisplay }  from './CounterDisplay'

export function Counter({initialValue, incrementValue}){
    const [count, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter((c) => {
            return c + incrementValue
        })
    }

    return (
        <>
        <CounterDisplay content={count}/>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

