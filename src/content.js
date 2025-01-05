import React from 'react';

const Content = () => {
   
        function handleNameChange(){
            const names = ["grow","work","give"];
            const int = Math.floor(Math.random() * 3);
            return names[int]
          }
        const handleClick = () =>{
            console.log('Thanks for the support')
        }

        return (
            <main>
            <div >
              <h1> Let {handleNameChange()}</h1>
              <button onClick={handleClick}>Subscribe</button>
            </div>
           </main>
        );
  
}

export default Content