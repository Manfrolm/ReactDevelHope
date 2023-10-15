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


/*Bisogna passare come paramentro una funzione, questo garantisce di lavorare con lo stato più aggiornato e aiuta 
a prevenire problemi legati ad aggiornamenti asincroni*/