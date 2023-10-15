import { useState, useEffect } from "react";

export function Clock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() =>{
            setDate(new Date())
        }, 1000)
    }, [])


    return (
      <>
        <h2>The time is: {date.toLocaleTimeString()}</h2>
      </>
    );
  }