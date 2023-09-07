import {screen, render} from "@testing-library/react"
import SingleProduct from "./SingleProduct"


describe("SingleProduct test suite", ()=> {
    const product = {
        image: "product-image.jpg", 
        name: "Sample Product", 
        price: '29.99',
        fastDelivery: true,
        ratings: 4.5,
        inStock: true
    }
    test('renders product details correctly', () => {

        render(<SingleProduct prod={product} />)

        //check if product name is displayed
        const name = screen.getByText("Sample Product")
        expect(name).toBeInTheDocument()

        //check if product price is displayed
        const price = screen.getByText("$29")
        expect(price).toBeInTheDocument()

        //check if 'Fast Delivery' is displayed
        const fastDelivery = screen.getByText('Fast Delivery')
        expect(fastDelivery).toBeInTheDocument()

        //check if the product image is displayed with the correct alt text
        const image = screen.getByAltText("Sample Product")
        expect(image).toBeInTheDocument()

        //check if the "Add to Cart" button is enabled
        const addBtn = screen.getByText("Add to Cart")
        expect(addBtn).toBeInTheDocument()
    
    })

    test('displays "Out of Stock" if the product is not in stock', () => {
        const outOfStockProduct = {...product, inStock: false}
        render(<SingleProduct prod={outOfStockProduct} />)

        //check if the 'Out of Stock' is displayed
        const outOfStock = screen.getByText("Out of Stock")
        expect(outOfStock).toBeInTheDocument()

        //check if the "Out of Stock" button is disabled
        expect(outOfStock).toBeDisabled()

    })
})