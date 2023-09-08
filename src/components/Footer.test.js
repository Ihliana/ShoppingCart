import {screen, render} from "@testing-library/react"
import Footer from "./Footer"


describe("Footer component renders correctly", () => {
    test('text renders', () => {
        render(<Footer />)

        const text1 = screen.getByText('Shopping Cart', {exact: false})
        expect(text1).toBeInTheDocument()

        const text2 = screen.getByText('Check out', {exact: false})
        expect(text2).toBeInTheDocument()

        // Check if the link is present with the correct URL
        const link = screen.getByRole('link', { name: /here/i });
        expect(link).toHaveAttribute('href', 'https://www.youtube.com/watch?v=HptuMAUaNGk');

    })

})