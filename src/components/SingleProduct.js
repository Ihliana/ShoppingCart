import React from 'react'
import {Button, Card} from 'react-bootstrap'
import Rating from './Rating'


/**
 * A React component for displaying details of a single product
 * 
 * @component
 * @param {Object} props - The component's props
 * @param {Object} props.prod - The product object containing information to display
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
  return (
    <div className='products'>
        <Card>
          {/* Product Image */}
            <Card.Img variant='top' src={prod.image} alt={prod.name} />

            <Card.Body>
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

                 {/* Buttons */}
                <Button variant='danger'>Remove from Card</Button>
                <Button disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to Cart"}</Button>

            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct