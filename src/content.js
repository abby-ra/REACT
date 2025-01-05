import React from 'react';
import { useState } from 'react';

const Content = () => {
   
        function handleNameChange(){
            const names = ["grow","work","give"];
            const int = Math.floor(Math.random() * 3);
            return names[int]
          }
        
          const [count , setCount] = useState(99);

          

        return (
            <main>
            <div >
              <h1> Let Earn Money</h1>
              <button > Subscribe</button><br></br>
              <button>-</button> <br></br>
              <span>{count}</span> <br></br>
              <button >+</button><br></br>
            </div>
           </main>
        );
  
}

export default Content