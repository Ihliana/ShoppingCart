import React, {createContext} from 'react'


const Cart = createContext()

export const Context = ({children}) => {
  return (
        <Cart.Provider>
                {children}
        </Cart.Provider>

  )
  
}

export default Context
