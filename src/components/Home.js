import React from 'react'
import {CartState} from '../context/Context'

import SingleProduct from './SingleProduct'

function Home() {
  const {
    state: {products}
  } = CartState()

  return (
    <div className='home'>

      <div className="productContainer">
          {
            products.map((product) => {
              return <SingleProduct prod={product}
                                    key={product.id}
              />
            })
          }
      </div>

    </div>
  )
}

export default Home