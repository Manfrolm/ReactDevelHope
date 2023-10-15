export function AlertClock() {
    const handleButtonClick = () => {
        const currentTime = new Date().toLocaleTimeString();
        alert(`The current time is: ${currentTime}`)
    }


    return(
        <>
        <p>Click the button to know the time</p>
        <button onClick={handleButtonClick}>Click me</button>
        </>
    )
}