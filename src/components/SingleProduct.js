import React from 'react'
import {Button, Card, Row, Col} from 'react-bootstrap'
import Rating from './Rating'
import {CartState} from '../context/Context'


/**
 * A React component for displaying details of a single product
 * 
 * @component
 * 
 * @param {Object} prod - The product object containing information to display
 * @param {string} prod.image - The url of the product's image
 * @param {string} prod.name - The name of the product 
 * @param {string} prod.price - The price of the product
 * @param {boolean} prod.fastDelivery - Indicates if the product has fastDelivery functionality
 * @param {number} prod.ratings - The product's rating
 * @param {boolena} prod.inStock - Indicates if the product is in stock
 * 
 * @returns  {JSX Element} The rendered product card component
 */

function SingleProduct({prod}) {
  const {state: {cart}, dispatch }  = CartState()

  return (
    <div className='products'>
        <Card>
          {/* Product Image */}
            <Card.Img variant='top' src={prod.image} alt={prod.name} />

            <Card.Body>
              <Row>
                <Col sm={6}>
                    {/* Product Name */}
                    <Card.Title>{prod.name}</Card.Title>

                    {/* Product Price and Delivery */}
                    <Card.Subtitle style={{paddingBottom: 10}}>
                      <span> ${prod.price.split(".")[0]}</span>
                      {
                        prod.fastDelivery ? (
                          <div>Fast Delivery</div>
                        ) : (
                          <div>4 days delivery</div>
                        )
                      }

                      {/* Product Rating */}
                      <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                </Col>

                <Col sm={6} className="d-flex align-items-center justify-content-center">
                    {
                      cart.some(p => p.id === prod.id) ? (
                        <Button onClick = {() => { dispatch({type: "REMOVE_FROM_CART", payload: prod})
                      }} variant='danger'>Remove from Cart</Button>

                      ) : <Button onClick={() => {dispatch({type: "ADD_TO_CART", payload: prod})}} disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to cart"}</Button>
                    }
                </Col>
              </Row>
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct