import React from 'react'

import { Button, Form} from "react-bootstrap";
import Rating from './Rating';

/**
 * A React component for filtering and sorting products.
 *
 * @component
 */

function Filters() {

  const [rate, setRate] = React.useState(3)



  return (
    <div className='filters'>

         {/* Title */}
        <span className='title'>Filter Products</span>

          {/* Sorting Options */}
        <span>
            <Form.Check 
                inline 
                label='Asceding'
                name="group1"
                type='radio'
                id={`inline-1`} />
        </span>
        <span>
            <Form.Check 
                inline 
                label='Descending'
                name="group1"
                type='radio'
                id={`inline-2`} />
        </span>
        <span>
            <Form.Check 
                inline 
                label='Include Out of Stock'
                name="group1"
                type='checkbox'
                id={`inline-3`} />
        </span>
        <span>
            <Form.Check 
                inline 
                label='Fast Delivery Only'
                name="group1"
                type='checkbox'
                id={`inline-4`} />
        </span>

         {/* Rating Filter */}
        <span>
            <label style={{paddingRight: 10}}>Rating:</label>
            <Rating rating={rate}
                    onClick={(idx) => setRate(idx + 1)}
                   style={{cursor: 'pointer'}} />
        </span>

         {/* Clear Filters Button */}
        <Button variant='light'>Clear Filters</Button>
    </div>
  )
}

export default Filters