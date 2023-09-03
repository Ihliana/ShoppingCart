import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

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