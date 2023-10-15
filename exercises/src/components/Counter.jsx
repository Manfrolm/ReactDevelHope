import {useState} from 'react'
import { useEffect } from 'react';
import { CounterDisplay }  from './CounterDisplay'

export function Counter({initialValue, incrementValue, decrementValue}){
    const [count, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter((c) => {
            return c + incrementValue
        })
    }

    const handleDecrement = () => {
        setCounter((c) => {
            return c - decrementValue
        })
    }

    const handleReset = () => {
        setCounter(0)
    }


    useEffect(() => {
        console.log(`Il valore del counter è ${count}`)
        }, [count])

    return (
        <>
        <CounterDisplay content={count}/>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}

