import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

/**
 * A customizable star rating component
 * 
 * This component displays a star rating system where each star can be filled 
 * based on the provided rating value.
 * 
 * @component
 * @param {object}  props - The component's props
 * @param {number} props.rating - The current rating value to display (0 to 5)
 * @param {function} - props.onClick - A callback function to handle clicks on the stars
 * @param {object} props.style - CSS styles to apply to the stars container 
 * @returns {JSX Element} - The rendered star rating component
 */

function Rating({rating, onClick, style}) {
  return (
    <>
      {
        [...Array(5)].map((_, idx) => (
            <span key={idx} onClick={() => onClick(idx)} style={style}>
                {
                    rating > idx ? (
                        <AiFillStar fontSize="1em" />
                    ) : (
                        <AiOutlineStar fontSize="1em" />
                    )
                }
            </span>
        ))
      }  

    </>
  )
}

export default Rating