import React from 'react';

const Content = () => {

        function handleNameChange(){
            const names = ["grow","work","give"];
            const int = Math.floor(Math.random() * 3);
            return names[int]
          }
        
          return (
            <div >
              <h1> Let {handleNameChange()}</h1>
             
            </div>
          );

}

export default Content