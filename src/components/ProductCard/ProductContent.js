import React from 'react'

function ProductContent({children}) {
  return (
    <div className='product-card__content'>
        {children}
    </div>
  )
}

export default ProductContent