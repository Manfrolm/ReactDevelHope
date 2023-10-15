import {useState} from 'react'

export function Counter({initialValue = 0, incrementValue = 1}){
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


/*Bisogna passare come paramentro una funzione, questo garantisce di lavorare con lo stato più aggiornato e aiuta 
a prevenire problemi legati ad aggiornamenti asincroni*/