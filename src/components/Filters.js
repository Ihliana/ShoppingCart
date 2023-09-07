import React from 'react'

import { Button, Form} from "react-bootstrap";
import Rating from './Rating';
import { CartState } from '../context/Context';

/**
 * A React component for filtering and sorting products.
 *
 * @component
 */

function Filters() {

    const {productState: {byStock, byFastDelivery, sort, byRating}, productDispatch} = CartState()

    console.log(byStock, byFastDelivery, sort, byRating)


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
                id={`inline-1`} 
                onChange = {() => productDispatch({type: "SORT_BY_PRICE", payload: 'lowToHigh'})}

                checked = {sort === 'lowToHigh' ? true : false}
                />
        </span>
        <span>
            <Form.Check 
                inline 
                label='Descending'
                name="group1"
                type='radio'
                id={`inline-2`} 
                onChange = {() => productDispatch({type: "SORT_BY_PRICE", payload: 'highToLow'})}
                checked = {sort === 'highToLow' ? true : false}
                />
        </span>
        <span>
            <Form.Check 
                inline 
                label='Include Out of Stock'
                name="group1"
                type='checkbox'
                id={`inline-3`} 
                onChange = {() => productDispatch({type: "FILTER_BY_STOCK" })}
                checked = {byStock}
                />
        </span>
        <span>
            <Form.Check 
                inline 
                label='Fast Delivery Only'
                name="group1"
                type='checkbox'
                id={`inline-4`} 
                onChange = {() => productDispatch({type: "FILTER_BY_DELIVERY"})}
                checked = {byFastDelivery}
                />
        </span>

         {/* Rating Filter */}
        <span>
            <label style={{paddingRight: 10}}>Rating:</label>
            <Rating rating={byRating}
                    onClick={(idx) => productDispatch({
                      type: "FILTER_BY_RATING",
                      payload: idx + 1
                    })}
                   style={{cursor: 'pointer'}} />
        </span>

         {/* Clear Filters Button */}
        <Button variant='light' 
                onClick={() => productDispatch({type: "CLEAR_FILTERS"})}
        >Clear Filters</Button>
    </div>
  )
}

export default Filters