export function MouseClicker() {

function handleButtonClick(e){
    console.log(e.currentTarget.name)
}

function handleImageClick(e){
    console.log(e.currentTarget.src)
}
    


    return (
      <>
        <button onClick={handleButtonClick} name="one"><img onClick={handleImageClick} src="https://www.quattrozampe.online/wp-content/uploads/2016/01/cane-felice.jpg" width={100} alt=""/>Click me!</button>
      </>
    );
  }


  /* Se clicchiamo sull'immagine vedremo in console sia "name" che "src" perchè l'evento è associato al button (target) ma abbiamo azionato l'evento
  cliccando sull'immagine (currentTarget), se clicchiamo, invece, sul pulsante e non sull'immagine, infatti, vedremo solo "name" 
 */