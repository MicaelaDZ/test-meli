import React from 'react';
// import '../styles/barra/barra.scss';
// import 'src/styles/barra/barra.scss';

function Barra() {

  
  return (
    <div className='box'
    style={{color:"black",
    marginTop: '0px',
    height: '3.5rem',
    width: '100%',
    backgroundColor: 'yellow',
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center'

    }}
    >
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

export default Barra