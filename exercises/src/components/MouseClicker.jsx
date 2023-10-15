export function MouseClicker() {

function handleButtonClick(e){
    console.log(e.currentTarget.name)
}

function handleImageClick(e){
    e.stopPropagation();
    console.log(e.currentTarget.src)
}
    


    return (
      <>
        <button onClick={handleButtonClick} name="one"><img onClick={handleImageClick} src="https://www.quattrozampe.online/wp-content/uploads/2016/01/cane-felice.jpg" width={100} alt=""/>Click me!</button>
      </>
    );
  }


  /* Per impedire di far apparire "name" possiamo utilizzare il metodo stopPropagation() che ci permette di prevenire la propagazione 
  della chiamata dello stesso evento
 */