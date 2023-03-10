import React from 'react';
import './_NavBar.styles.scss'

function NavBar() {
  
  return (
    <div className='box' >
      <img src='./images/logo3.png' style={{width: '3.5rem', marginRight: '.5rem'}}></img>
      
        <input
        placeholder="Nunca dejes de buscar"
        style={{width: '70%', display: 'flex', justifyContent: 'center', height: '2rem'}}
        />
        <button
        type='submit'
        >
          <img src='./images/lupa.webp'
          style={{width: '1.7rem', heigth: '1.7rem'}}>

          </img>
        </button>
        
    </div>
  )
}

export default NavBar