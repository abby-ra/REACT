import React from 'react'

const Header = () =>{

    function handleNameChange(){
        const names = ["abby","eni","raj"];
        const int = Math.floor(Math.random() * 3);
        return names[int]
      }
    
      return (
        <div >
          <h1> Let {handleNameChange()}</h1>
        </div>
      );
}

export default Header