import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'

import Rating from './Rating'


describe("Rating component", () => {
    it('renders the correct number of stars based on the rating', () => {
        render(<Rating rating={3} />);
        const filledStars = screen.getAllByTestId('filled')
        const outlinedStars = screen.getAllByTestId("outline");
    
        expect(filledStars.length).toBe(3);
        expect(outlinedStars.length).toBe(2);
      });
      

      it('applies custom styles to the star container', () => {
        const customStyle = { color: 'red' };
        const { container } = render(<Rating rating={3} style={customStyle} />);
    
        const starContainer = container.firstChild;
        
        // Check if the custom style is applied
        expect(starContainer).toHaveStyle('color: red');
      });

      it('calls the onClick handler when a filled star is clicked', () => {
        const onClickMock = jest.fn()
        render(<Rating rating={3} onClick={onClickMock} />)

        const filledStars = screen.getAllByTestId('filled')

        //simulate a click on the first start
        fireEvent.click(filledStars[0])

        //onClick handler was called with the correct index
        expect(onClickMock).toHaveBeenCalledWith(0)


      })

})