import React from 'react'
import {Container, Navbar, FormControl,Badge, Nav, Dropdown} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";

import {Link} from "react-router-dom"
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

function Header() {

    const {state: {cart}, dispatch} = CartState()


  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>

            <Navbar.Text className='search'>
                <FormControl style={{width: 500}} className='-auto' placeholder="Search a product" />
            </Navbar.Text>

            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success' data-testid='cart-toggle'>
                        <FaShoppingCart color="white" fontSize="25px" className='shoppingCart' data-testid='cart-icon' />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>

                        {
                            cart.length > 0 ? (
                                <>
                                    {
                                        cart.map(product => (
                                            <span className='cartItem' key={product.id}>
                                                <img src={product.image}
                                                    className='cartItemImg'
                                                    alt={product.name} />

                                                <div className='cartItemDetail'>
                                                    <span>{product.name}</span>
                                                    <span>$ {product.price.split("")[0]}</span>
                                                </div>

                                                <AiFillDelete fontSize="20px" style={{cursor: 'pointer'}} 
                                                                onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: product})} />

                                            </span>
                                        ))
                                    }
                                </>
                            ) : (
                                <span style={{padding: 10}}>Cart is Empty!</span>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header