export function MultiButton() {

    function handleButtonClick(e){
        console.log(e.target.name)
    }
        
        return (
          <>
            <button onClick={handleButtonClick} name="one">Button 1</button>
            <button onClick={handleButtonClick} name="two">Button 2</button>
            <button onClick={handleButtonClick} name="three">Button 3</button>
          </>
        );
      }