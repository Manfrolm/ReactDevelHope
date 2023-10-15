export function MouseClicker() {

function handleButtonClick(e){
    console.log(e.currentTarget.name)
}
    


    return (
      <>
        <button onClick={handleButtonClick} name="one"><img src="https://www.quattrozampe.online/wp-content/uploads/2016/01/cane-felice.jpg" width={100} alt=""/>Click me!</button>
      </>
    );
  }