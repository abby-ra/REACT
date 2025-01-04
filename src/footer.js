import React from 'react'

const footer = () => {
    const year = new Date();

    return (
       <footer>Copyright &copy; {year.getFullYear()} </footer>
    ) 
}

export default footer