export function MouseClicker() {

function handleButtonClick(e){
    console.log(e.target.name)
}
    


    return (
      <>
        <button onClick={handleButtonClick} name="one">Click me!</button>
      </>
    );
  }