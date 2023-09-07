import React from 'react'
import {Container, Navbar, FormControl,Badge, Nav, Dropdown, Button} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";

import {Link} from "react-router-dom"
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
/**
 * 
 * Header component for the e-commerce website, displaying the navigation bar with cart information
 * 
 * @component Header
 * @returns {JSX.Element} The rendered Header component
 */


function Header() {

    //Retrieve cart state and dispatch function from the context
    const {state: {cart}, dispatch, productDispatch} = CartState()


  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>

            <Navbar.Text className='search'>
                <FormControl style={{width: 500}} 
                                className='-auto' 
                                placeholder="Search a product" 
                                onChange = {(e) => {
                                    productDispatch({type: "FILTER_BY_SEARCH", payload: e.target.value})
                                }}/>
            </Navbar.Text>

            <Nav>
                <Dropdown>
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
                                    <Link to="/cart">
                                        <Button style={{width: "95%", margin: "0 10px"}}>
                                            Go To Cart
                                        </Button>
                                    </Link>
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