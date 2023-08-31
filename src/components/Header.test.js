import {screen, render, fireEvent } from "@testing-library/react"

import Header from './Header'


describe('Header component', () => {
    test("Brand title renders correctly", () => {
        render(<Header />)

        const brandTitle = screen.getByText("Shopping Cart")

        expect(brandTitle).toBeInTheDocument()
    })

    test('Search input renders correctly', () => {
        render(<Header />)

        const searchInput = screen.getByPlaceholderText("Search a product")

        expect(searchInput).toBeInTheDocument()
    })

    test('Cart icon with badge renders correctly', () => {
        render(<Header />)

        const cartIcon = screen.getByTestId("cart-icon")
        const badge = screen.getByText('10')

        expect(cartIcon).toBeInTheDocument()
        expect(badge).toBeInTheDocument()
    })

    test('Cart menu with correct text when empty', () => {
        render(<Header />)

        const cartToggle = screen.getByTestId("cart-toggle")
        fireEvent.click(cartToggle)

        const cartEmptyText = screen.getByText("Cart is Empty!")
        expect(cartEmptyText).toBeInTheDocument()
    })
})